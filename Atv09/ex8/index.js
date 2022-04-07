const inputNumber = document.getElementById("valor");
const btMinimo = document.getElementById("minimo");
const resultado = document.getElementById("resposta");

function geraResultado(){

    let valor = parseInt(inputNumber.value);
    let calculo;
    resultado.innerHTML = "";

    if(valor>=200){

        calculo = parseInt(valor/200);
        resultado.innerHTML += (`${calculo} notas de R$200 \n`);
        valor -= calculo*200;
    }

    if(valor>=100){

        calculo = parseInt(valor/100);
        resultado.innerHTML += (`${calculo} notas de R$100 \n`);
        valor -= calculo*100;
    }

    if(valor>=50){

        calculo = parseInt(valor/50);
        resultado.innerHTML += (`${calculo} notas de R$50 \n`);
        valor -= calculo*50;
    }

    if(valor>=20){

        calculo = parseInt(valor/20);
        resultado.innerHTML += (`${calculo} notas de R$20 \n`);
        valor -= calculo*20;
    }

    if(valor>=10){

        calculo = parseInt(valor/10);
        resultado.innerHTML += (`${calculo} notas de R$10 \n`);
        valor -= calculo*10;
    }

    if(valor>=5){

        calculo = parseInt(valor/5);
        resultado.innerHTML += (`${calculo} notas de R$5 \n`);
        valor -= calculo*5;
    }

    if(valor>=2){

        calculo = parseInt(valor/2);
        resultado.innerHTML += (`${calculo} notas de R$2 \n`);
        valor -= calculo*2;
    }

    if(valor>=1){

        calculo = parseInt(valor/1);
        resultado.innerHTML += (`${calculo} notas de R$1 \n`);
        valor -= calculo*1;
    }

    if(valor>=0.50){

        calculo = parseInt(valor/0.50);
        resultado.innerHTML += (`${calculo} notas de R$0,50 \n`);
        valor -= calculo*0.50;
    }

    if(valor>=0.25){

        calculo = parseInt(valor/0.25);
        resultado.innerHTML += (`${calculo} notas de R$0,25 \n`);
        valor -= calculo*0.25;
    }

    if(valor>=0.10){

        calculo = parseInt(valor/0.10);
        resultado.innerHTML += (`${calculo} notas de R$0,10 \n`);
        valor -= calculo*0.10;
    }

    if(valor>=0.05){

        calculo = parseInt(valor/0.05);
        resultado.innerHTML += (`${calculo} notas de R$0.05 \n`);
        valor -= calculo*0.05;
    }

    if(valor>=0.01){

        calculo = parseInt(valor/0.01);
        resultado.innerHTML += (`${calculo} notas de R$0,01 \n `);
        valor -= calculo*0.01;
    }
}

btMinimo.onclick = geraResultado;
