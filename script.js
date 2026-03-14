// função assíncrona(ele vai ficar buscando até achar uma resposta) que será executada quando clicar no botão "Buscar"
async function buscarLivros() {

    // pega o texto digitado no campo de busca(serach) e em seguida vai selecionar a área onde os resultados serão exibidos
    const input = document.getElementById("searchInput").value;
    const resultado = document.getElementById("resultado");

    // limpa resultados anteriores  mostra mensagem de carregamento enquanto a API responde
    resultado.innerHTML = "Carregando...";

    try {
        // faz uma requisição para a API de livros  converte a resposta da API para formato JSON
        const response = await fetch(`https://openlibrary.org/search.json?q=${input}`);
        const data = await response.json();

        // limpeza na  área de resultados antes de mostrar novos livros para usuário UWU
        resultado.innerHTML = "";

        // verifica se nenhum livro foi encontrado
        if(data.docs.length === 0){
            resultado.innerHTML = "<p>Nenhum livro encontrado</p>";
            return;
        }
         // percorre os primeiros 10 livros retornados pela API
        data.docs.slice(0,10).forEach(livro => {
            // define valores seguros caso a API não retorne algum dado (? se : se não ||or)
            const titulo = livro.title || "Título desconhecido";
            const autor = livro.author_name ? livro.author_name[0] : "Autor desconhecido";
            const ano = livro.first_publish_year || "Ano desconhecido";

            const div = document.createElement("div");
            div.classList.add("livro");

            div.innerHTML = `
                <h3>${titulo}</h3>
                <p><strong>Autor:</strong> ${autor}</p>
                <p><strong>Ano:</strong> ${ano}</p>
            `;
             // adiciona o card do livro dentro da área de resultados
            resultado.appendChild(div);

        });

    } catch (erro) {
       // caso ocorra erro na requisição e em seguida mostra o erro no console para debug
        resultado.innerHTML = "<p>Erro ao buscar livros</p>";
        console.error(erro);

    }

}