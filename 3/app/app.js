// Szukanie tekstu:
// znajdźcie wszystkie elementy listy, której klasa to funny_text i zapiszcie do zmiennej funnyTextElems,
// stwórzcie funkcję getInnerTextsOfElements(elements), do której przekażecie jako argument znalezione elementy,
// stwórzcie w funkcji tablicę i wypełnijcie ją tekstami pobranymi z elementów przekazanych jako argument,
// zwróćcie tablicę.

const funnyTextElems = document.querySelectorAll('li.funny_text');

function getInnerTextsOfElements(elements){
    const texts = [];
    elements.forEach(element => texts.push(element.innerText));
    return texts;
}

const texts = getInnerTextsOfElements(funnyTextElems);

console.log(texts);