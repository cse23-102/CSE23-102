/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//Get the necessary DOM elements
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
  //event listener for next button
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
 //event listener for prev button
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});



// Wait for the DOM content to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the carousel elements
  const carousel = document.querySelector('.movie-carousel');
  const slidesContainer = document.querySelector('#movie-slides-container');
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  
  // Calculate the width of each slide
  const slideWidth = slidesContainer.offsetWidth;
  
  // Initialize the current position
  let currentPosition = 0;

  // Event listener for the previous button
  prevButton.addEventListener('click', function() {
    // Move to the previous slide if not at the beginning
    if (currentPosition > 0) {
      currentPosition -= slideWidth;
      slidesContainer.style.transform = `translateX(-${currentPosition}px)`;
    }
  });

  // Event listener for the next button
  nextButton.addEventListener('click', function() {
    // Get the total number of slides
    const numSlides = slidesContainer.children.length;
    // Move to the next slide if not at the end
    if (currentPosition < (numSlides - 1) * slideWidth) {
      currentPosition += slideWidth;
      slidesContainer.style.transform = `translateX(-${currentPosition}px)`;
    }
  });
});

//
function validateForm() {
            var email = document.getElementById('email').value;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            document.getElementById('successMessage').style.display = 'block';
            return false; // Prevent form submission
          }
