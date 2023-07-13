// Selecionando a lista (UL) do HTML
const listaBolo = document.querySelector(".listaBolo");


// FUNÇÃO QUE LISTA OS BOLOS
function listarBolos(colecaoBolos) {

    // Limpar vitrine HTML
    listaBolo.innerHTML = "";

    // 2. Loop para encontrar os Bolos
    // 3. Montar um template (li)
    // 4. Mostrar na tela

    // 1. Acessar os Bolos
    colecaoBolos.forEach(function (bolo) {

        const template = criarTemplate(bolo);

        // adicionando o bolo de forma visual no html
        listaBolo.appendChild(template);
    })
}

listarBolos(bolos);

// FUNÇÃO QUE CRIA O TEMPLATE (LI)
function criarTemplate(bolo) {

    // CRIANDO TEMPLATE TIPO HTML
    const li = document.createElement("li");

    // ADICIONANDO ESTRUTURA HTML DENTRO DO (LI)
    li.innerHTML = `
    <figure>
        <img src="${bolo.url}" alt="${bolo.nome}">
    </figure>
    <h2>${bolo.nome}</h2>
    <h2>${bolo.descricao}</h2>
    <h3>${bolo.preco}</h3>
    `

    return li;

}

// FILTRAR BOLO POR CATEGORIA
function filtrarBolo(filtroCategoria){

    const bolosFiltrados = bolos.filter(function(bolo){
        if(filtroCategoria == bolo.categoria){
            return bolo;
        }
        
    })

    listarBolos(bolosFiltrados);

}


// SELECIONANDO MENU
const secaoCategorias = document.querySelector(".secaoCategorias")
secaoCategorias.addEventListener("click", function(event){
    event.preventDefault();

    const categoriaSelecionada = event.target.text;

    if(categoriaSelecionada == "Mostrar todos"){
        listarBolos(bolos);
    } else {
        filtrarBolo(categoriaSelecionada);
    }
} )