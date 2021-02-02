const main = document.querySelector('.main-section');

const zeroFill = n => {
    return ('0' + n).slice(-2);
}

function initTime(){
    const divHora = document.querySelector('#hora');
    const h1Hora = document.createElement('h1');
    
    divHora.appendChild(h1Hora);

    function relogio(){

        const dateHora = new Date();
        const h = dateHora.getHours();
        const m = dateHora.getMinutes();
        const s = dateHora.getSeconds();

        const hora = `${zeroFill(h)} : ${zeroFill(m)} : ${zeroFill(s)}`;
        const msg = document.querySelector('.msg');

        if (h >= 12 && h < 18){
            main.classList.add('bg-tarde');
            msg.innerHTML = '<i class="fas fa-cloud-sun icon-alt"></i> Boa Tarde!';
        } else if (h >= 18 &&  h < 24){
            main.classList.remove('bg-tarde');
            main.classList.add('bg-noite');
            msg.innerHTML = '<i class="fas fa-moon icon-alt"></i> Boa Noite!';
        } else {
            main.classList.remove('bg-noite');
            msg.innerHTML = '<i class="fas fa-sun icon-default"></i> Bom dia!'; 
        }
 
        h1Hora.innerHTML = hora;
    }

    relogio();
    setInterval(relogio,  1000);
}

initTime();

function initBtn(){
    const btn = document.querySelector('.js-btn');

    function abrirInfo(){
        const info = document.querySelector('.info');

        info.classList.toggle('active');
        main.classList.toggle('active');
    }

    btn.addEventListener('click', abrirInfo);
}

initBtn();

const data = document.querySelector('.data');
const dia = document.querySelector('.dia');
getDataAtual = new Date();

const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

const diaSemana = dias[getDataAtual.getDay() % 7];
dia.innerText = diaSemana;

const diaAtual = getDataAtual.getDate();
const mesAtual = getDataAtual.getMonth() + 1;
const anoAtual = getDataAtual.getFullYear();
const dataAtual = `${zeroFill(diaAtual)}/${zeroFill(mesAtual)}/${anoAtual}`

data.innerText = dataAtual;

const diaAnoNovo = document.querySelector('.anoNovo');
const anoNovo = new Date('1 January 2022 0:0:0 GMT-0300');


const calcTime = anoNovo.getTime() - getDataAtual.getTime();
const diasRestantes = Math.floor( calcTime / (24 * 60 * 60 * 1000));
diaAnoNovo.innerText = diasRestantes;






