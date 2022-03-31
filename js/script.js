const smallBox = document.querySelector('.sm-img-box');
const largeImage = document.querySelector('.lg-img');
const smallImage = document.querySelectorAll('.sm-img');

smallBox.addEventListener('click', element => {
  if (element.target.className == 'sm-img') {
    largeImage.src = element.target.src;
    largeImage.classList.add('myfade');
    setTimeout(function() {
      largeImage.classList.remove('myfade');
    }, 800);

    smallImage.forEach(element => {
        element.classList.remove('terpilih');
    });

    element.target.classList.add('terpilih');
  }
});