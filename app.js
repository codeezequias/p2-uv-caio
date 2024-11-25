document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
    const query = document.getElementById('anime-search').value.trim();
    if (!query) return; // Não faz a busca se o campo estiver vazio

    // URL da Jikan API para busca de animes
    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&page=1`;

    // Requisição Fetch para buscar dados
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = ''; // Limpa resultados anteriores
            resultsContainer.style.display = 'block'; // Exibe a área de resultados

            if (data.data && data.data.length > 0) {
                // Limitar a 6 resultados
                const limitedResults = data.data.slice(0, 6); // Pega apenas os 6 primeiros resultados

                limitedResults.forEach(anime => {
                    const animeDiv = document.createElement('div');

                    // Usar classes CSS para alterar o estilo
                    const title = document.createElement('h3');
                    title.innerText = anime.title;
                    title.classList.add('anime-title'); // Adiciona a classe do título
                    animeDiv.appendChild(title);

                    const description = document.createElement('p');
                    description.innerText = anime.synopsis ? anime.synopsis.substring(0, 100) + '...' : 'Sem descrição';
                    description.classList.add('anime-description'); // Adiciona a classe da descrição
                    animeDiv.appendChild(description);

                    // Imagem
                    const imgContainer = document.createElement('div');
                    imgContainer.style.display = 'flex';
                    imgContainer.style.alignItems = 'center';
                    const img = document.createElement('img');
                    img.src = anime.images.jpg.image_url;
                    img.alt = anime.title;
                    imgContainer.appendChild(img);
                    animeDiv.appendChild(imgContainer);

                    resultsContainer.appendChild(animeDiv);
                });
            } else {
                resultsContainer.innerHTML = '<p>Nenhum anime encontrado.</p>';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar anime:', error);
            const resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = '<p>Erro ao buscar dados.</p>';
            resultsContainer.style.display = 'block';
        });
});
