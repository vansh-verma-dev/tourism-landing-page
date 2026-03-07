 

 // destination data
const destinations = {
  rishikesh: {
    heading: "Explore Rishikesh",
    subheading: "Adventure capital of India. River rafting, temples and mountains.",
    image : "https://i.pinimg.com/736x/76/58/5e/76585ed6de36da625effa911b9700573.jpg"
  },

  manali: {
    heading: "Explore Manali",
    subheading: "Beautiful hill station with snow mountains and adventure sports.",
    image: "https://i.pinimg.com/1200x/45/e5/83/45e583fbc1d4c327576449b49bdb018b.jpg"
  },

  kashmir: {
    heading: "Explore Kashmir",
    subheading: "Paradise on earth with lakes and valleys.",
    image : "https://i.pinimg.com/1200x/5a/85/2b/5a852bd548e3f92e4e76705503742ff1.jpg"
  },
  Goa: {
    heading:  "explore Goa",
    subheading : "Paradise on earth with lakes and valleys.",
    image : "https://i.pinimg.com/736x/e4/a7/3a/e4a73a0e728e8897cfa98367d47166c5.jpg"
  }
};


// buttons (index page)
let rishikeshBtn = document.getElementById("rishikeshbokkingBtn");
let manaliBtn = document.getElementById("manaliBtn");
let kashmirBtn = document.getElementById("kashmirBtn");

if (rishikeshBtn) {
  rishikeshBtn.addEventListener("click", () => {
    window.location.href = "tripbook.html?place=rishikesh";
  });
}

if (manaliBtn) {
  manaliBtn.addEventListener("click", () => {
    window.location.href = "tripbook.html?place=manali";
  });
}

if (kashmirBtn) {
  kashmirBtn.addEventListener("click", () => {
    window.location.href = "tripbook.html?place=kashmir";
  });
}


// tripbook page
let heading = document.getElementById("destination-heding");
let subheading = document.getElementById("subheading");
let Images = document.getElementById("destination-image");

if (heading) {

  let params = new URLSearchParams(window.location.search);
  let place = params.get("place");

  if (destinations[place]) {
    heading.innerHTML = destinations[place].heading;
    subheading.innerHTML = destinations[place].subheading;
    Images.src = destinations[place].image
  }

}



  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector("nav ul");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });