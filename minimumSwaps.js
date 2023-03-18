function minimumSwaps(arr) {
    let m = 0;
    let l = arr.length - 1;
    let a = [];
    
    while (l > 0 ) {
        let v = Math.min(...arr);
        a.push(v);
        arr.splice(arr[l], 1);
        console.log(arr);
        m++;
        l--;
    }
    console.log(a);
    return m;
}
let arr = [7, 1, 3, 2, 4, 5, 6];
console.log(minimumSwaps(arr));

