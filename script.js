let contador = [];

function selecionarPrato(classe) {


    const pratoselecionado = document.querySelector('.selecionado');
    if (pratoselecionado !== null) {
        pratoselecionado.classList.remove('selecionado');
    }
    const pratosel = document.querySelector(classe);
    pratosel.classList.add('selecionado');
    // const pedido = document.querySelector('.selecionado .texto h3');
    // const preço = document.querySelector('.selecionado .texto h4 span');
    // const pedidoprato = pedido.innerHTML + "----" + "R$"+ Number(preço.innerHTML);
    // alert(pedidoprato);
    contador.push(1);
}

function selecionarBebida(classe) {


    const bebidaselecionada = document.querySelector('.selecionado1');
    if (bebidaselecionada !== null) {
        bebidaselecionada.classList.remove('selecionado1');
    }
    const bebidasel = document.querySelector(classe);
    bebidasel.classList.add('selecionado1');
    // const pedido1 = document.querySelector('.selecionado1 .texto h3');
    // const preço1 = document.querySelector('.selecionado1 .texto h4 span');
    // const pedidobebida = pedido1.innerHTML + "----" + "R$"+ Number(preço1.innerHTML);
    // alert(pedidobebida);
    contador.push(2);
}

function selecionarSobremesa(classe) {


    const sobremesaselecionada = document.querySelector('.selecionado2');
    if (sobremesaselecionada !== null) {
        sobremesaselecionada.classList.remove('selecionado2');
    }
    const sobremesasel = document.querySelector(classe);
    sobremesasel.classList.add('selecionado2');

    // const pedido2 = document.querySelector('.selecionado2 .texto h3');
    // const preço2 = document.querySelector('.selecionado2 .texto h4 span');
    // const pedidosobremesa = pedido2.innerHTML + "----" + "R$"+ Number(preço2.innerHTML);
    // alert(pedidosobremesa);
    contador.push(3);

    
}

function tudoPronto() {
    if (contador.indexOf(1) !== -1 &&  contador.indexOf(2) !== -1 && contador.indexOf(3) !== -1) {
        const mostrarbotao = document.querySelector('.botaofechar');
        mostrarbotao.classList.remove('escondido');
        const esconderbotao = document.querySelector('.botaoselecione');
        esconderbotao.classList.add('escondido');
        
    }
}


function fecharPedido () {

    const pedido = document.querySelector('.selecionado .texto h3');
    const preço = document.querySelector('.selecionado .texto h4 span');
    const pedidoprato = pedido.innerHTML + "----" + "R$"+ Number(preço.innerHTML);
    // alert(pedidoprato);

    const pedido1 = document.querySelector('.selecionado1 .texto h3');
    const preço1 = document.querySelector('.selecionado1 .texto h4 span');
    const pedidobebida = pedido1.innerHTML + "----" + "R$"+ Number(preço1.innerHTML);

    const pedido2 = document.querySelector('.selecionado2 .texto h3');
    const preço2 = document.querySelector('.selecionado2 .texto h4 span');
    const pedidosobremesa = pedido2.innerHTML + "----" + "R$"+ Number(preço2.innerHTML);
    
    const pedidofinal = pedido.innerHTML + '//  '+ pedido1.innerHTML + '//  '+ pedido2.innerHTML;
    const totalpedido = Number(preço.innerHTML) + Number(preço1.innerHTML) + Number(preço2.innerHTML);
    let totalpedido1 = totalpedido.toFixed(2);
    const mensagemfinal = 
    `Olá, gostaria de fazer o pedido:
- Prato: ${pedido.innerHTML}
- Bebida: ${pedido1.innerHTML}
- Sobremesa: ${pedido2.innerHTML}
Total: R$ ${totalpedido1}`
    
    const mensagemfinal1 = encodeURIComponent(mensagemfinal);
    document.getElementById("mylink").href = `https://wa.me/5522998638785?text=${mensagemfinal1}`;
    

}
// function fecharPedido () {
//     const total = preço+preço1+preço2;
//     const pedidofechado = "Seu pedido é: " + pedido + pedido1 + pedido 2;

// }