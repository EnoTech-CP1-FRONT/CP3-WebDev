
let verificar = document.getElementById("verificar");
let resposta = document.getElementById("resultado").value;
let noticias = [];

verificar.addEventListener('click', () => {
    let noticia = document.getElementById("busca").value 
    for(let i = 0; i <= length(noticias); i++){
        if (noticia == noticias){
            resposta()
        }
    }
    
    
    
})

function resposta(){
    if (noticia == True){
        resposta.innerHtml = "Fato Verificado ✅";
    } else{
        resposta.innerHtml = "Fake News ❌";
    }
}

function obterCodigoHex(nome) {
    // Uma lógica simples para algumas cores comuns
    const coresPredefinidas = {
        red: '#FF0000',
        blue: '#0000FF',
        purple: '#800080',
        yellow: '#FFFF00',
        green: '#008000',
        orange: '#FFA500',
        pink: '#FFC0CB',
    };
    return coresPredefinidas[nome.toLowerCase()] || nome; // Retorna o código ou o próprio nome
}