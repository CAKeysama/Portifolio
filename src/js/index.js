const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

let projetosVisiveis = false;

botaoMostrarProjetos.addEventListener('click', () => {
    if (!projetosVisiveis) {
        mostrarMaisProjetos();
        botaoMostrarProjetos.textContent = 'Mostrar Menos';
        projetosVisiveis = true;
    } else {
        esconderProjetos();
        botaoMostrarProjetos.textContent = 'Mostrar Mais';
        projetosVisiveis = false;
    }
});

function esconderProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

