// ======================================
// DESTINATION DATA
// ======================================

const destinations = {

  rishikesh: {
    heading: "Rishikesh",
    subheading:
      "Rishikesh is known as the Yoga Capital of the World and is famous for river rafting, temples and Ganga Aarti.",
    images: [
      "https://i.pinimg.com/736x/b5/83/75/b58375037cb0ef4401341f8614eb6ad9.jpg",
      "https://i.pinimg.com/736x/c0/94/8e/c0948ef2cc83e6943294861971ed455e.jpg",
      "https://i.pinimg.com/736x/61/39/ba/6139ba47fabfa33ca3cd6a65c820d2e5.jpg",
      "https://i.pinimg.com/736x/d6/a3/cb/d6a3cbb2fa1d41b2cc84bbf0a891d270.jpg"
    ]
  },

  manali: {
    heading: "Manali",
    subheading:
      "Manali is one of India’s most loved hill stations with snow mountains and adventure sports.",
    images: [
    "https://i.pinimg.com/736x/43/40/cc/4340ccb7173d3a79dc3a7e1bcd87ef07.jpg",
    "https://i.pinimg.com/1200x/e8/77/db/e877db0ff76c1c66f9f0f7c18004a8a5.jpg",
    "https://i.pinimg.com/1200x/83/51/62/835162704a4ce3b1fd84a74c07e68c89.jpg",
    "https://i.pinimg.com/736x/5e/d3/42/5ed342b30d28c5f05f33ad2329b892fe.jpg",
    "https://i.pinimg.com/736x/61/57/58/61575834fffadf81b405914602c56cbb.jpg",
    "https://i.pinimg.com/1200x/68/0c/c2/680cc2bb7b892f37667c011d89027e6a.jpg"
    ]
  },

  kashmir: {
    heading: "Kashmir",
    subheading:
      "Kashmir is heaven on Earth famous for mountains, valleys and Dal Lake.",
    images: [
      "https://i.pinimg.com/736x/72/d3/5a/72d35a4d209928a69f2c3df6e0e6c6b4.jpg",
      "https://i.pinimg.com/736x/71/3b/67/713b678835ba8210e0360de23ef457ea.jpg",
      "https://i.pinimg.com/736x/df/80/64/df806414ec365f2821d3c83ab3fc1a22.jpg",
      "https://i.pinimg.com/1200x/df/ba/9a/dfba9a58976050b243489fd836a5dbc2.jpg",
      "https://i.pinimg.com/1200x/4f/cc/e8/4fcce8ec60b805b7eafe45988b35c056.jpg"
    ]
  },

  goa: {
    heading: "Goa",
    subheading:
      "Goa is India's famous beach destination known for nightlife and water sports.",
    images: [
      "https://i.pinimg.com/736x/07/db/0b/07db0b58eae5fd3e4d6705b2eb17d277.jpg",
      "https://i.pinimg.com/736x/05/47/56/0547562942875da3472cd174dcccc89d.jpg",
      "https://i.pinimg.com/736x/3d/96/cd/3d96cd645420a03b2b514ea26ab8ff9a.jpg",
      "https://i.pinimg.com/736x/b0/94/f5/b094f554478fa45b65c4fe0ae53c53d9.jpg",
      "https://i.pinimg.com/736x/bd/3e/36/bd3e36eb07b7d0b0a53d77c3df7f9913.jpg"
    ]
  }

};


// ======================================
// BUTTON REDIRECT (INDEX PAGE)
// ======================================

const rishikeshBtn = document.getElementById("rishikeshbokkingBtn");
const manaliBtn = document.getElementById("manaliBtn");
const kashmirBtn = document.getElementById("kashmirBtn");
const goaBtn = document.getElementById("GoaBtn");
 
if (rishikeshBtn) {
  rishikeshBtn.onclick = () => {
    window.location.href = "tripbook.html?place=rishikesh";
   
  };
}

if (manaliBtn) {
  manaliBtn.onclick = () => {
    window.location.href = "tripbook.html?place=manali";
  };
}

if (kashmirBtn) {
  kashmirBtn.onclick = () => {
    window.location.href = "tripbook.html?place=kashmir";
  };
}

if (goaBtn) {
  goaBtn.onclick = () => {
    window.location.href = "tripbook.html?place=goa";
  };
}


// ======================================
// TRIPBOOK PAGE DATA LOAD
// ======================================

const heading = document.getElementById("destination-heding");
const subheading = document.getElementById("subheading");
const slider = document.querySelector(".slider");

if (heading) {

  const params = new URLSearchParams(window.location.search);
  const place = params.get("place");

  if (destinations[place]) {

    heading.textContent = destinations[place].heading;
    subheading.textContent = destinations[place].subheading;

    slider.innerHTML = destinations[place].images
      .map((img, i) =>
        `<img src="${img}" class="slide ${i === 0 ? "active" : ""}">`
      )
      .join("");

    startSlider();
  }
}


// ======================================
// IMAGE SLIDER
// ======================================

function startSlider() {

  const slides = document.querySelectorAll(".slide");

  let index = 0;

  setInterval(() => {

    slides[index].classList.remove("active");

    index++;

    if (index >= slides.length) {
      index = 0;
    }

    slides[index].classList.add("active");

  }, 3000);

}


// ======================================
// NAVBAR TOGGLE
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav ul");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const images = document.querySelectorAll(".contact-slider img");

let index = 0;

function changeImage(){

images.forEach((img)=>{
img.classList.remove("active");
});

images[index].classList.add("active");

index++;

if(index === images.length){
index = 0;
}

}

setInterval(changeImage,3000);

changeImage();


// ===========================================
const steps = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");

let currentStep = 0;

nextBtns.forEach(btn => {

btn.addEventListener("click", () => {

formSteps[currentStep].classList.remove("active");
steps[currentStep].classList.remove("active");

currentStep++;

if(currentStep >= formSteps.length){
currentStep = formSteps.length - 1;
}

formSteps[currentStep].classList.add("active");
steps[currentStep].classList.add("active");

});

});