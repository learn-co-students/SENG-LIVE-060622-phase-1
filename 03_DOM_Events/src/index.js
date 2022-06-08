//Notes:
// const print = () => {
//     console.log('hi')
// }
//                                           the event, callback  
//document.querySelector('h1').addEventListener('click', () => console.log('hi'))
// click
// delete all books btn
// removing all books? 
// document.querySelector('#delete-books').addEventListener('click', (e) => {
//     console.log(e)
//     console.log(e.target)
//     document.querySelector('#book-list').innerHTML = ``
// })

//Add new books 
// Add an submit event to the Form
// target our Form
//https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX258_BO1,204,203,200_.jpg


//////////////////////////
// Adding a submit event to the form
console.log({name:'rose', age:11, toys:{fav:'free ball', fish: ['gold', 'silver']}})

document.querySelector('#book-form').addEventListener('submit', (e) => {

    e.preventDefault()
    console.log(e)
    console.log(e.target)
    console.log(e.target.cars.value)
    // e -> event object connected to the form
    // e.target -> form
    // e.target.title -> input from the form with the name:title
    // e.target.title.value -> data from the input 
    const book = {
        title: e.target.title.value,
        author: e.target.author.value,
        price: e.target.price.value,
        imageUrl: e.target.imageUrl.value,
        inventory: e.target.inventory.value,
        reviews : []
    }
    // The submit will get data from our user and create a new bookCard
    renderBookCard(book)
    
})

// Calling these kick off rendering the header and footer 
renderHeader()
renderFooter()
//For every item in inventory forEach calls renderBookCard on those items
bookStore.inventory.forEach(renderBookCard)


// Renders Header
function renderHeader(){
    document.querySelector('h1').textContent = bookStore.name
}
// Renders Footer
function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div')
    footerDivs[0].textContent = bookStore.name
    footerDivs[1].textContent = bookStore.address
    footerDivs[2].textContent = bookStore.hours
}

function renderBookCard(cardData) {
    //Building out elements createElement
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const pAuthor = document.createElement('p')
    const pPrice = document.createElement('p')
    const img = document.createElement('img')
    const btn = document.createElement('button')

    //Adding data to the elements
    h3.textContent = cardData.title
    pAuthor.textContent = cardData.author
    pPrice.textContent = `$${cardData.price}`
    btn.textContent = 'Delete'

    img.src = cardData.imageUrl
    //Adding a css class for styling 
    li.className = 'list-li'

    // Clicking Delete should remove a card
        // Event
        // click
        // btn
        // .remove()

    btn.addEventListener('click', () => li.remove())

    // adding all of the elements to the li 
    li.append(h3,pAuthor,pPrice,img,btn)
    // adding the li to the DOM
    document.querySelector('#book-list').append(li)
}




