function minimumSwaps(arr) {
    let m = 0;
    let l = arr.length - 1;
    let a = [];
    
    while (l > 0 ) { 
        let v = Math.min(...arr);
        a.push(v);
        arr.remove(v);
        m++;
        l--;
    }
    return m;
}