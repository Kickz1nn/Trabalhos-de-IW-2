function arrays() {
    frutas = ["maçã", "banana", "laranja", "uva", "manga"];
    console.log("2 -> " + frutas[1]);

    console.log("5 -> " + frutas.findLast((element) => element));

    frutas.push("abacaxi");
    frutas.unshift("morango");
    console.log(frutas);

    frutas.shift();
    frutas.pop();
    console.log(frutas);

    indexlaranja = (element) => element == "laranja";
    console.log("O número index de laranja é : " + frutas.findIndex(indexlaranja));

    frutas2 = frutas.filter((element) => element.charAt(0) === "m");
    console.log(frutas2);
}