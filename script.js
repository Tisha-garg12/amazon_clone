const imgs = document.querySelectorAll('.header-slider ul img');
const prevBttn = document.querySelector('.control-prev');
const nextBttn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none';
  }
  imgs[n].style.display = 'block'; // show the current image
}

changeSlide();

prevBttn.addEventListener('click', (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

nextBttn.addEventListener('click', (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

const scrollcontainer = document.querySelectorAll('.prodcuts');
for (const i of scrollcontainer ){
    i.addEventListener('wheel',(e)=>{
        e.preventDefault();
        i.scrollLeft += e.deltaY;
    }
    )
}