// variável que obtera a qauntidade de aulos
let quantA      = 0;

// variável que fara um "loop" para cadastrar o número de usuários digitado
let i           = 0;

// variável que possuira a função do botão "Adicionar Aluno".
let bto         = document.getElementById('adc');
let textQuantAl = document.getElementById('textquant')

// variáveis que irão criar dinamicamente os inputs.
let inputNomA   = "";
let div         = "";
let divBto      = "";
let inputNot1   = 0;
let inputNot2   = 0;
let inputNot3   = 0;
let inputNot4   = 0;
let btoAdc      = "";

// variáveis que obterão os valorem do input.
let nomeA       = "";
let not1        = 0;
let not2        = 0;
let not3        = 0;
let not4        = 0;

// variáveis que serão usadas para fazerem a lógica de 'Aprovado'...
let medFinal    = 0;
let situacao    = "";

// variáveis que imprimiram na página as infromações do Aluno
let textCadastro    = "";
let divCadastro

// função que criara dinamicamente os inputs.
bto.addEventListener('click', function(){

    // validação do input digitado
    quantA  = document.getElementById('quantAlunos').value;

    if(quantA == 0 || quantA == 'NaN'){
        window.alert('digite a quantidade de Aluno(s)');
        return false;
    }
    bto.style.display = 'none';
    textQuantAl.style.display = 'none';



    // criação dinâmica dos inputs, atribuindo a eles name = id, e type = tipo,.
    // e adicionando eles a uma classe para serem estilizados de uma vez só.

    div            = document.createElement('div');
    div.classList.add('divInputs')

    divBto         = document.createElement('div')
    divBto.classList.add('divBtt')
    
    inputNomA      = document.createElement('input');
    inputNomA.type = 'Text';
    inputNomA.placeholder = 'Digite o nome do Aluno'
    inputNomA.name = 'inputA'
    inputNomA.classList.add('infos');

    inputNot1      = document.createElement('input');
    inputNot1.type = 'Number';
    inputNot1.placeholder = 'Nota 1'
    inputNot1.name = 'inputNot1'
    inputNot1.classList.add('infos');

    inputNot2      = document.createElement('input');
    inputNot2.type = 'Number';
    inputNot2.placeholder = 'Nota 2'
    inputNot2.name = 'inputNot2'
    inputNot2.classList.add('infos');

    inputNot3      = document.createElement('input');
    inputNot3.type = 'Number';
    inputNot3.placeholder = 'Nota 3'
    inputNot3.name = 'inputNot3'
    inputNot3.classList.add('infos');

    inputNot4      = document.createElement('input');
    inputNot4.type = 'Number';
    inputNot4.placeholder = 'Nota 4'
    inputNot4.name = 'inputNot4'
    inputNot4.classList.add('infos');

    // botão criado para validar as informações inseridas e registrar o 'Aluno'.
    btoAdc             = document.createElement('button');
    btoAdc.name        = 'btoA'
    btoAdc.classList.add('bto');
    btoAdc.textContent = "Cadastra Aluno"

    // adicionando a página os inputs e o botão.
    div.appendChild(inputNomA);
    div.appendChild(inputNot1);
    div.appendChild(inputNot2);
    div.appendChild(inputNot3);
    div.appendChild(inputNot4);
    divBto.appendChild(btoAdc)
    document.body.appendChild(div);
    document.body.appendChild(divBto);

    // fazendo o evento de 'click' e executando a função de verificação dos inputs e calulo de média.
    btoAdc.addEventListener('click', function(){

        // pegando os valores do input
        nomeA = document.querySelector('input[name="inputA"]').value;
        not1  = parseInt(document.querySelector('input[name="inputNot1"]').value);
        not2  = parseInt(document.querySelector('input[name="inputNot2"]').value);
        not3  = parseInt(document.querySelector('input[name="inputNot3"]').value);
        not4  = parseInt(document.querySelector('input[name="inputNot4"]').value);

        // Validando os inputs
        if(not1 == "" || not2 == "" || not3 == "" || not4 == "" || nomeA == ""){
            window.alert("Digite todas as notas do aluno");
            return false;
        }

        // Calculando a média Final
        medFinal = (not1 + not2 + not3 + not4)/4;

        // Verificando a situação do Aluno
        if(medFinal >= 75){
            situacao = 'Aprovado';
        }else if(medFinal >= 50 & medFinal <75){
            situacao = 'Recuperação';
        }else{
            situacao = 'Reprovado';
        }

        // Criando a div onde as informações do Aluno iram para facilitar a estilização
        divCadastro  = document.createElement('div');
        divCadastro.classList.add('divCad');

        //  Criando a String Cadastro
        textCadastro = `nome do aluno: ${nomeA},  notas: ${not1}1°bi ${not2}2°bi ${not3}3°bi ${not4 }4°bi médida final: ${medFinal},  situação final: ${situacao}`;

        // Subindo a div para a pagina
        divCadastro.append(textCadastro);
        document.body.appendChild(divCadastro);

        // Apagando os valores dos inputs
        document.querySelector('input[name="inputA"]').value = "";
        document.querySelector('input[name="inputNot1"]').value = ""
        document.querySelector('input[name="inputNot2"]').value = ""
        document.querySelector('input[name="inputNot3"]').value = ""
        document.querySelector('input[name="inputNot4"]').value = ""
        
        // somando 1 a variável 'i' todas vez que a função conclui
        i++;

        // Apagando o botão depois que forem cadastrado o numero de usuários digitados
        if(i > quantA - 1){
            divBto.style.visibility = 'hidden';
        }
    })
})



