let dugme = document.querySelector('.registerbtn');
let checkbox = document.querySelector('.checkbox1');
let dugmeResponsive = document.querySelector('.buttonheaderresponsive');

let Registered = false;

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


// Funkcija za validaciju preko dugmeta
dugme.addEventListener('click', () => {
    
    // Uzimanje elemenata

    let Ime_el = document.querySelector('.inputime');
    let Prezime_el = document.querySelector('.inputprezime'); 
    let Username_el = document.querySelector('.inputusername');
    let Email_el = document.querySelector('.inputemail');
    let ConfirmEmail_el = document.querySelector('.inputconfirmemail'); 
    let Password_el = document.querySelector('.inputpassword'); 
    let ConfirmPassword_el = document.querySelector('.inputconfirmpassword');
    
    // Uzimanje vrednosti

    let Ime = document.querySelector('.inputime').value; // Uzimanje ime
    let Prezime = document.querySelector('.inputprezime').value; // Uzimanje prezime
    let Username = document.querySelector('.inputusername').value; // Uzimanje username
    let Email = document.querySelector('.inputemail').value; // Uzimanje email
    let ConfirmEmail = document.querySelector('.inputconfirmemail').value; // Uzimanje potvrdnog emaila
    let Password = document.querySelector('.inputpassword').value; // Uzimanje sifre
    let ConfirmPassword = document.querySelector('.inputconfirmpassword').value; // Uzimanje potvrdne sifre
    let Btn = document.querySelector('.registerbtn'); // Uzimanje dugmeta za register
    let BtnToLogin = document.querySelector('.tologinbtn'); // Uzimanje dugmeta koje vodi do Login
    let ObacestenjeValidacijaEmaila = document.querySelector('.tologinh2'); // Obavestenje za validaciju emaila

    // Local Storage
    localStorage.setItem('ImeRegister', Ime);
    localStorage.setItem('PrezimeRegister', Prezime);
    localStorage.setItem('UsernameRegister', Username);
    localStorage.setItem('EmailRegister', Email);
    localStorage.setItem('PasswordRegister', Password);

    let IndexAt = Email.indexOf("@"); // Uzimanje Indexa '@'
    let PosleAt = Email.substring(IndexAt+1); // Uzimanje texta posle '@'
    let IndexTacka = PosleAt.indexOf("."); // Uzimanje Indexa tacke posle '@'
    let PreAt = Email.substring(0,IndexAt); // Uzimanje texta pre '@'
    let DuzinaPreAt = PreAt.length; // Uzimanje duzine texta pre '@'
    let IzmedjuAtTacka = Email.substring(IndexAt+1, DuzinaPreAt+IndexTacka+1); // Izimanje texta izmedju '@' i '.'
    let PosleTacke = Email.substring(DuzinaPreAt+1+IndexTacka+1); // Uzimanje texta posle ','
    let IndexTackePosleAt = DuzinaPreAt+IndexTacka+1; // Uzimanje indexa tacka posle '@' + DuzinaPreAt
    let Obavestenje = document.querySelector('#obavestenje'); // Uzimanje p
    let btnregister = document.querySelector('.registerbtn'); // Uzimanje register dugmeta

    // Validacija
    if(Ime.length > 1 && Prezime.length > 1 && Username.length >= 5 && Email.includes("@") && Email.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 4 && Email === ConfirmEmail && Password.length >= 6 && Password === ConfirmPassword){
        location.href = '../Login/index.html';
        Registered = true;
        localStorage.setItem('Registered', Registered);
    }


    ////////////////// Greske //////////////////

    // Uzimanje obavestenja greski

    let errorname = document.querySelector('.errorfirstname');
    let errorlastname = document.querySelector('.errorlastname');
    let errorusername = document.querySelector('.errorusername');
    let erroremail = document.querySelector('.erroremail');
    let errorconfirmemail = document.querySelector('.errorconfirmemail');
    let errorpassword = document.querySelector('.errorpassword');
    let errorconfirmpassword = document.querySelector('.errorconfirmpassword');

    // Neunosenje imena
    let pErrorFirstName = document.querySelector('.errorfirstname');
    if(Ime.length > 1){
        Ime_el.style.border = 'none';
        errorname.style.opacity = '0';
    } else{
        Ime_el.style.border = '1px solid red';
        errorname.style.opacity = '1';
    }

    // Neunosenje prezimena
    let pErrorLastName = document.querySelector('.errorlastname');
    if(Prezime.length > 2){
        Prezime_el.style.border = 'none';
        errorlastname.style.opacity = '0';
    } else{
        Prezime_el.style.border = '1px solid red';
        errorlastname.style.opacity = '1';
    }

    // Kratak Username
    let pErrorUsername = document.querySelector('.errorusername');
    if(Username.length < 5){
        Username_el.style.border = '1px solid red';
        errorusername.style.opacity = '1';
    } else{
        Username_el.style.border = 'none';
        errorusername.style.opacity = '0';
    }

    // Los Email    
    let pErrorEmail = document.querySelector('.erroremail');
    if(Email.includes("@") && Email.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 5){
        Email_el.style.border = 'none';
        erroremail.style.opacity = '0';
    } else{
        Email_el.style.border = '1px solid red';
        erroremail.style.opacity = '1';
    }

    // Nepoklapanje Emaila
    let pErrorConfirmEmail = document.querySelector('.errorconfirmemail');
    if(Email !== ConfirmEmail){
        ConfirmEmail_el.style.border = '1px solid red';
        errorconfirmemail.style.opacity = '1';
    } else{
        ConfirmEmail_el.style.border = 'none';
        errorconfirmemail.style.opacity = '0';
    }

    // Kratka Sifra
    let pErrorPassword = document.querySelector('.errorpassword');
    if(Password.length > 5){
        Password_el.style.border = 'none';
        errorpassword.style.opacity = '0';
    } else{
        Password_el.style.border = '1px solid red';
        errorconfirmpassword.style.opacity = '1';
    }

    // Nepoklapanje sifri
    let pErrorConfirmPassword = document.querySelector('.errorconfirmpassword');
    if(Password === ConfirmPassword){
        ConfirmPassword_el.style.border = 'none';
        errorconfirmemail.style.opacity = '0';
    } else{
        ConfirmPassword_el.style.border = '1px solid red';
        errorconfirmpassword.style.opacity = '1';
    }

})


