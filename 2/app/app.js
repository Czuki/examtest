// Dodawanie klasy:
// znajdźcie element o id sample_id_2 i zapiszcie do zmiennej sampleIdElem,
// stwórzcie funkcję getClassesOfElement(element) do której przekażecie jako argument znaleziony element,
// stwórzcie w funkcji tablicę i wypełnijcie ją nazwami klas (pobierzcie klasy z przekazanego jako argument elementu),
// zwróćcie tablicę.

const sampleIdElem = document.querySelector('#sample_id_2');

function getClassesOfElement(element){
    const classLi = [];
    element.classList.forEach(item => classLi.push(item))
    return classLi;
}

const item = getClassesOfElement(sampleIdElem);

console.log(item)