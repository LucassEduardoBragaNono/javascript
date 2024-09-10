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

        // Filtrar dados com base na consulta
        const filteredData = data.filter(item => item.toLowerCase().includes(query));

        // Mostrar sugestões
        if (filteredData.length > 0) {
            filteredData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                li.addEventListener('click', () => {
                    document.getElementById('searchInput').value = item;
                    performSearch();
                });
                suggestionsContainer.appendChild(li);
            });
        } else {
            suggestionsContainer.innerHTML = '<li>Nenhuma sugestão encontrada.</li>';
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

        // Filtrar dados com base na consulta
        const filteredData = data.filter(item => item.toLowerCase().includes(query));

        // Mostrar resultados
        if (filteredData.length > 0) {
            filteredData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                resultsContainer.appendChild(li);
            });
        } else {
            resultsContainer.innerHTML = '<li>Nenhum resultado encontrado.</li>';
        }
    }
}
