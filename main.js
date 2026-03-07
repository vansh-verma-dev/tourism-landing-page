let heading = document.getElementById("destination-heding");
let rishikeshbtn = document.getElementById('rishikeshbokkingBtn');




rishikeshbtn.addEventListener('click',()=>{
  let destinations = {
  rishikesh: {
    heading: "Explore Rishekesh",
    subheading:"Adventure capital of India. Experience river rafting, temples and mountains",
  },
  manali: {
     heading: "Explore Manali",
    subheading:"Adventure capital of India. Experience river rafting, temples and mountains",
  }
};
  window.location = "tripbook.html";
 heading.innerHTML = destinations.rishikesh.heading;
})





  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector("nav ul");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });