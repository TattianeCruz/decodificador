let crip_codes = {
    'a': 'ai',
    'e': 'enter',
    'i':'imes', 
    'o':'ober',
    'u':'ufat'
}
let decrip_codes = {
    'ai':'a',
    'enter':'e',
    'imes':'i', 
    'ober':'o',
    'ufat':'u'
}

const button = document.getElementById ('mybutton');
function encodeText(){
    const texto = document.getElementById ('decoder');
    const resultado = document.getElementById ('resultado');
    if (texto.value.trim()!=='')
    {
        const result = decoder.value.replace (/(a|e|i|o|u)/g, match=> crip_codes [match]);
        resultado.innerHTML = `<p id = "respost" class = "resposta"> ${result}</p><button class="copyBtn"onClick = "copyText()">Copiar</button>`;
    } else {
        resultado.innerHTML = ' <img src = "1.PNG">';
    }
}

function decodeText(){
    const texto = document.getElementById ('decoder');
    const resultado = document.getElementById ('resultado');
    if (texto.value.trim()!=='')
    {
        const result = decoder.value.replace (/(ai|enter|imes|ober|ufat)/g, match=> decrip_codes [match]);
        resultado.innerHTML = `<p id = "respost" class = "resposta"> ${result}</p><button class="copyBtn" onClick = "copyText()">Copiar</button>`;
    } else {
        resultado.innerHTML = ' <img src = "1.PNG">';
    }
}
function copyText() {
    let resultado = document.getElementById("respost");
    navigator.clipboard.writeText (resultado.innerHTML);
}
