
function contarPalavras() {
    
    const texto = document.getElementById('texto').value;

    
    const palavras = texto.split(/\s+/);
    
    
    const totalPalavras = palavras.length;
    
    
    let palavraMaisLonga = '';
    palavras.forEach(palavra => {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    });
    
    
    const palavrasUnicas = new Set();
    palavras.forEach(palavra => {
        if (palavra.length >= 3) {
            palavrasUnicas.add(palavra.toLowerCase());
        }
    });
    
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
                <p><strong>Total de Palavras:</strong> ${totalPalavras}</p>
                <p><strong>Palavra Mais Longa:</strong> ${palavraMaisLonga}</p>
                <p><strong>Palavras Únicas (com 3 ou mais letras):</strong> ${Array.from(palavrasUnicas).join(', ')}</p>
            `;
        }

