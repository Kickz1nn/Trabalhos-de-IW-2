function ordena3() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    n3 = document.getElementById("n3").value;
    ArrayUser = [parseInt(n1), parseInt(n2), parseInt(n3)];

    ArrayUser.sort((a, b) => a -b)
    console.log(ArrayUser);
}