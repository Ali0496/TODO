let TODO = [];

let wrapper = document.querySelector(".wrapper");
let form = document.querySelector("#form");
let input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let tayyor = {
    id: TODO.length + 1,
    text: input.value,
  };
  TODO.unshift(tayyor);
  let html = "";

  TODO.forEach((item) => {
    html += `
    <div class="card">
            <h2>${item.text}</h2>
            <div class="btn">
                <button class="done"><i class="fa-solid fa-check"></i></button>
                <button class="del"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `;
  });
  wrapper.innerHTML = html;
  input.value = "";

  let allDoneBtns = document.querySelectorAll(".done");
  allDoneBtns.forEach((doneBtn) => {
    doneBtn.addEventListener("click", (ev) => {
      ev.target.parentElement.previousElementSibling.classList.add("chiz");
    });
  });

  let allDelBtns = document.querySelectorAll(".del");
  allDelBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", (eve) => {
      eve.target.parentElement.parentElement.style.display = "none";
      TODO = TODO.filter((card) => card.id != eve.target.id);
    });
  });
});

//
