let heading = document.getElementById("destination-heding");

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
heading.innerHTML = destinations.rishikesh.heading;
