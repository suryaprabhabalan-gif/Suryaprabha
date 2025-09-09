// Smooth scroll to sections

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: "smooth" });

}

// Form submission handling

const form = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  formMessage.textContent = "✅ Thank you, Surya! Your message has been sent.";

  form.reset();

});