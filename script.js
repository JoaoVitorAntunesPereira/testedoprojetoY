// A função que é chamada para ativar o hidden(esconder) do css na classe especificada
function ocultarFormulario() {
    const cookieForm = document.getElementById('cookie-form');
    cookieForm.classList.add('hidden');
  }


  // Se for 'Sim' ele ira ocultar o formulario, e em 10 segundos(10000 milissegundos) irá voltar, mas é para colocar a estimativa de 30 dias, ou menos
    const aceitaCookies = '{%ACEITA_COOKIES%}'; // Coloca 'Sim' para ele aparecer e testar
  if (aceitaCookies === 'Sim') {
    ocultarFormulario();
    setTimeout(() => {
        document.getElementById('cookie-form').classList.remove('hidden');
        }, 10000);
  }

var hiddenMenu = true;
console.log(hiddenMenu);
function showMenu(){
    if(hiddenMenu == true){
        document.getElementById('mobileNavItemsListID').style.display = 'block';
        hiddenMenu = false;
        console.log(hiddenMenu);
    }else{
        console.log(hiddenMenu);
        hideMenu();
    }
}

function hideMenu(){
    document.getElementById('mobileNavItemsListID').style.display = 'none';
    hiddenMenu = true;
}

const paragrafo = document.getElementById('fraseEmpresa');

// Obter o conteúdo do parágrafo
const conteudo = paragrafo.innerHTML;

// Separar a primeira palavra do restante do texto
const primeiraPalavra = conteudo.split(' ')[0];

/* const restanteDoTexto = conteudo.slice(primeiraPalavra.length);

// Criar uma nova string formatada com a primeira palavra tendo um font-weight maior
const novaStringFormatada = `<span style="font-weight: bold;">${primeiraPalavra}</span>${restanteDoTexto}`;

// Substituir o conteúdo original da tag <p> pela nova string formatada
paragrafo.innerHTML = novaStringFormatada; */