let dugme = document.querySelector('.loginbtn');
let dugmeResponsive = document.querySelector('.buttonheaderresponsive');
let checkbox = document.querySelector('.checkbox1');

let loggined = false;

// Funkcija za responsivan nav bar
dugmeResponsive.addEventListener('click', () => {
    
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
})


// Funkcija za Log in preko dugmeta

dugme.addEventListener('click', () => {
    
    // Uzimanje vrednosti
    let UsernameRegister1 = localStorage.getItem('UsernameRegister'); // Uzimanje Username iz scriptRegisterLogin
    let EmailRegister1 = localStorage.getItem('EmailRegister'); // Uzimanje Email iz scriptRegisterLogin
    let PasswordRegister1 = localStorage.getItem('PasswordRegister'); // Uzimanje Password iz scriptRegisterLogin
    let obavestenjeGreska = document.querySelector('.errorpasswordlogin');

    let EmailOrUsernameLogin = document.querySelector('.inputemailorusername').value;
    let PasswordLogin = document.querySelector('.inputpasswordlogin').value;

    if((EmailOrUsernameLogin === EmailRegister1 || EmailOrUsernameLogin === UsernameRegister1) && (PasswordLogin === PasswordRegister1) && EmailOrUsernameLogin.length > 0 && PasswordLogin.length > 0){
        location.href = '../index.html';
        obavestenjeGreska.style.opacity = '0';
        loggined = true;
        localStorage.setItem('loggined', loggined);
    } else{
        obavestenjeGreska.style.opacity = '1';
    }
})

// Funkcija za Log in preko entera

let body = document.querySelector('body');

body.addEventListener('keydown', (StisnutoDugme) => {
    
    if(StisnutoDugme.key === 'Enter'){
        // Uzimanje vrednosti
        let UsernameRegister1 = localStorage.getItem('UsernameRegister'); // Uzimanje Username iz scriptRegisterLogin
        let EmailRegister1 = localStorage.getItem('EmailRegister'); // Uzimanje Email iz scriptRegisterLogin
        let PasswordRegister1 = localStorage.getItem('PasswordRegister'); // Uzimanje Password iz scriptRegisterLogin
        let obavestenjeGreska = document.querySelector('.errorpasswordlogin');

        let EmailOrUsernameLogin = document.querySelector('.inputemailorusername').value;
        let PasswordLogin = document.querySelector('.inputpasswordlogin').value;


        if((EmailOrUsernameLogin === EmailRegister1 || EmailOrUsernameLogin === UsernameRegister1) && (PasswordLogin === PasswordRegister1) && EmailOrUsernameLogin.length > 0 && PasswordLogin.length > 0){
            location.href = '../index.html';
            obavestenjeGreska.style.opacity = '0';
            loggined = true;
            localStorage.setItem('loggined', loggined);
        } else{
            obavestenjeGreska.style.opacity = '1';
        }
    }
});

let passwordType = document.querySelector('.inputpasswordlogin');

checkbox.addEventListener('click', () => {
    if(passwordType.type == 'password'){
        passwordType.type = 'text';
    } else{
        passwordType.type = 'password';
    }
})