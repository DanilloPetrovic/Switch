function responsivenavbar(){
    
    let KliknutoDugme = document.querySelector('.buttonheaderresponsive');
    let ResponsiveNavBar = document.querySelector('.responsive');

    if(KliknutoDugme.innerText === 'MENU'){
        document.querySelector('.responsivenavbar').style.display = 'block'; 
        KliknutoDugme.innerText = 'CLOSE';
    }
    else{
        document.querySelector('.responsivenavbar').style.display = 'none';
        KliknutoDugme.innerText = 'MENU';
    }
}

// Menjanje sa ENG na SRP i obrnuto

let body = document.querySelector('body');

let srpDugme = document.querySelector('.aboutLI1');
let engDugme = document.querySelector('.aboutLI2');

let aboutNaSrpskom = document.querySelector('.aboutSRP');
let aboutNaEngleskom = document.querySelector('.aboutENG');

srpDugme.addEventListener('click', () => {
    srpDugme.style.color = 'white';
    engDugme.style.color = 'rgb(212, 212, 212)';
    aboutNaSrpskom.style.color = 'white';   
    aboutNaSrpskom.style.opacity = '1';
    aboutNaEngleskom.style.opacity = '0';
});

engDugme.addEventListener('click', () => {
    srpDugme.style.color = 'rgb(212, 212, 212)';
    engDugme.style.color = 'white';
    aboutNaSrpskom.style.opacity = '0';
    aboutNaEngleskom.style.opacity = '1';
});