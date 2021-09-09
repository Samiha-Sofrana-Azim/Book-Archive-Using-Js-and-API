const loadSingleUser = () => {
    fetch('https://openlibrary.org/search.json?q=javascript')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
}
loadSingleUser();

const displaySingleUser = user => {
    console.log(user);
}


const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('books').style.display = displayStyle;
}
const searchBook = () => {
    const searchText = document.getElementById('search-field').value;

    
    toggleSpinner('block');
    toggleSearchResult('none');
    loadBooks(searchText);
    document.getElementById('search-field').value = '';
}

const loadBook = searchText => {
    const url = ` https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.books))
}

const displayBooks = books => {
    const container = document.getElementById('books');
    container.textContent = '';
    if (!books) {

    }
    books?.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.innerHTML = `
            <h1>${book.strBook}</h1>
            <p>${book.strIngredient18 ? book.strIngredient18 : ''}</p>
            <button onclick="loadBookDetail('${book.strBook}')">click me</button>
        `;
        container.appendChild(div);
    });
    toggleSpinner('none');
    toggleSearchResult('block');
}

