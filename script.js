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
    
    if (valido) {

        let resultado = document.getElementById('resultado')

        resultado.innerHTML = `
        Dados enviados: <br>
        Nome: ${nome} <br> 
        Email: ${email} <br> 
        Telefone: ${telefone} <br>
        CPF: ${cpf} <br>
        Idade: ${idade} <br>
        Cidade: ${cidade} <br>
        `;

        form.reset();

    }
});

    //VALIDAÇÔES

    //Nome

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
    }

    //Telefone

    if (isNaN(telefone)) {
       

        valido = false;
    }

   

    //Cidade

    if (!cidade){
        

        valido = false;
    }