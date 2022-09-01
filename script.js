let myLibrary = [
    {
        title: "test",
        author: "tester",
        pages: "235",
        read: false
    }
];


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


const formBox = document.querySelector("#add-book-form")
const submitInput = formBox.querySelector("#submitBtn")
const titleInput = formBox.querySelector("#title")
const authorInput = formBox.querySelector("#author")
const pagesInput = formBox.querySelector("#pages")
const readInput = formBox.querySelector("#read")
const addBtn = document.getElementById("addBtn")
const overlayBox = document.querySelector(".overlay-box")
const overlayScreen = document.querySelector(".overlay-screen")
const bookContainer = document.querySelector("#book-container")


addBtn.addEventListener("click", activate)
overlayScreen.onclick = removeActivate
formBox.addEventListener("submit", () => {
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    addBookToLibrary(newBook)
    removeActivate()
})


function addBookToLibrary(book) {
    myLibrary.push(book)
    createBookCard()
}

function activate() {
    resetInput()
    overlayBox.classList.add("activate-box")
    overlayScreen.classList.add("activate-overlay")
}

function removeActivate() {
    overlayBox.classList.remove("activate-box")
    overlayScreen.classList.remove("activate-overlay")
}

function resetInput() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
}


function createBookCard() {
    const bookCard = document.createElement("div")
    const newTitle = document.createElement("p")
    const newAuthor = document.createElement("p")
    const newPages = document.createElement("p")
    const buttonGroup = document.createElement("div")
    const readBtn = document.createElement("button")
    const removeBtn = document.createElement("button")

    bookCard.appendChild(newTitle)
    bookCard.appendChild(newAuthor)
    bookCard.appendChild(newPages)
    bookCard.appendChild(buttonGroup)
    buttonGroup.appendChild(readBtn)
    buttonGroup.appendChild(removeBtn)
    bookContainer.appendChild(bookCard)

    bookCard.classList.add("book-card")
    buttonGroup.classList.add("button-group")
    readBtn.classList.add("btn")
    removeBtn.classList.add("btn")

    newTitle.textContent = title.value
    newAuthor.textContent = author.value
    newPages.textContent = pages.value
    removeBtn.textContent = "Remove"

    if (readInput.checked) {
    readBtn.classList.add("btn-read")
    readBtn.textContent = "Read"
    } else {
    readBtn.classList.add("btn-not-read")
    readBtn.textContent = "Not read"
    }

    readBtn.addEventListener("click", toggle)
    removeBtn.addEventListener("click", removeCard)

    function toggle() {
        if (readBtn.classList.contains("btn-read")) {
        readBtn.classList.remove("btn-read")
        readBtn.classList.add("btn-not-read")
        readBtn.textContent = "Not read"}
    
        else {
        readBtn.classList.remove("btn-not-read")
        readBtn.classList.add("btn-read")
        readBtn.textContent = "Read"}
    }

    function removeCard() {
        bookContainer.removeChild(bookCard);
        myLibrary.splice(bookCard, 1);
    }
}