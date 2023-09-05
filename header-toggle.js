let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Increment slideIndex and reset to 0 if it exceeds the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Toggle the buttons (you can customize this part as needed)
  if (slideIndex === 1) {
    document.querySelector(".prev").style.display = "none";
  } else {
    document.querySelector(".prev").style.display = "block";
  }
  if (slideIndex === slides.length) {
    document.querySelector(".next").style.display = "none";
  } else {
    document.querySelector(".next").style.display = "block";
  }
  
  // Automatically change slides every 5 seconds
  setTimeout(showSlides, 5000);
}
