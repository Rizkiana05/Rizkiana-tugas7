const kelap_kelip = document.getElementsByClassName("navbar-brand");
setInterval(function() {
    kelap_kelip[0].style.color = "beige";
    setTimeout(function() 
    { kelap_kelip[0].style.color ="black";
    }, 700);
}, 1000 );

setInterval(() => {
    let date = new Date()
    let clock = document.getElementById('clock')
    clock.innerHTML =
    date.getHours()+":"+
    date.getMinutes()+":"+
    date.getSeconds()
}, 1000);

document.querySelector('.btn-open').addEventListener('click', () => {
  window.location.href = 'https://instagram.com/rizkianaisti_'  
});

function myFunction() {
  alert('Hello')
}

function myFunction1() {
  alert('Menggambar')
};

function myFunction2() {
  alert('Kimia dan Matematika')
};

document.getElementsByClassName('card-text')[0].style.color='brown';

document.getElementsByClassName('card-text2')[0].style.color='brown';

document.getElementsByClassName('card-title1')[0].style.color='brown';

document.getElementsByClassName('card-title2')[0].style.color='brown';
