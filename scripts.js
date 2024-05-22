/* Function to open the side navigation by setting its width to 250px 
   and adjusting the left margin of the page content */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
/* Function to close the side navigation by setting its width to 0 
   and resetting the left margin of the page content */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//Get the necessary DOM elements
//DOM elements refer to the objects in the Document Object Model (DOM) that represent the structure of a web document, typically an HTML or XML document. The DOM is a programming interface that allows scripts to update the content, structure, and style of a document dynamically.
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
// Add event listener for the next button to scroll the slides container to the right
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
// Add event listener for the previous button to scroll the slides container to the left
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

  // Event listener for the previous button to move to the previous slide
  prevButton.addEventListener('click', function() {
    // Move to the previous slide if not at the beginning
    if (currentPosition > 0) {
      currentPosition -= slideWidth;
      slidesContainer.style.transform = `translateX(-${currentPosition}px)`;
    }
  });

  // Event listener for the next button to move to the next slide
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

//Function to validate the email input in a form
function validateForm() {
            var email = document.getElementById('email').value;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Check if the email format is valid
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return false;// Prevent form submission if invalid
            }

            document.getElementById('successMessage').style.display = 'block';
            return false; // Prevent form submission
          }
