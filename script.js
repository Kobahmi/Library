let myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


const formBox = document.getElementById("add-book-form")
const submitInput = formBox.querySelector("#submitBtn")
const titleInput = formBox.elements["title"]
const authorInput = formBox.elements["author"]
const pagesInput = formBox.elements["pages"]
const readInput = formBox.elements["read"]
const addBtn = document.getElementById("addBtn")
const overlayBox = document.querySelector(".overlay-box")
const overlayScreen = document.querySelector(".overlay-screen")
const bookContainer = document.querySelector("#book-container")


addBtn.addEventListener("click", activate)
overlayScreen.onclick = removeActivate
formBox.addEventListener("submit", (e) => {
    e.preventDefault()
    let newBook = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(newBook)
    removeActivate()
})


function addBookToLibrary(book) {
    myLibrary.push(book);
    createBookCard(book);
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


function createBookCard(newBook) {

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

    newTitle.innerHTML = newBook.title
    newAuthor.innerHTML = newBook.author
    newPages.innerHTML = newBook.pages
    removeBtn.innerHTML = "Remove"

    if (newBook.read === true) {
    readBtn.classList.add("btn-read")
    readBtn.innerHTML = "Read"
    } else {
    readBtn.classList.add("btn-not-read")
    readBtn.innerHTML = "Not read"
    }

    readBtn.addEventListener("click", toggle)
    removeBtn.addEventListener("click", removeCard(removeBtn, newBook.title, newBook.author))

    
    function toggle() {
        if (readBtn.classList.contains("btn-read")) {    //could also use if (newBook.read === true)
        readBtn.classList.remove("btn-read")
        readBtn.classList.add("btn-not-read")
        readBtn.textContent = "Not read"
        newBook.read = false}
        
    
        else {
        readBtn.classList.remove("btn-not-read")
        readBtn.classList.add("btn-read")
        readBtn.textContent = "Read"
        newBook.read = true}
    }
    
    function removeCard(btn, title, author) {
        btn.addEventListener('click', () => {
            let index = 0;
            myLibrary.forEach((book) => {
                if (book.title === title && book.author === author) {
                    myLibrary.splice(index, 1);
                }
                index++;
            })
            let bookToBeRemoved = btn.parentElement.parentElement;
            bookToBeRemoved.remove();
        })
    }
}

