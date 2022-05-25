
function calculaPrecoTotal(quantidade) {
  if(quantidade <= 11){
    return quantidade*1.3
  }else if (quantidade > 11){
    return quantidade*1.0
  }
}