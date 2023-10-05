const your__info__page = document.querySelector(".your__info__page");
const select__plan__page = document.querySelector(".select__plan__page");

const step_one_input = document.querySelectorAll(".step-one-input");
const your_info_button = document.querySelector(".your__info");
const span = document.querySelectorAll(".span");

const step__one_div = document.querySelector(".step__one_div");
const step__two_div = document.querySelector(".step__two_div");

const your_info = document.querySelector(".your_info");


your_info_button.addEventListener("click", function () {
    step_one_input.forEach((input, index) => {
        if (!input.value.trim()) {
            input.style.border = "1px solid var(--error)";
            span[index].style.display = "block";
        } else {
            input.style.border = "";
            span[index].style.display = "none";
            your__info__page.style.display = "none";
            step__one_div.style.background = "none";
            step__one_div.children[0].style.color = "var(--white)";
            step__two_div.style.background = "var(--light-blue)";
            step__two_div.children[0].style.color = "var(--button-hover)";
            your__info__page.style.display = "none";
            select__plan__page.style.display = "block";
        }
    });
});

// ______________________________________________________________________________

const choices_one = document.querySelector('.one');
const choices_two = document.querySelector('.two');
const choices_three = document.querySelector('.three');


choices_one.style.backgroundColor = "var(--magnolia)";
choices_one.style.borderColor = "var(--button-hover)";

choices_one.addEventListener('click', () => {
    
    choices_one.style.backgroundColor = "var(--magnolia)";
    choices_one.style.borderColor = "var(--button-hover)";
    
    choices_two.style.backgroundColor = "";
    choices_two.style.borderColor = "";
    choices_three.style.backgroundColor = "";
    choices_three.style.borderColor = "";
    
})

choices_two.addEventListener('click', () => {
    
    choices_two.style.backgroundColor = "var(--magnolia)";
    choices_two.style.borderColor = "var(--button-hover)";
    
    choices_one.style.backgroundColor = "";
    choices_one.style.borderColor = "";
    choices_three.style.backgroundColor = "";
    choices_three.style.borderColor = "";
    
})

choices_three.addEventListener('click', () => {
    
    choices_three.style.backgroundColor = "var(--magnolia)";
    choices_three.style.borderColor = "var(--button-hover)";
    
    choices_one.style.backgroundColor = "";
    choices_one.style.borderColor = "";
    choices_two.style.backgroundColor = "";
    choices_two.style.borderColor = "";
    
})

// ___________________________________________________________________

const billing = document.querySelector('.billing');
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const checkout = document.querySelectorAll('.checkout');

const go_back = document.querySelector(".go__your_info");

let counter = 1
monthly.style.color = "var(--title-color)";

billing.addEventListener('click', () => {
    counter++;
    if (counter % 2 == 0) {
        billing.style.paddingLeft = "28px";
        monthly.style.color = "";
        yearly.style.color = "var(--title-color)";
        checkout.forEach(element => {
            element.style.display = "block";
        })
    } else {
        billing.style.paddingLeft = ""; 
        monthly.style.color = "var(--title-color)";
        yearly.style.color = "";
        checkout.forEach(element => {
            element.style.display = "";
        })
    }
});

go_back.addEventListener("click", () => {
    your__info__page.style.display = "block";
    select__plan__page.style.display = "";
    step__one_div.style.background = "var(--light-blue)";
    step__one_div.children[0].style.color = "var(--button-hover)";
    step__two_div.style.background = "";
    step__two_div.children[0].style.color = "";
})