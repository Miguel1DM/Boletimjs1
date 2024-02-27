// botão criado para validar as informações inseridas e registrar o 'Aluno'.
let btnCadastro = document.getElementById("btnCadastrar");

// fazendo o evento de 'click' e executando a função de verificação dos inputs e calulo de média.
btnCadastro.addEventListener("click", function () {
  // pegando os valores do input
  const nome = document.getElementById("nameInput").value;
  const not1 = document.getElementById("nota1Input").value;
  const not2 = document.getElementById("nota2Input").value;
  const not3 = document.getElementById("nota3Input").value;
  const not4 = document.getElementById("nota4Input").value;

  console.log(nome);

  // variáveis que serão usadas para fazerem a lógica de 'Aprovado'...
  let medFinal = 0;
  let situacao = "";

  // Validando os inputs
  if (not1 == "" || not2 == "" || not3 == "" || not4 == "" || nome == "") {
    window.alert("Insira todos os dados do aluno");
    return false;
  }

  // Calculando a média Final
  medFinal =
    (parseInt(not1) + parseInt(not2) + parseInt(not3) + parseInt(not4)) / 4;

  // Verificando a situação do Aluno
  if (medFinal >= 75) {
    situacao = "Aprovado";
  } else if ((medFinal >= 50) & (medFinal < 75)) {
    situacao = `Recuperação`;
  } else {
    situacao = `Reprovado`;
  }

  //  Criando a String Cadastro
  resultAluno = `<tr class=${situacao}>
    <th>${nome}</th>
    <th>${not1}</th>
    <th>${not2}</th> 
    <th>${not3}</th> 
    <th>${not4}</th> 
    <th>${situacao}</th>
    <th>${medFinal}</th>
  </tr>`;

  // Exibindo a seção de alunos
  let alunos = document.querySelector(".alunos");
  alunos.setAttribute("style", "display:block;");

  // Inserindo usuário na tabela
  // Adicionando dados a tabela tabela
  let table = document.querySelector(".alunos table");
  table.innerHTML += `<tbody>${resultAluno}</tobdy>`;

  // limpando campos do input
  nome = "";
  not1 = "";
  not2 = "";
  not3 = "";
  not4 = "";
});
