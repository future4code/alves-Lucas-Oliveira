                        PODE SER ASSIM

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salario = 2000
 let totalDeVendas = qtdeCarrosVendidos * 100
 let comisao = 0.05 * valorTotalVendas
return  (salario + totalDeVendas + comisao)
}

                        OU ASSIM

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 return (2000 + (qtdeCarrosVendidos*100) + (0.05*valorTotalVendas))
}

