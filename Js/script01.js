// Adicionando os elementos do formulário
let nome = document.getElementById("nameInput").value;
let nota1 = document.getElementById("nota1Input");
let nota2 = document.getElementById("nota2Input").value;
let nota3 = document.getElementById("nota3Input").value;
let nota4 = document.getElementById("nota4Input").value;

let btnCadastrar = document.getElementById("btnCadastrar");

// fazendo o evento de 'click' e executando a função de verificação dos inputs e calulo de média.
btnCadastrar.addEventListener('click', function () {
    let mediaFinal = 0;
    let situacao = 0;

    // Validando os inputs
    // if (nota1 == 0 || nota2 == 0 || nota3 == 0 || nota4 == 0 || nome == "") {
    //     window.alert("Digite todas as notas do aluno");
    //     return false;
    // }

    console.log(nota1);

    // Calculando a média Final
    mediaFinal = (nota1.value + nota2.value + nota3.value + nota4.value) / 4;


    // Verificando a situação do Aluno
    if (mediaFinal >= 75) {
        situacao = 'Aprovado';
    } else if (mediaFinal >= 50 & mediaFinal < 75) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    let alunoLine = document.createElement("tr");
    alunoLine.setAttribute("class", situacao)
    let alunoStatus = `
        <th>${nome}</th>
        <th>${nota1}</th>
        <th>${nota2}</th>
        <th>${nota3}</th>
        <th>${nota4}</th>
        <th>${situacao}</th>
        <th>${mediaFinal}</th>
    `;
    alunoLine.innerHTML += alunoStatus;

    // Adicionando Elemento da tabela
    let tabelaElement = document.querySelector(".alunos table tbody");
    tabelaElement.appendChild(alunoLine);

    // Apagando os valores dos inputs
    nome.value = "";
    nota1.value = ""
    nota2.value = ""
    nota3.value = ""
    nota4.value = ""

    document.querySelector(".alunos").setAttribute("style", "display:block;")
})



