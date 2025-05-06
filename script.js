let listaDeAlunos = JSON.parse(localStorage.getItem("alunos")) || [];

function novoCadastro(nome, idade, curso) {
  return {
    nome: nome,
    idade: idade,
    curso: curso
  };
}

function salvarNoStorage() {
  localStorage.setItem("alunos", JSON.stringify(listaDeAlunos));
}

function inserirAluno(evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  const curso = document.getElementById("curso").value;

  const aluno = novoCadastro(nome, idade, curso);
  listaDeAlunos.push(aluno);
  salvarNoStorage();
  mostrarAlunos();

  document.getElementById("formAluno").reset();
}

function removerAluno(posicao) {
  listaDeAlunos.splice(posicao, 1);
  salvarNoStorage();
  mostrarAlunos();
}

function mostrarAlunos() {
  const lista = document.getElementById("listaAlunos");
  lista.innerHTML = "";

  listaDeAlunos.forEach((aluno, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${aluno.nome}</strong> - ${aluno.idade} anos - Curso: ${aluno.curso} 
      <button onclick="removerAluno(${i})">Excluir</button>`;
    lista.appendChild(li);
  });
}

document.getElementById("formAluno").addEventListener("submit", inserirAluno);
mostrarAlunos();
