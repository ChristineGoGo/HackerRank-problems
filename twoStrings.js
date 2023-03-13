function twoStrings(s1, s2) {
    for (let index = 0; index < s1.length; index++) {
        const element = s1[index];
        if (s2.includes(element)) {
            return 'YES';
        }
    }
    return 'NO';
}
// sample test case 0
console.log(twoStrings('hello', 'world')); //YES

// sample test case 1
console.log(twoStrings('hi', 'world')); //NO



