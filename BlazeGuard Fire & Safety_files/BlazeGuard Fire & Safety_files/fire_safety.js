function toggleMenu(){
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

// Contact Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name === "" || email === ""){
    alert("Please fill all required fields!");
  } else {
    alert("Message Sent Successfully!");
  }
});

// Close mobile menu after clicking dropdown link
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navbar").classList.remove("active");
  });
});

// COUNTER ANIMATION
const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / speed;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
});
