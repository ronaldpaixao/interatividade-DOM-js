const secao = document.getElementById('secao');
const imagem = document.getElementById('imagem');
const msg = document.getElementById('msg');


function carregar() {
    secao.addEventListener("click", clicar); 
    secao.addEventListener("mouseenter", entrar);
    secao.addEventListener("mouseleave", sair);
}

function clicar() {
    imagem.src = "./imgs/clicado.png";
    secao.style.background = "#733426";
    msg.innerHTML = "Obrigado, <strong>mamão</strong>";
    secao.style.boxShadow = "10px 10px 1px #F2E96D";
}

function entrar() {
    secao.style.background = "#F2D16D";
    msg.innerHTML = "clica <b>aêê</b>";
}

function sair() {
    secao.style.background = "#F2E96D";
    imagem.src= "./imgs/semClicar.png";
    msg.innerHTML = "<b>Volta aqui!!!!!</b>";
    secao.style.boxShadow = "10px 10px 1px #733426";
}
