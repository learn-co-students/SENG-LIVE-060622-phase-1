document.addEventListener('DOMContentLoaded', () => {

// //FETCH
// //Fetch all
//.then(function(book){
//   book.forEach(renderBookCard))
// })

// function resFoo(res){
//     return res.json()
// }

fetch('http://localhost:3000/books')
.then(res => res.json())
.then(book => book.forEach(renderBookCard))
.catch(error =>console.error(error))  
// Fetch one
fetch('http://localhost:3000/stores/1')
.then(res => res.json())
.then(data => {
    renderHeader(data)
    renderFooter(data)
})
.catch(error => console.log(error))  
//     function fetchData(url){
//         return fetch(url)
//         .then(res => res.json())
//     }
// //STOP
//     fetchData('http://localhost:3000/books')
//     .then(book => book.forEach(renderBookCard))

//     fetchData('http://localhost:3000/stores/1')
//     .then(data => {
//     renderHeader(data)
//     renderFooter(data)
//     })

//STOP
// Render Functions
    // Renders Header
    function renderHeader(store){
        document.querySelector('h1').textContent = store.name
    }
    // Renders Footer
    function renderFooter(store){
        const footerDivs = document.querySelectorAll('footer div')
        footerDivs[0].textContent = store.name
        footerDivs[1].textContent = store.address
        footerDivs[2].textContent = store.hours
    }

    function renderBookCard(cardData) {
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const img = document.createElement('img')
        const btn = document.createElement('button')

        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$${cardData.price}`
        btn.textContent = 'Delete'

        img.src = cardData.imageUrl
        li.className = 'list-li'

        //Event Listeners 
        btn.addEventListener('click',()=>li.remove())
    
        li.append(h3,pAuthor,pPrice,img,btn)
        document.querySelector('#book-list').append(li)
    }

// Event handlers 
    function handleForm(e){
        e.preventDefault()
        //Builds Book
        const book = {
            title: e.target.title.value,
            author:e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory:e.target.inventory.value,
            reviews:[]
        }
        renderBookCard(book)
    }

//Invoking functions

    document.querySelector('#book-form').addEventListener('submit', handleForm)

///////

})

