// Szukanie nazw tagów:
// znajdźcie wszystkie elementy o klasie sample_class_2 i zapiszcie do zmiennej sampleClassElems,
// stwórzcie funkcję getTagsOfElements(elements), do której przekażecie jako argument znalezione elementy,
// stwórzcie w funkcji tablicę i wypełnijcie ją pobranymi nazwami tagów (pobierzcie je z elementów przekazanych jako argument),
// zwróćcie tablicę.

const sampleClassElems = document.querySelectorAll('.sample_class_2');

function getTagsOfElements(elements){
    const tagList = []
    elements.forEach(element => {
        tagList.push(element.tagName)
    })
    return tagList;
}