// Funkcija za validaciju preko entera

let body = document.querySelector('body');

body.addEventListener('keydown', (StisnutoDugme) => {
    if (StisnutoDugme.key === 'Enter') {

        // Uzimanje elemenata

        let Ime_el = document.querySelector('.inputime');
        let Prezime_el = document.querySelector('.inputprezime'); 
        let Username_el = document.querySelector('.inputusername');
        let Email_el = document.querySelector('.inputemail');
        let ConfirmEmail_el = document.querySelector('.inputconfirmemail'); 
        let Password_el = document.querySelector('.inputpassword'); 
        let ConfirmPassword_el = document.querySelector('.inputconfirmpassword');
        
        // Uzimanje vrednosti

        let Ime = document.querySelector('.inputime').value; // Uzimanje ime
        let Prezime = document.querySelector('.inputprezime').value; // Uzimanje prezime
        let Username = document.querySelector('.inputusername').value; // Uzimanje username
        let Email = document.querySelector('.inputemail').value; // Uzimanje email
        let ConfirmEmail = document.querySelector('.inputconfirmemail').value; // Uzimanje potvrdnog emaila
        let Password = document.querySelector('.inputpassword').value; // Uzimanje sifre
        let ConfirmPassword = document.querySelector('.inputconfirmpassword').value; // Uzimanje potvrdne sifre
        let Btn = document.querySelector('.registerbtn'); // Uzimanje dugmeta za register
        let BtnToLogin = document.querySelector('.tologinbtn'); // Uzimanje dugmeta koje vodi do Login
        let ObacestenjeValidacijaEmaila = document.querySelector('.tologinh2'); // Obavestenje za validaciju emaila

        // Local Storage
        localStorage.setItem('ImeRegister', Ime);
        localStorage.setItem('PrezimeRegister', Prezime);
        localStorage.setItem('UsernameRegister', Username);
        localStorage.setItem('EmailRegister', Email);
        localStorage.setItem('PasswordRegister', Password);

        let IndexAt = Email.indexOf("@"); // Uzimanje Indexa '@'
        let PosleAt = Email.substring(IndexAt+1); // Uzimanje texta posle '@'
        let IndexTacka = PosleAt.indexOf("."); // Uzimanje Indexa tacke posle '@'
        let PreAt = Email.substring(0,IndexAt); // Uzimanje texta pre '@'
        let DuzinaPreAt = PreAt.length; // Uzimanje duzine texta pre '@'
        let IzmedjuAtTacka = Email.substring(IndexAt+1, DuzinaPreAt+IndexTacka+1); // Izimanje texta izmedju '@' i '.'
        let PosleTacke = Email.substring(DuzinaPreAt+1+IndexTacka+1); // Uzimanje texta posle ','
        let IndexTackePosleAt = DuzinaPreAt+IndexTacka+1; // Uzimanje indexa tacka posle '@' + DuzinaPreAt
        let Obavestenje = document.querySelector('#obavestenje'); // Uzimanje p
        let btnregister = document.querySelector('.registerbtn'); // Uzimanje register dugmeta

        // Validacija
        if(Ime.length > 1 && Prezime.length > 1 && Username.length >= 5 && Email.includes("@") && Email.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 4 && Email === ConfirmEmail && Password.length >= 6 && Password === ConfirmPassword){
            location.href = '../Login/index.html';
            Registered = true;
            localStorage.setItem('Registered', Registered);
        }

        ////////////////// Greske //////////////////

        // Uzimanje obavestenja greski

        let errorname = document.querySelector('.errorfirstname');
        let errorlastname = document.querySelector('.errorlastname');
        let errorusername = document.querySelector('.errorusername');
        let erroremail = document.querySelector('.erroremail');
        let errorconfirmemail = document.querySelector('.errorconfirmemail');
        let errorpassword = document.querySelector('.errorpassword');
        let errorconfirmpassword = document.querySelector('.errorconfirmpassword');

        // Neunosenje imena
        let pErrorFirstName = document.querySelector('.errorfirstname');
        if(Ime.length > 1){
            Ime_el.style.border = 'none';
            errorname.style.opacity = '0';
        } else{
            Ime_el.style.border = '1px solid red';
            errorname.style.opacity = '1';
        }

        // Neunosenje prezimena
        let pErrorLastName = document.querySelector('.errorlastname');
        if(Prezime.length > 2){
            Prezime_el.style.border = 'none';
            errorlastname.style.opacity = '0';
        } else{
            Prezime_el.style.border = '1px solid red';
            errorlastname.style.opacity = '1';
        }

        // Kratak Username
        let pErrorUsername = document.querySelector('.errorusername');
        if(Username.length < 5){
            Username_el.style.border = '1px solid red';
            errorusername.style.opacity = '1';
        } else{
            Username_el.style.border = 'none';
            errorusername.style.opacity = '0';
        }

        // Los Email    
        let pErrorEmail = document.querySelector('.erroremail');
        if(Email.includes("@") && Email.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 5){
            Email_el.style.border = 'none';
            erroremail.style.opacity = '0';
        } else{
            Email_el.style.border = '1px solid red';
            erroremail.style.opacity = '1';
        }

        // Nepoklapanje Emaila
        let pErrorConfirmEmail = document.querySelector('.errorconfirmemail');
        if(Email !== ConfirmEmail){
            ConfirmEmail_el.style.border = '1px solid red';
            errorconfirmemail.style.opacity = '1';
        } else{
            ConfirmEmail_el.style.border = 'none';
            errorconfirmemail.style.opacity = '0';
        }

        // Kratka Sifra
        let pErrorPassword = document.querySelector('.errorpassword');
        if(Password.length > 5){
            Password_el.style.border = 'none';
            errorpassword.style.opacity = '0';
        } else{
            Password_el.style.border = '1px solid red';
            errorpassword.style.opacity = '1';
        }

        // Nepoklapanje sifri
        let pErrorConfirmPassword = document.querySelector('.errorconfirmpassword');
        if(Password === ConfirmPassword){
            ConfirmPassword_el.style.border = 'none';
            errorconfirmemail.style.opacity = '0';
        } else{
            ConfirmPassword_el.style.border = '1px solid red';
            errorconfirmpassword.style.opacity = '1';
        }
    }
});


let passwordType = document.querySelector('.inputpassword');
let confirmpasswordType = document.querySelector('.inputconfirmpassword');

checkbox.addEventListener('click', () => {
    if(passwordType.type === 'password' && confirmpasswordType.type === 'password'){
        passwordType.type = 'text';
        confirmpasswordType.type = 'text';
    } else{
        passwordType.type = 'password';
        confirmpasswordType.type = 'password';
    }
});