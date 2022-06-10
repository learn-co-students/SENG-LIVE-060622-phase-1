//Global
const cat = 'rose'
document.addEventListener('DOMContentLoaded', () => {
    //Function - local scope
// Fetch requests 
    // Function for making a GET request 
    function fetchResource(url){
        return fetch(url)
        .then(res => res.json())
    }

    function createResource(url, body){
        return fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    }
// Rendering functions
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

    function handleError(){
        const h1 = document.createElement('h1')
        h1.textContent = 'Sorry! There was a problem please check back soon!'
        document.querySelector('main').append(h1)
    }

// Event Handlers
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
        //renderBookCard(book)
        createResource('http://localhost:3000/books',book)
        .then(data => renderBookCard(data))
        .catch(e => console.log(e))
    }

    function handleStore(event){
        event.preventDefault()
        const store = {
            name: event.target.name.value,
            location: event.target.location.value,
            number: event.target.number.value,
            address: event.target.address.value,
            hours: event.target.hours.value
        }
        fetch('http://localhost:3000/stores',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(store)
        })
        .then(res => res.json())
        .then(data => {
            const h2 = document.createElement('h2')
            h2.textContent = `${data.name} was saved!`
            document.querySelector('main').append(data)
    
    })

        //createResource('http://localhost:3000/stores', store)
    }


// Invoking functions    
    fetchResource('http://localhost:3000/stores/1')
    .then(store => {
        renderHeader(store)
        renderFooter(store)
    })
    .catch(e => {
        handleError()
        console.error(e)
    })

    fetchResource('http://localhost:3000/books')
    .then(books => books.forEach(renderBookCard))
    .catch(e => {
        handleError()
        console.error(e)
    })

    document.querySelector('#book-form').addEventListener('submit', handleForm)
    document.querySelector('#store-form').addEventListener('submit', handleStore)

    document.querySelector('#form-btn').addEventListener('click', () => {
            document.querySelector('#store-form').classList.toggle('hidden')
            document.querySelector('#book-form').classList.toggle('hidden')
    })
})

// fetch('https://pokeapi.co/api/v2/pokemon/mew')
// .then(res => res.json())
// .then(pokemon => {
    
//     const div = document.createElement('div')
//     const sprite = document.createElement('img')
//     const h4 = document.createElement('h4')
//     sprite.src = pokemon.sprites.front_default
//     h4.textContent = `${pokemon.id} : ${pokemon.name}`

//     const move = pokemon.moves.find(obj => obj.move.name === 'mega-punch')

    
//     div.append(h4, sprite)
//     document.querySelector('footer').append(div)
// })

//Sprite pokemon.sprite
//name  pokemon.name
//number pokemon.id