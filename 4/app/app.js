// Szukanie adresów linków:
// znajdźcie wszystkie linki, które zawierają atrybut href i zapiszcie do zmiennej linkElems,
// stwórzcie funkcję getAddressesOfElements(elements), do której przekażecie jako argument znalezione elementy,
// stwórzcie w funkcji tablicę i wypełnijcie ją adresami pobranymi z elementów przekazanych jako argument,
// jeśli atrybut href elementu jest pusty, nie dodawajcie tej wartości do nowej tablicy,
// zwróćcie tablicę.

const linkElems = document.querySelectorAll('[href]');

function getAddressesOfElements(elements){
    const myArray =[];
    elements.forEach(element => {
        if(element.getAttribute('href')){
            myArray.push(element.getAttribute('href'));
        }
    })
    return myArray;
}

console.log(getAddressesOfElements(linkElems))