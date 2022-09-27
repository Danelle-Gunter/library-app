let myLibrary = [];

function renderBookList(book) {
    const list = document.querySelector('#book-display');
    const item = document.querySelector(`[data-key='${book.id}']`);

    if (book.deleted) {
        item.remove();
        return;
    }

    list.addEventListener('click', event => {
        if (event.target.classList.contains('del-btn')){
           console.log('Pushed delete button');
           const itemKey = event.target.parentElement.dataset.key;
           console.log(itemKey);
           deleteBook(itemKey); 
        }

    });

    const node = document.createElement('li');

    node.setAttribute('data-key', book.id);
    
    node.textContent = `${book.title} by ${book.author}`;

    node.insertAdjacentHTML("beforeend", "<button type=button class='del-btn'>X</button>");

    if (item) {
        list.replaceChild(node, item);
    } else {
        list.append(node);
    }
}

function addBook(title, author) {
    const newBook = {
        title,
        author,
        id: Date.now(),
    };
    
    myLibrary.push(newBook);
    renderBookList(newBook);
}

function deleteBook(key) {
    const index = myLibrary.findIndex(item => item.id === Number(key));
    
    const book = {
        deleted: true,
        ...myLibrary[index]
    };
    
    myLibrary = myLibrary.filter(item => item.id !== Number(key));
    renderBookList(book);
}

const form = document.querySelector('#library-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const titleInput = document.querySelector('#book-title');
    const authorInput = document.querySelector('#book-author');

    const titleText = titleInput.value.trim();
    const authorText = authorInput.value.trim();

    if (titleText !== '' && authorText !== '') {
        addBook(titleText, authorText);
        titleInput.value = '';
        authorInput.value = '';
        titleInput.focus();
        authorInput.focus();
    }

});

const showFormBtn = document.querySelector('#show-form-btn');

// the Add Book button will make the form appear
showFormBtn.addEventListener('click', () => {   
    const formSection = document.querySelector('.visible');
    formSection.classList.toggle('visible');
    showFormBtn.classList.toggle('visible');
});
