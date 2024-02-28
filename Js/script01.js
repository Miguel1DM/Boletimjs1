// botão criado para validar as informações inseridas e registrar o 'Aluno'.
let btnCadastro = document.getElementById("btnCadastrar");
let quantA = 0;
let btoCad = document.getElementById('cadAl');
let subT = document.getElementById('subTi');
let teste = document.getElementById('teste1');
let i = 0;
let mediaGeral = 0;
let novoarray = "";
let alunosAbaixo= ""
let arrayObjs = [];

// fazendo o evento de 'click' e executando a função de verificação dos inputs e calulo de média.
teste.style.display = 'none';
subT.style.display = 'none';
btoCad.addEventListener('click', function () {


  quantA = document.getElementById('quatAl').value;
  if (quantA == "" || quantA == 0) {
    window.alert('Informe a quantidade de alunos!!!')
    return false;
  } else {
    teste.style.display = 'flex';
    subT.style.display = 'flex';
    btnCadastro.addEventListener("click", function () {

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

      // acionando cada aluno a um idice de Array de Objs
      arrayObjs.push({
        Nome: nome,
        Nota1: not1,
        Nota2: not2,
        Nota3: not3,
        Nota4: not4,
        Situacao: situacao,
        MediaFInal: medFinal
      });

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
      let table = document.querySelector("#tblAlunos tbody");
      table.innerHTML += `<tbody>${resultAluno}</tobdy>`;

      if (i >= quantA - 1) {
        subT.style.display  = 'none';
        teste.style.display = 'none';

        novoarray = arrayObjs.map(function(obj){

          return mediaGeral += parseFloat(obj.MediaFInal);
        })

        mediaGeral = mediaGeral / quantA;

        document.getElementById("mediaGeral").innerText = mediaGeral;

        alunosAbaixo = arrayObjs.map(function(aluno){
          if(aluno.MediaFInal < mediaGeral){
            // Objeto DOM do footer da tabela 
            document.querySelector("#tblAbaixoMedia tbody").innerHTML += `
            <tr>
              <th>${nome}</th>
              <th>${situacao}</th>
              <th>${medFinal}</th>
            </tr>`;     
          }
          document.getElementById("#tblAbaixoMedia").setAttribute("style","display:block;")
        })
        console.log(alunosAbaixo)
        return false;
      }

      // limpando campos do input
      document.getElementById("nameInput").value = "";
      document.getElementById("nota1Input").value = "";
      document.getElementById("nota2Input").value = "";
      document.getElementById("nota3Input").value = "";
      document.getElementById("nota4Input").value = "";

      i++
    });
  }
})