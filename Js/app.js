// Extracting Needed Elements From DOM

const userInput = document.querySelector(".user-input");
const userText = document.querySelector(".user-text");
const addItemBtn = document.querySelector(".add-item");
const listArea = document.querySelector(".list-area");
const removeItemBtn = document.querySelectorAll(".remove-item");
const changeStatusBtn = document.querySelectorAll(".change-status");

// Global Variables
const msgBox = document.createElement("div");
// EventListeners
addItemBtn.addEventListener("click", addUserInput);
userText.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addUserInput();
    }
});

listArea.addEventListener("click", removeItemFromList);
listArea.addEventListener("click", changeItemStatus);

// Functions

function addUserInput() {
    //userText.value === "" ? showErrorMsg : "";
    if (!userText.value == "") {
        const createListItem = document.createElement("div");
        createListItem.classList.add("list-item");
        createListItem.innerHTML = `
        <div class="change-status">
                <i class="fa-solid fa-circle-dot"></i>
                </div>
                <p class="list-text">${userText.value}</p>
                <i class="fa-solid fa-circle-check list-items-icons"></i>
                <i class="fa-solid fa-trash list-items-icons"></i>
                </div>
        `;
        listArea.appendChild(createListItem);
        userText.value = "";
    } else showErrorMsg();
}

function changeItemStatus(e) {
    if (e.target.classList.contains("fa-circle-check")) {
        e.target.parentElement.classList.toggle("checked");
    }
}
function removeItemFromList(e) {
    if (e.target.classList.contains("fa-trash")) {
        e.target.parentElement.remove();
    }
}

//! این قسمت کد باید تبدیل شود تا تمیز تر بشود
//? الان حال ندارم
// ----

function showErrorMsg() {
    createMsg();
    setTimeout(removeMsg, 2000);
}

function createMsg() {
    msgBox.innerHTML = `
        <p style= "
        color:red;
        text-align:center;
        font-size:.7em;
        ">
        لطفا متن تسک را وارد کنید!
        </p>
    `;
    listArea.appendChild(msgBox);
}

function removeMsg() {
    msgBox.remove();
}
