
// Objeto de usuários:
const users = {
    nome: '',
    usuario: '',
    password: '',
    logado: false,
}

//Array de objetos dos usuários
let usersArray = [];

function startApp() {
    
    let opcao = 999;
    
    while(opcao !== 0) {
        
        let result;
        
        switch(opcao) {
            case 1:
            result = login();

            if (result === true) {
                alert('Deu certo');
            } else {
                alert('Usuário ou senha incorreto!');
            }
            
            break;
            case 2:
            
            result = register();
            
            if (!result) {
                alert("Não foi possível fazer o cadastro. Por favor, tente novamente");
            } else {
                alert("Usuário cadastrado com sucesso. 👍🏾👍🏾👍🏾");
            }
            
            break;
            case 3:
            
            break;
            case 0:
            
            break;
            case 999:
            alert('Você precisa estar logado para acessar o menu principal\n\n' + 'Caso tenha um usuário cadastrado, utilize a opção 2 do menu.')
            break;
            default:
            alert("Opção não encontrada, tente novamente.")
            break
        }
        
        opcao = Number(prompt("Selecione a opção desejada:\n" + "1 - Login\n" + "2 - Cadastrar usuário\n" + "3 - Esqueci minha senha\n" + "0 - Sair"))
        
    }
}

function register() {
    let result = false;
    
    users.nome = prompt("Digite o seu nome")
    users.usuario = prompt(`Cadastre um nome de usuário, ${users.nome}.`)
    users.password = prompt(`Cadastre uma senha, ${users.nome}.`)
    
    if (users.nome !== '' && users.password !== '') {
        usersArray.push(users);
        result = true;
    }
    
    return result;
    
}

function login() {
    
    let login = prompt("Digite seu usuário cadastrado")
    let password = prompt("Digite sua senha cadastrada")
    
    return validateLogin(login, password);
}

function validateLogin(login, password) {
    
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].usuario === login && usersArray[i].password === password) {

            result = true;
            usersArray[i].logado = true;

        }
    }

    return result;
    
}


// Iniciar o sistema:
startApp();