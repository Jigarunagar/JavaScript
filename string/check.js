function Vowel(str) {
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.codePointAt(char)) {
            return true;
        }
    } 
    return false;
}
console.log(Vowel("red"));