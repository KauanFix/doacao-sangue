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
        Moradia: ${moradia} <br>
        Quintal: ${quintal} <br>
        Pet: ${pet} <br>
        Sozinho: ${sozinho} <br>
        Motivo: ${motivo} <br>
        `;

        form.reset();

    }
});

    //VALIDAÇÔES

    //Nome

    if (nome.length < 3) {
        
        document.getElementById('erroNome').textContent = 'Nome deve ter no mínimo 3 letras'

        valido = false;
    }

    //Email

    if (!email.includes('@')) {

        document.getElementById('erroEmail').textContent = 'Deve ter um @ no campo email'

        valido = false;

    }

    //Telefone

    if (telefone.length < 8) {
        document.getElementById('erroTel').textContent = 'O telefone deve ter no mínimo 8 digitos'

        valido = false;
    }

    //CPF
    
    const CPFs = ["123.456.789-10", "109.876.543-21", "000.000.000-00"]
    if (cpf == CPFs[0] || cpf == CPFs[1] || cpf == CPFs[2]) {
        document.getElementById('erroCpf').textContent = 'O CPF não pode ser repetido'

        valido = false;
    } else if (!cpf.includes('.') || !cpf.includes('-')) {
        document.getElementById('erroCpf').textContent = 'O CPF precisa ter ponto e traço'

        valido = false;
    }else if (cpf.length < 15) {
        document.getElementById('erroCpf').textContent = 'O CPF precisa preencher todos os campos'

        valido = false;
    }

    //Idade

    if (idade < 18) {
        document.getElementById('erroIdade').textContent = 'Você precisa ser maior de idade para adotar um cãozinho'

        valido = false;
    }

    //Cidade

    if (!cidade){
        document.getElementById('erroCIdade').textContent = 'Você precisa morar em uma cidade'

        valido = false;
    }

    //Moradia

    if(!moradia){
        document.getElementById('erroMoradia').textContent = 'Este campo é obrigatório'

        valido = false;
    }

    //Quintal

    if(!quintal){
        document.getElementById('erroQuintal').textContent = 'Campo obrigatório'

        valido = false;
    }

    //Teve Pet

    if(!Pet){
        document.getElementById('erroPet').textContent = 'Campo obrigatório'

        valido = false;
    }

    //Pet sozinho

    if (sozinho >= 8) {
        alert("Não é recomendado deixar o animalzinho tanto tempo sozinho, reflita!");
    }

    //Motivação

    if (!motivo) {
        document.getElementById('erroMotivo').textContent = 'Campo obrigatório'

        valido = false;
    }

    //Termos de USo

    if (!TermoUso){
        document.getElementById('erroTermo').textContent = 'Você precisa aceitar todos os nossos termos'

        valido = false;
    }

    //Validação Final