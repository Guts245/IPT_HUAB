function hireMe() {
  alert("Thank you for your interest! Please contact me via email: ericehuab25@gmail.com");
}

function downloadCV() {
  window.location.href = 'path_to_cv/CV.pdf';
}

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = "block";

  let opacity = 0;
  let intervalID = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(intervalID);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 50);
}

function fadeOut(element) {
  let opacity = 1;
  let intervalID = setInterval(function () {
    if (opacity <= 0) {
      clearInterval(intervalID);
      element.style.display = "none";
    }
    element.style.opacity = opacity;
    opacity -= 0.1;
  }, 50);
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    let target = document.querySelector(this.getAttribute('href'));
    let sections = document.querySelectorAll('.section');

    sections.forEach(section => fadeOut(section));

    setTimeout(() => {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      fadeIn(target);
    }, 600); 
  });
});

