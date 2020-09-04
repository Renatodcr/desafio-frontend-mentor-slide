function changeClass() {

  const next = document.querySelectorAll('.next');
  const prev = document.querySelectorAll('.prev');
  const slide = document.querySelector('.slide');
  const activeClass = slide.firstElementChild;
  const lastClass = slide.lastElementChild;
  activeClass.classList.add('active');

  function nextClass(e) {
    e.preventDefault();

    let activeSlide = document.querySelector('.active');
    let nextSlide = activeSlide.nextElementSibling;

    if (nextSlide === null) {
      nextSlide = activeClass;
    }

    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');

  }

  function prevClass(e) {
    e.preventDefault();

    let activeSlide = document.querySelector('.active');
    let prevSlide = activeSlide.previousElementSibling;

    if (prevSlide === null) {
      prevSlide = lastClass;
    }

    activeSlide.classList.remove('active');
    prevSlide.classList.add('active');

  }

  function keyboard(e) {
    e.preventDefault();
    if (e.key === 'ArrowRight') {
      let activeSlide = document.querySelector('.active');
      let nextSlide = activeSlide.nextElementSibling;

      if (nextSlide === null) {
        nextSlide = activeClass;
      }

      activeSlide.classList.remove('active');
      nextSlide.classList.add('active');

    } else if (e.key === 'ArrowLeft') {
      let activeSlide = document.querySelector('.active');
      let prevSlide = activeSlide.previousElementSibling;

      if (prevSlide === null) {
        prevSlide = lastClass;
      }

      activeSlide.classList.remove('active');
      prevSlide.classList.add('active');
    }
  }
  window.addEventListener('keydown', keyboard);

  next.forEach((item) => {
    item.addEventListener('click', nextClass);
  });

  prev.forEach((item) => {
    item.addEventListener('click', prevClass);
  });

}
changeClass();
