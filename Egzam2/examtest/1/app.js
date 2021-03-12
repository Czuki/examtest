// **Nie używajcie eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.**
// Napiszcie funkcję biggestSumOfTwoElements(array), która przyjmuje tablicę z liczbami i zwraca sumę dwóch największych elementów z tej tablicy.
// Dla uproszczenia możemy założyć, że przekazana tablica zawiera wyłącznie liczby - nie trzeba robić walidacji.
// Jeżeli tablica zawiera tylko jeden element, funkcja powinna zwrócić wartość tego elementu.
// Jeżeli tablica zawiera zero elementów, funkcja powinna zwrócić wartość logiczną **false**.
// **Przykład:**
// ```js
// biggestSumOfTwoElements([1,2,3,4]) // => 7
// biggestSumOfTwoElements([]) // => false
// biggestSumOfTwoElements([76]) // => 76
// biggestSumOfTwoElements([23,45,17,12]) // => 68

function biggestSumOfTwoElements(array){
    if (array.length > 1){
        let sortedArray = array.sort((a, b) => a - b)
        return sortedArray[array.length-1] + sortedArray[array.length-2]
    }else if (array.length === 1){
        return array[0];
    }else{
        return false;
    }
}

console.log(biggestSumOfTwoElements([23,45,17,12]))
console.log(biggestSumOfTwoElements([76]))
console.log(biggestSumOfTwoElements([]))
console.log(biggestSumOfTwoElements([1,2,3,4]))
