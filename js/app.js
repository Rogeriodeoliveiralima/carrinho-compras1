let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';
document.getElementById('quantidade').value = 0;
 
function adicionar(){

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    if (!produto || produto.trim()=== ''){
        return alert('Informe um produto valido!');
    }

    if(isNaN(quantidade)|| quantidade <= 0){
        return alert('Informe quantidade valida!');
    }

    let preco = quantidade * valorUnitario;

    totalGeral = totalGeral + preco;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$${totalGeral}`;

}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('quantidade').value = 0; 
}