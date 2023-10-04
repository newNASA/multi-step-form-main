const your__info__page =  document.querySelector(".your__info__page");

const step_one_input = document.querySelectorAll(".step-one-input");
const your_info_button = document.querySelector(".your__info");
const span = document.querySelectorAll(".span");

const step__one_div = document.querySelector(".step__one_div");
const step__two_div = document.querySelector(".step__two_div");


your_info_button.addEventListener("click", function() {
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
        }
    });
});

