function ordena() {

    let seq = [42, 34];
    seq.sort(function(a, b){
        return a - b;
    });

    console.log(seq)
}