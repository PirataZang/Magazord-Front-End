// Variaveis
const repositories      = document.getElementById("repositories"),
      starred           = document.getElementById("starred"),
      itensRepositories = document.querySelectorAll(".div-projects-repositories"),
      itensStarred      = document.querySelectorAll(".div-projects-starred"),
      SelectBtn         = document.querySelector(".select-btn");


/* Função para Ativar os Projetos do Repositories e ocultar os projetos do Starred*/
repositories.addEventListener("click", () => {
  repositories.setAttribute('data-style', 'active');

  starred.setAttribute('data-style', 'normal');

  itensRepositories.forEach(itens =>{
    itens.setAttribute('data-style', 'active');
  });

  itensStarred.forEach(itens =>{
    itens.setAttribute('data-style', 'normal');
  });
})

/* Função para Ativar os Projetos do Starred e ocultar os projetos do Repositories */
starred.addEventListener("click", () => {
  repositories.setAttribute('data-style', 'normal');

  starred.setAttribute('data-style', 'active');

  itensRepositories.forEach(itens =>{
    itens.setAttribute('data-style', 'normal');
  });
  
  itensStarred.forEach(itens =>{
    itens.setAttribute('data-style', 'active');
  });
})


// Abre a Lista de Linguagens e Tipos
SelectBtn.addEventListener("click", () => {
  SelectBtn.classList.toggle("open");
})
