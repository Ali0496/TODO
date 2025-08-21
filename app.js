let TODO = JSON.parse(localStorage.getItem("todos")) || [];

let wrapper = document.querySelector(".wrapper");
let form = document.querySelector("#form");
let input = document.querySelector("#input");

function renderTodos() {
  let html = "";
  TODO.forEach((item) => {
    html += `
      <div class="card">
        <h2 class="${item.done ? "chiz" : ""}">${item.text}</h2>
        <div class="btn">
          <button data-id="${
            item.id
          }" class="done"><i class="fa-solid fa-check"></i></button>
          <button data-id="${
            item.id
          }" class="del"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `;
  });
  wrapper.innerHTML = html;

  let allDoneBtns = document.querySelectorAll(".done");
  allDoneBtns.forEach((doneBtn) => {
    doneBtn.addEventListener("click", (ev) => {
      let id = ev.currentTarget.dataset.id;
      TODO = TODO.map((t) => (t.id == id ? { ...t, done: !t.done } : t));
      saveTodos();
      renderTodos();
    });
  });
  let allDelBtns = document.querySelectorAll(".del");
  allDelBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", (eve) => {
      let id = eve.currentTarget.dataset.id;
      TODO = TODO.filter((card) => card.id != id);
      saveTodos();
      renderTodos();
    });
  });
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(TODO));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") return;

  let tayyor = {
    id: Date.now(),
    text: input.value,
    done: false,
  };

  TODO.unshift(tayyor);
  saveTodos();
  renderTodos();
  input.value = "";
});

renderTodos();
