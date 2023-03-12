function checkMagazine(magazine, note) {
    let m = {}
    for (let i = 0; i < magazine.length; i++) {
        if (m[magazine[i]] == undefined) {
            m[magazine[i]] = 1;
        } else {
            m[magazine[i]]++;
        }
    }
    for (let i = 0; i < note.length; i++){
        if (m[note[i]] == undefined) {
            console.log('No');
            return;
        }
        if (m[note[i]] > 0) {
            m[note[i]]--;
        } else {
            console.log('No');
            return;
        }
    }
    console.log('Yes');
}
// Sample Input 0
console.log(checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today'])); // Yes

// Sample Input 1
console.log(checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four'])); // No

// Sample Input 2
console.log(checkMagazine(['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'], ['ive', 'got', 'some', 'coconuts'])); // No


