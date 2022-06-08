
renderHeader()
renderFooter()
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

    li.append(h3,pAuthor,pPrice,img,btn)
    document.querySelector('#book-list').append(li)
}

