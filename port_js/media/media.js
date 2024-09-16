let mediafinal;
let faltas;


function media() {
    let nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    let nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    let nota3 = parseFloat(document.getElementById("nota3").value) || 0;
    let nota4 = parseFloat(document.getElementById("nota4").value) || 0;
    let nota5 = parseFloat(document.getElementById("nota5").value) || 0;

    mediafinal = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    document.getElementById("mediafinal").textContent = mediafinal.toFixed(2);
}


function ver() {
    if (typeof mediafinal === 'undefined') {
        alert("Calcule a média primeiro.");
        return;
    }
    if (mediafinal >= 6) {
        alert("Você passou!");
    } else {
        alert("Você reprovou!");
    }
}


function falta() {
    faltas = parseInt(document.getElementById("faltas").value) || 0;
    document.getElementById("falta").textContent = faltas;
}

function verfalta() {
    if (faltas > 21) {
        alert("Reprovado por falta.");
    } else {
        alert("Boa presença.");
    }
}


Rf= (mf >= 6) && (pf>=75) ? "Aprovado" : "Reprovado"