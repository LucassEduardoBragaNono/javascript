document.getElementById('searchButton').addEventListener('click', function() {
    performSearch();
});

document.getElementById('searchInput').addEventListener('input', function() {
    showSuggestions();
});

document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function showSuggestions() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = ''; // Limpar sugestões anteriores

    if (query) {
        // Exemplos de dados. Em uma aplicação real, você buscaria dados de um servidor ou banco de dados.
        const data = [
            'Apple',
            'Banana',
            'Cherry',
            'Date',
            'Elderberry',
            'Fig',
            'Grape',
            'Honeydew'
        ];

        // Filtrar dados para mostrar apenas os que começam com a consulta
        const filteredData = data.filter(item => item.toLowerCase().startsWith(query));

        // Mostrar sugestões
        if (filteredData.length > 0) {
            filteredData.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item;
                div.className = 'suggestion';
                div.addEventListener('click', () => {
                    document.getElementById('searchInput').value = item;
                    performSearch();
                });
                suggestionsContainer.appendChild(div);
            });
        } else {
            suggestionsContainer.innerHTML = '<div>Nenhuma sugestão encontrada.</div>';
        }
    }
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Limpar resultados anteriores

    if (query) {
        // Exemplos de dados. Em uma aplicação real, você buscaria dados de um servidor ou banco de dados.
        const data = [
            'Apple',
            'Banana',
            'Cherry',
            'Date',
            'Elderberry',
            'Fig',
            'Grape',
            'Honeydew'
        ];

        // Filtrar dados para mostrar apenas os que começam com a consulta
        const filteredData = data.filter(item => item.toLowerCase().startsWith(query));

        // Mostrar resultados
        if (filteredData.length > 0) {
            filteredData.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item;
                div.className = 'result-item';
                resultsContainer.appendChild(div);
            });
        } else {
            resultsContainer.innerHTML = '<div>Nenhum resultado encontrado.</div>';
        }
    }
}
