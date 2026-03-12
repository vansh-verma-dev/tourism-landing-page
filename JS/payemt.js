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