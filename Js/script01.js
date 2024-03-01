// botão criado para validar as informações inseridas e registrar o 'Aluno'.

let btnCadastro = document.getElementById("btnCadastrar");
let quantA = 0;
let btoCad = document.getElementById('cadAl');
let subT = document.getElementById('subTi');
let teste = document.getElementById('teste1');
let i = 1;
let mediaGeral = 0;
let somaAlunos = 0;
let alunosAbaixo = ""
let listaAlunos = [];
let listaAlunosReprovados = [];

teste.style.display = 'none';
subT.style.display = 'none';
// fazendo o evento de 'click' e executando a função de verificação dos inputs e calulo de média.
btoCad.addEventListener('click', function () {
  quantA = document.getElementById('quatAl').value;

  // Removendo formulário de cadastro da tela
  document.querySelector(".cadastro div").setAttribute("style", "display:none;")

  if (quantA == "" || quantA == 0) {
    window.alert('Informe a quantidade de alunos!!!')
    return false;
  } else {

  teste.style.display = 'flex';
  subT.style.display = 'flex';
  btnCadastro.addEventListener("click", () => {

    // pegando os valores do input
    let nome = document.getElementById("nameInput").value;
    let not1 = document.getElementById("nota1Input").value;
    let not2 = document.getElementById("nota2Input").value;
    let not3 = document.getElementById("nota3Input").value;
    let not4 = document.getElementById("nota4Input").value;

    // variáveis que serão usadas para fazerem a lógica de 'Aprovado'...
    let medFinal = 0;
    let situacao = "";

    // Validando os inputs
    if (not1 == "" || not2 == "" || not3 == "" || not4 == "" || nome == "") {
      window.alert("Insira todos os dados do aluno");
      return false;
    }

    // Calculando a média Final
    medFinal = (parseInt(not1) + parseInt(not2) + parseInt(not3) + parseInt(not4)) / 4;

    // Verificando a situação do Aluno
    if (medFinal >= 75) {
      situacao = "Aprovado";
    } else if ((medFinal >= 50) & (medFinal < 75)) {
      situacao = `Recuperação`;
    } else {
      situacao = `Reprovado`;
    }

    // acionando cada aluno a um idice de Array de Objs

    listaAlunos.push({
      Nome: nome,
      Nota1: not1,
      Nota2: not2,
      Nota3: not3,
      Nota4: not4,
      Situacao: situacao,
      MediaFinal: medFinal
    });

    //  Criando a String Cadastro
    resultAluno = `
      <tr class=${situacao}>
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
    let table = document.querySelector("#tblAlunos tbody");
    table.innerHTML += `<tbody>${resultAluno}</tobdy>`;

    somaAlunos += medFinal;
    mediaGeral = somaAlunos / quantA;
    document.querySelector("#mediaGeral").innerText = mediaGeral;

    if (i == quantA) {
      document.querySelector(".alunos div")
      document.querySelector("#tblAlunos tfoot").setAttribute("style", "display:flex;")
      if(quantA != 1){
        document.querySelector("#titleAbaixoMedia").setAttribute("style", "display:block;")
        document.querySelector("#tblAbaixoMedia").setAttribute("style", "display:grid;")
      }
      document.querySelector("#teste1").setAttribute("style","display:none;")

      // Verificando se o aluno está acima da média da sala
      listaAlunos.map(aluno => {
        // Verificando se a media do aluno está acima da média da turma
        if (aluno.MediaFinal < mediaGeral) {
          listaAlunosReprovados.push(aluno)
        }
      })

      listaAlunosReprovados.map(alunosReprovados => {
        document.querySelector("#tblAbaixoMedia").innerHTML += `
        <tr>
          <th>${alunosReprovados.Nome}</th>
          <th>${alunosReprovados.Situacao}</th>
          <th>${alunosReprovados.MediaFinal}</th>
        </tr > 
        `;
      })
    }
    
    document.getElementById("nameInput").value = "";
    document.getElementById("nota1Input").value = "";
    document.getElementById("nota2Input").value = "";
    document.getElementById("nota3Input").value = "";
    document.getElementById("nota4Input").value = "";

    i++;
    });
  }
})