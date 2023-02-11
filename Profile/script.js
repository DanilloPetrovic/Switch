let registered = localStorage.getItem('Registered');
let loggined = localStorage.getItem('loggined');

if(!registered){
    alert("You have to create an account!");
    location.href = '../Register/index.html';
} else if(registered && !loggined){
    alert("You have to log in!");
    location.href = '../Login/index.html';
}

let dugme = document.querySelector('.loginbtn');
let dugmeResponsive = document.querySelector('.buttonheaderresponsive');
let checkbox = document.querySelector('.checkbox1');

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

// Funkcija za profile

let ProfileButton = document.querySelector('.buttonheader');

ProfileButton.addEventListener('click', () => {
    location.href = '../Profile/index.html';
})

// Uzimanje vrednosti

let Name = localStorage.getItem('ImeRegister');
let LastName = localStorage.getItem('PrezimeRegister');
let Username = localStorage.getItem('UsernameRegister');
let Email = localStorage.getItem('EmailRegister' );
let Password = localStorage.getItem('PasswordRegister');

let UsernameH2 = document.querySelector('.Username-h2');
UsernameH2.innerText = Username;

let Name_p = document.querySelector('.Name-p');
let LastName_p = document.querySelector('.LastName-p');
let Email_p = document.querySelector('.Email-p');
let Password_p = document.querySelector('.Password-p');

Name_p.innerText = Name;
LastName_p.innerText = LastName;
Email_p.innerText = Email;

let SakrivenaSifra = '';
let zvezdica = '*';
for(let i=0; i<Password.length; i++){
    SakrivenaSifra+=zvezdica;
}

Password_p.innerText = SakrivenaSifra;