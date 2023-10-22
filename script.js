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

let check_choice_one = true;
let check_choice_two = false;
let check_choice_three = false;

choices_one.addEventListener('click', () => {

    choices_one.style.backgroundColor = "var(--magnolia)";
    choices_one.style.borderColor = "var(--button-hover)";

    choices_two.style.backgroundColor = "";
    choices_two.style.borderColor = "";
    choices_three.style.backgroundColor = "";
    choices_three.style.borderColor = "";

    check_choice_one = true;
    check_choice_three = false;
    check_choice_two = false;

})

choices_two.addEventListener('click', () => {

    choices_two.style.backgroundColor = "var(--magnolia)";
    choices_two.style.borderColor = "var(--button-hover)";

    choices_one.style.backgroundColor = "";
    choices_one.style.borderColor = "";
    choices_three.style.backgroundColor = "";
    choices_three.style.borderColor = "";

    check_choice_one = false;
    check_choice_two = true;
    check_choice_three = false;

})

choices_three.addEventListener('click', () => {

    choices_three.style.backgroundColor = "var(--magnolia)";
    choices_three.style.borderColor = "var(--button-hover)";

    choices_one.style.backgroundColor = "";
    choices_one.style.borderColor = "";
    choices_two.style.backgroundColor = "";
    choices_two.style.borderColor = "";

    check_choice_one = false;
    check_choice_two = false;
    check_choice_three = true;

})

// ___________________________________________________________________

const billing = document.querySelector('.billing');
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const checkout = document.querySelectorAll('.checkout');
const arcade_price = document.querySelector(".arcade-price");
const advanced_price = document.querySelector(".advanced-price");
const pro_price = document.querySelector(".pro-price");

const go_back__to__your_info = document.querySelector(".go__your_info");
const go_back__to__select_plan = document.querySelector(".go__select_plan");
const select__plan = document.querySelector(".select__plan");
const add__ons__page = document.querySelector(".add__ons__page");
const step__three_div = document.querySelector(".step__three_div");






go_back__to__your_info.addEventListener("click", () => {
    your__info__page.style.display = "block";
    select__plan__page.style.display = "";
    step__one_div.style.background = "var(--light-blue)";
    step__one_div.children[0].style.color = "var(--button-hover)";
    step__two_div.style.background = "";
    step__two_div.children[0].style.color = "";
})

select__plan.addEventListener("click", () => {
    select__plan__page.style.display = "none";
    add__ons__page.style.display = "block";
    step__two_div.style.background = "";
    step__two_div.children[0].style.color = "";
    step__three_div.style.background = "var(--light-blue)";
    step__three_div.children[0].style.color = "var(--button-hover)";
})

go_back__to__select_plan.addEventListener("click", () => {
    add__ons__page.style.display = "none";
    select__plan__page.style.display = "block";
    step__two_div.style.background = "var(--light-blue)";
    step__two_div.children[0].style.color = "var(--button-hover)";
    step__three_div.style.background = "";
    step__three_div.children[0].style.color = "";
})

// ___________________________________________________________________________

const onlineServiceCheckbox = document.querySelector('.online_service');
const largerStorageCheckbox = document.querySelector('.larger_storage');
const customProCheckbox = document.querySelector('.custom_pro');
const settingOne = document.querySelector('.setting_one');
const settingTwo = document.querySelector('.setting_two');
const settingThree = document.querySelector('.setting_three');
const online_service_price = document.querySelector('.online_service_h4');
const larger_storage_price = document.querySelector('.larger_storage_h4');
const custom_pro_price = document.querySelector('.custom_pro_h4');

onlineServiceCheckbox.addEventListener('click', function () {
    if (onlineServiceCheckbox.checked) {
        settingOne.style.background = "var(--magnolia)";
        settingOne.style.border = "1px solid var(--button-hover)";
    } else {
        settingOne.style.background = "";
        settingOne.style.border = ""
    }
});

largerStorageCheckbox.addEventListener('change', function () {
    if (largerStorageCheckbox.checked) {
        settingTwo.style.background = "var(--magnolia)";
        settingTwo.style.border = "1px solid var(--button-hover)";
    } else {
        settingTwo.style.background = "";
        settingTwo.style.border = "";
    }
});

