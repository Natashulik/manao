//slider
$(document).ready(function () {
  $(".publications__slider").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
  {
    if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener("click", () => {
          menu.classList.remove("header__nav_active");
        });
      }
    }
  }
})();

// form - checkboxes
const checkboxes = document.querySelectorAll(
  ".footer__checkbox-container input"
);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    checkbox.setAttribute("checked", !checkbox.checked);
  });
});

//validation
const form = document.getElementById("form");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const textarea = document.getElementById("textarea");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    console.log("Форма успешно отправлена!");
    console.log("Имя: ", nameInput.value.trim());
    console.log("Адрес сайта:", emailInput.value.trim());
    console.log("Описание задач:", textarea.value);
    console.log("Нужна консультация:", checkbox1.checked ? "Да" : "Нет");
    console.log("Подобрать тариф:", checkbox2.checked ? "Да" : "Нет");
    console.log("Детальная оценка:", checkbox3.checked ? "Да" : "Нет");

    showModal();
    form.reset();
  } else {
    console.log("Заполните данные корректно");
  }
});

function validateForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  let isValid = true;

  if (nameValue === "" || !/^[a-zA-Zа-яА-Я]{2,}$/.test(nameValue)) {
    nameError.textContent = "* Минимум 2 буквы";
    nameInput.focus();
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "" || !emailRegex.test(emailValue)) {
    emailError.textContent = "* Некорректный email";
    emailInput.focus();
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  return isValid;
}

const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");

closeButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function showModal() {
  modal.style.display = "block";
}
