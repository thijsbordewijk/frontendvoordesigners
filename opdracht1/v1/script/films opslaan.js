var favoButton1 = document.querySelector(.favoButton1);

var favoFilm1 = document.querySelector(.favo1);

var favoFilm2 = document.querySelector(.favo2);

var delButton1 = document.querySelector(.del1);

var delButton2 = document.querySelector(.del2);

var favoButton2 = document.querySelector(.favoButton2);

delButton1.addEventListener'click', event => favoFilm1.classList.remove('open');

delButton2.addEventListener'click', event => favoFilm2.classList.remove('open');

favoButton1.addEventListener'click', event => favoFilm1.classList.add('open');

favoButton2.addEventListener('click', event => favoFilm2.classList.add('open');
