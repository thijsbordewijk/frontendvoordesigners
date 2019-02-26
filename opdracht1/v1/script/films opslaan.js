var favoButton1 = document.querySelector(.favoButton1);

var favoFilm1 = document.querySelector(.favo1);

var favoFilm2 = document.querySelector(.favo2);

var delButton1 = document.querySelector(.del1);

var delButton2 = document.querySelector(.del2);

var favoButton2 = document.querySelector(.favoButton2);

delButton1.addEventListener('click', function() {favoFilm1.style.opacity = 0.0});

delButton2.addEventListener('click', function() {favoFilm2.style.opacity = 0.0});

favoButton1.addEventListener('click', function() {favoFilm1.style.opacity = 1.0});

favoButton2.addEventListener('click', function() {favoFilm2.style.opacity = 1.0});
