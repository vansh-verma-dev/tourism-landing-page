 

 // destination data
const destinations = {
  rishikesh: {
    heading: "Rishikesh: The Adventure & Spiritual Hub",
    subheading: "Rishikesh is known as the Yoga Capital of the World and is famous for river rafting, spiritual temples, and the Ganga Aarti at Triveni Ghat.",
    image : "https://i.pinimg.com/736x/76/58/5e/76585ed6de36da625effa911b9700573.jpg"
  },

  manali: {
    heading: "A Gateway to the Snowy Himalayas",
    subheading: "Manali is one of India’s most loved hill stations, known for its breathtaking snow-covered mountains, scenic valleys, and adventure sports. From skiing and paragliding to peaceful nature walks, Manali offers the perfect escape for both thrill seekers and nature lovers",
    image: "https://i.pinimg.com/1200x/45/e5/83/45e583fbc1d4c327576449b49bdb018b.jpg"
  },

  kashmir: {
    heading: "Paradise Hidden in the Himalayas",
    subheading: "Kashmir is often described as heaven on Earth, famous for its stunning mountain landscapes, beautiful valleys, and serene lakes. From the iconic Dal Lake houseboats to the lush meadows of Gulmarg and Pahalgam, Kashmir promises an unforgettable journey into nature's finest beauty.",
    image : "https://i.pinimg.com/1200x/5a/85/2b/5a852bd548e3f92e4e76705503742ff1.jpg"
  },
  Goa: {
    heading:  "Sun, Sand, and Endless Ocean Vibes",
    subheading : "Goa is India’s ultimate beach paradise, known for its golden shores, vibrant nightlife, and Portuguese heritage. Whether you’re relaxing on the beach, exploring historic forts, or enjoying thrilling water sports, Goa offers the perfect blend of relaxation and adventure.",
    image : "https://i.pinimg.com/736x/e4/a7/3a/e4a73a0e728e8897cfa98367d47166c5.jpg"
  }
};


// buttons (index page)
let rishikeshBtn = document.getElementById("rishikeshbokkingBtn");
let manaliBtn = document.getElementById("manaliBtn");
let kashmirBtn = document.getElementById("kashmirBtn");
let GoaBtn = document.getElementById("GoaBtn");

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

if (GoaBtn) {
  GoaBtn.addEventListener("click", () => {
    window.location.href = "tripbook.html?place=Goa";
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