//BookStore has been moved to data.js 
console.log(bookStore)

function renderHeader() {
    document.querySelector('h1').textContent = bookStore.name
}

function renderFooter(){
    document.querySelector('#store').textContent = bookStore.name
    document.querySelectorAll('footer div')[2].textContent = bookStore.address
    document.getElementById('number').textContent = bookStore.number
}

// Render our books to the DOM
// Card, title, author, price, image

// Where is our data, which part of the object?
    // bookStore.inventory 
// where do the books go?
    // Ul id=book-list
    //How do we access that area?
    //   querySelector('#book-list')   
// loop through our array
    // for loop 
    // for in
    // for of
    // forEach
// create our cards 


// let arr = [1,2,3]
//for every item in our array
// forEach will call the callback 
// and pass it the items from the array
// arr.forEach((num) => {
//     console.log(num)
// })


// bookStore.inventory.forEach((book) => {
//     const li = document.createElement('li')
//     const h3 = document.createElement('h3')
//     const pAuthor = document.createElement('p')
//     const pPrice = document.createElement('p')
//     const img = document.createElement('img')

//     h3.textContent = book.title
//     pAuthor.textContent = book.author
//     pPrice.textContent = book.price
//     img.src = book.imageUrl

//     li.className = 'list-li'

//     li.append(h3, pAuthor,pPrice, img)
//     ul.append(li)
// })


const renderBook = (book) => {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const pAuthor = document.createElement('p')
    const pPrice = document.createElement('p')
    const img = document.createElement('img')

    h3.textContent = book.title
    pAuthor.textContent = book.author
    pPrice.textContent = "$" + book.price
    img.src = book.imageUrl

    li.className = 'list-li'

    li.append(h3, pAuthor,pPrice, img)
    const ul = document.querySelector('#book-list')  
    ul.append(li)
}

document.querySelector('#book-list li').remove()
bookStore.inventory.forEach(renderBook)
renderHeader()
renderFooter()

