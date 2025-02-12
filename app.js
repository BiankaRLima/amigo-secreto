

// inserção de nomes no campo de texto

let nomeAmigos = [];
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';


// adicionar nome na lista clicando em "adicionar"
function adicionarAmigo(){
    let campoNome = document.getElementById('amigo')
    //console.log (campoNome);
    let nome = campoNome.value;
    
    //validar se o campo nome está vazio
    if (nome === ''){
        alert('O campo nome não pode estar vazio. Por favor, insira um nome.')
        return;
    }
        //validar se foi inserido um nome repetido
        if (nomeAmigos.includes(nome)) {
            alert('Este nome já existe, insira outro.');
            return
        }
        nomeAmigos.push(nome)
    limparCampo();
    AtualizarLista();   
} 

// inserir nome na lista do HTML
function AtualizarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';
    nomeAmigos.forEach(function(nome) {
    lista.innerHTML += `<li>${nome}</li>`
    })
    }

AtualizarLista();

// botão "sortear amigo" com função de sortear de maneira aleatória um nome recebido através do campo Nome
function sortearAmigo(){
    if (nomeAmigos.length === 0){
        alert('A lista de amigos esta vazia! Por favor, insira pelo menos um nome para sortear.')
        return;
    }
    let amigosAleatorios = Math.floor(Math.random() * nomeAmigos.length);
    let amigoSorteado = nomeAmigos[amigosAleatorios];
    document.getElementById("resultado").innerHTML = `${String.fromCodePoint(0x1F602)}🎉 A pessoa sorteada como amiga secreta é: ${amigoSorteado}!`;
    nomeAmigos.splice(amigosAleatorios, 1);
    AtualizarLista();
} 


// limpar o campo texto nome do amigo
function limparCampo(){
    nome = document.getElementById('amigo')
    nome.value = '';
}

