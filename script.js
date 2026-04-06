const form = document.getElementById('formulario');



form.addEventListener('submit', function (event) {

    event.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let peso = document.getElementById('peso').value;
    let tipo = document.getElementById('tipo-sangue').value;
    let idade = document.getElementById('idade').value;
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;

    let doadores = [];
    let doador = {
        nome,
        email,
        telefone,
        peso,
        tipo,
        idade,
        estado,
        cidade,
        
    };

    //VALIDAÇÔES

    //Nome

    const espacoNome = /\s/.test(nome);

    if (!espacoNome){
        alert("Você precisa colocar nome e sobrenome");

        valido = false;
    }

    if (nome.length < 3) {
        
        alert("Você precisa colocar nome e sobrenome");

        valido = false;
    }

    //Email

    if (!email.includes('@')) {

        alert("Email deve conter @");

        valido = false;

    }
    
    //Idade

    if (idade < 16) {
        alert("Você precisa ser maior de 16 anos");

        valido = false;
    }

    //Peso

    if (peso < 50){
        alert("Você precisa ter mais de 50kg");

        valido = false;
    }

    //Tipo

    compatibilidade = document.getElementById('compatibilidade');

    if (!tipo){
        alert ("Escolha seu tipo sanguíneo");

        valido = false;
    }

    //Telefone

    if (isNaN(telefone)) {
       alert("O telefone precisa ser numérico")

        valido = false;
    }

    //Cidade

    if (!cidade){
        alert("Informe a sua cidade")

        valido = false;
    }

    
    if (valido) {

        let resultado = document.getElementById('resultado')

        resultado.innerHTML = `
        Dados enviados: <br>
        Nome: ${nome} <br> 
        Email: ${email} <br> 
        Telefone: ${telefone} <br>
        Peso: ${peso} <br>
        Tipo: ${tipo} <br>
        Estado: ${estado} <br>
        Idade: ${idade} <br>
        Cidade: ${cidade} <br>
        `;

        doadores.push(doador);

        console.log(doadores);

         nome.value = "";
         email.value = "";
         telefone.value = "";
         peso.value = "";
         tipo.value = "";
         idade.value = "";
         estado.value = "";
         cidade.value = "";

    }
});
