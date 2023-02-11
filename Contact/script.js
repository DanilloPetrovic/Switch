let dugmeResponsive = document.querySelector('.buttonheaderresponsive');
let senddugme = document.querySelector('.sendbtn');


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

senddugme.addEventListener('click', () => {
    
    let imecontact = document.querySelector('.inputname').value;
    let emailcontact = document.querySelector('.inputemail').value;
    let message = document.querySelector('.inputmessage').value;

    let imecontact1 = document.querySelector('.inputname');
    let emailcontact1 = document.querySelector('.inputemail');
    let message1 = document.querySelector('.inputmessage');

    let IndexAt = emailcontact.indexOf("@"); // Uzimanje Indexa '@'
    let PosleAt = emailcontact.substring(IndexAt+1); // Uzimanje texta posle '@'
    let IndexTacka = PosleAt.indexOf("."); // Uzimanje Indexa tacke posle '@'
    let PreAt = emailcontact.substring(0,IndexAt); // Uzimanje texta pre '@'
    let DuzinaPreAt = PreAt.length; // Uzimanje duzine texta pre '@'
    let IzmedjuAtTacka = emailcontact.substring(IndexAt+1, DuzinaPreAt+IndexTacka+1); // Izimanje texta izmedju '@' i '.'
    let PosleTacke = emailcontact.substring(DuzinaPreAt+1+IndexTacka+1); // Uzimanje texta posle ','
    let IndexTackePosleAt = DuzinaPreAt+IndexTacka+1; // Uzimanje indexa tacka posle '@' + DuzinaPreAt
    let dobaremail = false;

    if(emailcontact.includes("@") && emailcontact.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 4){
        dobaremail = true;
    } else{
        dobaremail = false;
    }

    console.log(dobaremail);

    if(imecontact.length > 0 && dobaremail === true && message.length > 0){
        alert("Thank you for contact us");
    }
    
    if(imecontact.length <= 0){
        imecontact1.style.border = '2px solid red';
    } else{
        imecontact1.style.border = '1px solid rgb(95, 121, 143)';
    }

    if(dobaremail !== true){
        emailcontact1.style.border = '2px solid red';
    } else{
        emailcontact1.style.border = '1px solid rgb(95, 121, 143)';
    }

    if(message.length <= 0){
        message1.style.border = '2px solid red';
    } else{
        message1.style.border = '1px solid rgb(95, 121, 143)';
    }
});