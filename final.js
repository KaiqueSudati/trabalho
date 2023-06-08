var prompt = require('prompt-sync')();
let total = 0;
let entrada = 0;
let calc1=0,calc2=0,calc3=0,calc4=0,calc5=0,calc6=0;
let v100 = false
let v101 = false
let v102 = false
let v103 = false
let v104 = false
let v105 = false


while (entrada == 0 ) {

entrada = Number(prompt('Digite o Código do produto: '));
    if (entrada == 100) {
        console.log('100: Cachorro Quente R$ 1.20');
        quant = Number(prompt('Digite a quantidade: '))*1.20;
        while(isNaN(quant)){
        quant = Number(prompt('Quantidade inválida Digite a quantidade: '))*1.20;
        }
        calc1 += quant
        v100 = true
        entrada = 0;
    }
    if (entrada == 101) {
        console.log('101: Bauru Simples R$ 1.30');
        quant = Number(prompt('Digite a quantidade: '))*1.30;
        while(isNaN(quant)){
        quant = Number(prompt('Quantidade inválida Digite a quantidade: '))*1.30;
        }
        calc2 += quant
        v101 = true
        entrada = 0;
    }
    if (entrada == 102) {
        console.log('102: Bauru com ovo R$ 1.50');
        quant = Number(prompt('Digite a quantidade: '))*1.50;
        while(isNaN(quant)){
        quant = Number(prompt('Quantidade inválida Digite a quantidade: '))*1.50;
        }
        calc3 += quant
        v102 = true
        entrada = 0;
    }
    if (entrada == 103) {
        console.log('103: Hambúrguer R$ 1.20');
        quant = Number(prompt('Digite a quantidade: '))*1.20;
        while(isNaN(quant)){
        quant = Number(prompt('Quantidade inválida Digite a quantidade: '))*1.20;
        }
        calc4 += quant
        v103 = true
        entrada = 0;
    }
    if (entrada == 104) {
        console.log('104: Cheeseburguer R$ 1.30');
        quant = Number(prompt('Digite a quantidade: '))*1.30;
        while(isNaN(quant)){
        quant = Number(prompt('Quantidade inválida Digite a quantidade: '))*1.30;
        }
        calc5 += quant
        v104 = true
        entrada = 0;
    }
    if (entrada == 105) {
        console.log('105: Refrigerante R$ 1.00');
        quant = Number(prompt('Digite a quantidade: '))*1;
        while(isNaN(quant)){
        quant = Number(prompt('Quantidade inválida Digite a quantidade: '))*1;
        }
        calc6 += quant
        v105 = true
        entrada = 0;
    }
    if (entrada == 999) {
        if (v100) {
            console.log('COD 100: ', calc1/1.20, 'un', 'R$ ', calc1)
            total += calc1
        }
        if (v101) {
            console.log('COD 101: ', calc2/1.30, 'un', 'R$ ', calc2)
            total += calc2
        }
        if (v102) {
            console.log('COD 102: ', calc3/1.50, 'un', 'R$ ', calc3)
            total += calc3
        }
        if (v103) {
            console.log('COD 103: ', calc4/1.20, 'un', 'R$ ', calc4)
            total += calc4
        }
        if (v104) {
            console.log('COD 104: ', calc5/1.30, 'un', 'R$ ', calc5)
            total += calc5
        }
        if (v105) {
            console.log('COD 105: ', calc6/1, 'un', 'R$ ', calc6)
            total += calc6
        }
        console.log('Valor total do pedido R$: ', total);
        break;
    }
    
    else if (entrada != 0) {
        console.log('Valor inválido')
        entrada = 0;
    }
}

