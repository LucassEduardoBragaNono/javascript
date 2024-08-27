function somar() {
    let val1 = documento.getElementById("valor1").value;
    let val2 = documento.getElementById("valor2").value;
    let soma = parseInt(val1) + parseInt(val2);
    document.getElementById("resultado").innerText = soma;
    console.log("Soma: " + val1 ," + " + val2);
    console.log("Soma: " + soma);
}

function subtrair() {
    let val1 = documento.getElementById("valor1").value;
    let val2 = documento.getElementById("valor2").value;
    let subtrair = parseInt(val1) - parseInt(val2);
    document.getElementById("resultado").innerText = subtrair;
}

function multiplicar() {
    let val1 = documento.getElementById("valor1").value;
    let val2 = documento.getElementById("valor2").value;
    let multiplicar = parseInt(val1) * parseInt(val2);
    document.getElementById("resultado").innerText = multiplicar;
}

function dividir() {
    let val1 = parseInt(documento.getElementById("valor1").value);
    let val2 = parseInt(documento.getElementById("valor2").value);
    let dividir = 0;

    if(val2 == 0) {
        alert("Divisão por ZERO não é possível!");
        document.getElementById("valor2").value = "";
        document.getElementById("valor2").focus();
    } else {
        dividir = val1 / val2;
        document.getElementById("resultado").innerText = dividir;
    }
}