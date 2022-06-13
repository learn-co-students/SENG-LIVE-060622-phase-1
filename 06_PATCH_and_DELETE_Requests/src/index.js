document.addEventListener('DOMContentLoaded', () => {

    // Fetch requests 
        // Function for making a GET request 
        function fetchResource(url){
            return fetch(url)
            .then(res => res.json())
        }

        function createResources(url, body){
            return fetch(url,{
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
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
    
        function renderBookCard(cardData){
            
            const li = document.createElement('li')
            const h3 = document.createElement('h3')
            const pAuthor = document.createElement('p')
            const pPrice = document.createElement('p')
            const inputInv = document.createElement('input')
            const img = document.createElement('img')
            const btn = document.createElement('button')
    
            h3.textContent = cardData.title
            pAuthor.textContent = cardData.author
            pPrice.textContent = `$${cardData.price}`
            inputInv.value = cardData.inventory
            inputInv.type = 'number'
            btn.textContent = 'Delete'
    
            img.src = cardData.imageUrl
            li.className = 'list-li'
    
            //Event Listeners 
            inputInv.addEventListener('change', (e) => {
                console.log(e.target.value)
                fetch(`http://localhost:3000/books/${cardData.id}`,{
                    method:'PATCH',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({inventory:e.target.value})
                })
            })

            btn.addEventListener('click',()=>{
                fetch(`http://localhost:3000/books/${cardData.id}`,{
                    method:'DELETE'
                })
                .then(() => li.remove())
            })
        
            li.append(h3,pAuthor,pPrice, inputInv, img, btn)
            //.appendChild
            document.querySelector('#book-list').append(li)
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
            createResources('http://localhost:3000/books', book)
            .then(renderBookCard)
            .catch(e => console.error(e))

        }
    
    
    // // Invoking functions  
        // fetchResource('http://localhost:3000/stores')
        // .then(data => {
        //     data.forEach((store) => {
        //         const p = document.createElement('p')
        //         p.textContent = store.name
        //         document.querySelector('main').prepend(p)
        //         p.addEventListener('click', () => {
        //             fetchResource(`http://localhost:3000/stores/${store.id}`)
        //             .then(storeJson => {
        //                 renderHeader(storeJson)
        //                 renderFooter(storeJson)
        //             })
        //         })
        //     } )
        // })
       

        fetchResource('http://localhost:3000/stores/2')
        .then(store => {
            renderHeader(store)
            renderFooter(store)
        })
        .catch(e => console.error(e))
    
    // //////
        fetchResource('http://localhost:3000/books')
        .then(books => books.forEach(renderBookCard))
        .catch(e => console.error(e))
    
         document.querySelector('#book-form').addEventListener('submit', handleForm)
    
})