customProCheckbox.addEventListener('change', function () {
    if (customProCheckbox.checked) {
        settingThree.style.background = "var(--magnolia)";
        settingThree.style.border = "1px solid var(--button-hover)";
    } else {
        settingThree.style.background = "";
        settingThree.style.border = "";
    }
});
settingOne.addEventListener("click", function () {
    onlineServiceCheckbox.checked = !onlineServiceCheckbox.checked;
    updateSettingStyle(settingOne, onlineServiceCheckbox.checked);
});

settingTwo.addEventListener("click", function () {
    largerStorageCheckbox.checked = !largerStorageCheckbox.checked;
    updateSettingStyle(settingTwo, largerStorageCheckbox.checked);
});
settingThree.addEventListener("click", function () {
    customProCheckbox.checked = !customProCheckbox.checked;
    updateSettingStyle(settingThree, customProCheckbox.checked);
})

function updateSettingStyle(setting, isChecked) {
    if (isChecked) {
        setting.style.background = "var(--magnolia)";
        setting.style.border = "1px solid var(--button-hover)";
    } else {
        setting.style.background = "";
        setting.style.border = "";
    }
}

// ___________________________________________________________________________

const summary__page = document.querySelector('.summary__page');
const go_back__to__add_ons = document.querySelector(".go__add_ons");
const add__ons = document.querySelector(".add__ons");
const step__four_div = document.querySelector(".step__four_div");

const rate_name = document.querySelector(".rate_name");
const rate_price = document.querySelector(".rate_price");

add__ons.addEventListener("click", function () {
    add__ons__page.style.display = "none";
    summary__page.style.display = "block";
    step__three_div.style.background = "";
    step__three_div.children[0].style.color = "";
    step__four_div.style.background = "var(--light-blue)";
    step__four_div.children[0].style.color = "var(--button-hover)";
})
go_back__to__add_ons.addEventListener("click", function () {
    summary__page.style.display = "none";
    add__ons__page.style.display = "block";
    step__four_div.style.background = "";
    step__four_div.children[0].style.color = "";
    step__three_div.style.background = "var(--light-blue)";
    step__three_div.children[0].style.color = "var(--button-hover)";
})

var billing_checker = true;
monthly.style.color = "var(--title-color)";
let counter = 1; 

billing.addEventListener('click', () => {
    if (counter % 2 == 1) {
        billing.style.paddingLeft = "28px";
        monthly.style.color = "";
        yearly.style.color = "var(--title-color)";
        arcade_price.textContent = "$90/yr";
        advanced_price.textContent = "$120/yr";
        pro_price.textContent = "$150/yr";
        billing_checker = false;
        checkout.forEach(element => {
            element.style.display = "block";
        });
        online_service_price.textContent = "+$10/yr";
        larger_storage_price.textContent = "+$20/yr";
        custom_pro_price.textContent = "+$20/yr";
        if (check_choice_one) {
            rate_name.textContent = "Arcade (yearly)";
            rate_price.textContent = "$90/yr";
        } else if (check_choice_two) {
            rate_name.textContent = "Advanced (yearly)";
            rate_price.textContent = "$120/yr"
        } else if (check_choice_three) {
            rate_name.textContent = "Pro (yearly)"
            rate_price.textContent = "$150/yr"
        }
    } else {
        billing.style.paddingLeft = "";
        monthly.style.color = "var(--title-color)";
        yearly.style.color = "";
        arcade_price.textContent = "$9/mo";
        advanced_price.textContent = "$12/mo";
        pro_price.textContent = "$15/mo";
        checkout.forEach(element => {
            element.style.display = "";
        });
        online_service_price.textContent = "+$1/mo";
        larger_storage_price.textContent = "+$2/mo";
        custom_pro_price.textContent = "+$2/mo";
        billing_checker = true;
    }

    counter += 1;
});

if (counter % 2 == 1) {
    if (check_choice_one) {
        rate_name.textContent = "Arcade (monthly)";
        rate_price.textContent = "$9/mo";
    } else if (check_choice_two) {
        rate_name.textContent = "Advanced (monthly)";
        rate_price.textContent = "$12/mo"
    } else if (check_choice_three) {
        rate_name.textContent = "Pro (monthly)"
        rate_price.textContent = "$15/mo"
    }
}