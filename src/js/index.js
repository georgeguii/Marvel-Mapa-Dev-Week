const personagens = document.querySelectorAll(".hero");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        /* 
            OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:
            - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 
            - retirar a classe selecionado do personagem que está selecionado
        */
        const personagemSelecionado = document.querySelector(".selected")
        personagemSelecionado.classList.remove("selected")

        personagem.classList.add('selected')

        /* 
            OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
            - alterar a imagem do jogador 1
            - alterar o nome do jogador 1
        */

        const imagemPlayer1 = document.getElementById("hero-player-1");
        imagemPlayer1.src = `./src/imagens/${idSelecionado}.png`;

        const namePlayer1 = document.getElementById("name-player-1");
        const nameSelecionado = personagem.getAttribute("data-name");
        namePlayer1.innerHTML = nameSelecionado;
    })
})