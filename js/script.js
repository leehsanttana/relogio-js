const main = document.querySelector('.main-section');

function initTime(){
    const divHora = document.querySelector('#hora');
    const h1Hora = document.createElement('h1');
    
    divHora.appendChild(h1Hora);

    function relogio(){

        const zeroFill = n => {
            return ('0' + n).slice(-2);
        }

        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();

        const hora = `${zeroFill(h)} : ${zeroFill(m)} : ${zeroFill(s)}`;
        const msg = document.querySelector('.msg');

        if (h >= 12) {
            main.classList.add('bg-tarde');
            msg.innerHTML = '<i class="fas fa-cloud-sun icon-alt"></i> Boa Tarde!';
  
        } else if (h >= 18 && h < 6) {
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




