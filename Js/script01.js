let alunosCadastrados = 0;
let listaAlunos = [];
let mediaGeral = 0;

// Função do botão de Cadastrar Aluno
let btnCadastrar = document.querySelector('.cadastro form button');
btnCadastrar.addEventListener("click", () => {
  let situacao = "";

  function validarAluno(nome, n1, n2, n3, n4) {
    if (nome == "") {
      window.alert("Insira o nome do aluno!!")
      return false
    } else if (n1 === "" || parseInt(n1) < 0 || parseInt(n1) > 100) {
      window.alert("Cadastre uma nota de 0 a 100!!")
      return false
    } else if (n2 === "" || parseInt(n2) < 0 || parseInt(n2) > 100) {
      window.alert("Cadastre uma nota de 0 a 100!!")
      return false
    } else if (n3 === "" || parseInt(n3) < 0 || parseInt(n3) > 100) {
      window.alert("Cadastre uma nota de 0 a 100!!")
      return false
    } else if (n4 === "" || parseInt(n4) < 0 || parseInt(n4) > 100) {
      window.alert("Cadastre uma nota de 0 a 100!!")
      return false
    } else {
      return true
    }
  };

  let verificarSituacao = (media) => {
    // Verificando a situação do Aluno
    if (media >= 75) {
      situacao = "Aprovado";
    } else if (media >= 50 & media < 75) {
      situacao = `Recuperação`;
    } else {
      situacao = `Reprovado`;
    }
  }

  // pegando os valores do input
  let nome = document.getElementById("nameInput").value;
  let nota1 = document.getElementById("nota1Input").value;
  let nota2 = document.getElementById("nota2Input").value;
  let nota3 = document.getElementById("nota3Input").value;
  let nota4 = document.getElementById("nota4Input").value;

  // Validando o aluno
  if (!validarAluno(nome, nota1, nota2, nota3, nota4)) { return false }

  // Calculando a média do ALuno
  mediaAluno = parseInt((parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4);

  //Verificando a situação do ALuno
  verificarSituacao(mediaAluno)

  // Adicionando o Aluno a lista de Alunos
  listaAlunos.push({
    Nome: nome,
    Nota1: nota1,
    Nota2: nota2,
    Nota3: nota3,
    Nota4: nota4,
    Situacao: situacao,
    MediaAluno: mediaAluno
  });

  // Incrementando um usuário
  // E Verificando o limite de alunos
  alunosCadastrados++;
  if (alunosCadastrados > 5) {
    document.querySelector(".cadastro form").setAttribute("style", "display:none;")
    alert("você atingiu limite de alunos!!")
    return false
  }

  // Exibindo a seção de alunos e Adicionando aluno o aluno a tabela
  document.querySelector(".alunos").setAttribute("style", "display:block;");
  document.querySelector("#tblAlunos tbody").innerHTML += `
    <tr class=${situacao}>
      <th>${nome}</th>
      <th>${nota1}</th><th>${nota2}</th> 
      <th>${nota3}</th> 
      <th>${nota4}</th> 
      <th>${situacao}</th>
      <th>${mediaAluno}</th>
    </tr>
  `

  // Calculando Media Geral da Sala e exibindo
  mediaGeral = listaAlunos.reduce((soma, aluno) => {
    soma += aluno.MediaAluno;
    return soma
  }, 0) / listaAlunos.length
  document.querySelector("#tblAlunos tfoot").setAttribute("style", "display:grid;")
  document.getElementById("mediaGeral").innerText = mediaGeral

  // Limpando campos do formulário
  document.getElementById("nameInput").value = "";
  document.getElementById("nota1Input").value = "";
  document.getElementById("nota2Input").value = "";
  document.getElementById("nota3Input").value = "";
  document.getElementById("nota4Input").value = "";

  // Exibindo o quantidade de alunos cadastrados
  let alunosCadastradosElement = document.querySelector('#AlunosPagination');
  alunosCadastradosElement.innerText = `${alunosCadastrados} de 5 alunos cadastrados`;

  // Quando usuário cadastrar mais de 2 alunos
  // mostra os alunos abaixo da média geral 
  if (alunosCadastrados >= 2) {
    document.querySelector("section h3").setAttribute("style", "display:block;")
    document.querySelector("#tblAbaixoMedia tbody").innerHTML = '';

    // Criando lista com ALunos abaixo da média
    let listaAlunosAbaixo = []; 
    listaAlunos.map(aluno => {
      if (aluno.MediaAluno < mediaGeral) {
        listaAlunosAbaixo.push(aluno)
      }
    });

    // Adicionando os alunos abaixo da média na tabela
    listaAlunosAbaixo.map(aluno => {
      document.getElementById("tblAbaixoMedia").setAttribute("style", "display:grid;");
      document.querySelector("#tblAbaixoMedia tbody").innerHTML += `
        <tr class="abaixoMedia">
          <th>${aluno.Nome}</th>
          <th>${aluno.Situacao}</th>
          <th>${aluno.MediaAluno}</th>
        </tr > 
    `;
    })

  }
});