if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function ready() {
    var removeCartItem = document.getElementsByClassName('remove')
    console.log(removeCartItem)
    for(i=0; i < removeCartItem.length; i++) {
    var button = removeCartItem[i]
    button.addEventListener('click',cartRemoveItems)
}
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i=0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('changed',quantityChanged)
    }
    var addToCart = document.getElementsByClassName('but')
    console.log(addToCart)
    for(var i=0; i < addToCart.length; i++) {
        var button = addToCart[i]
        button.addEventListener('click',cartAddItems)
    }
}

function cartAddItems (event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('des')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('Image')[0].src
    console.log(title ,imageSrc)
    cartAddItems(title,imageSrc)
}

function cartAddItems(title,imageSrc){
    var cartRow = document.createElement('tbody')
    cartRow.innerText = title
    var cartItems = document.getElementsByClassName('cart-item')[0]
    
}
function cartRemoveItems(event){
    var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if(isNAN(input.value) || input.value <= 1){
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart')[0]
    var cartRows = cartItemContainer.getElementsByClassName('row')
    var total = 0
    for(i=0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('total')[0]
        var quantityElement = cartRow.getElementsByClassName('quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('₹',''))
        var quantity = quantityElement.value
        total = total +(price * quantity)
    }
    total = Math.round(total*100)/100
    var totalElement = document.getElementsByClassName('GrandTotal')[0].innerText = '₹' + total
}

const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

/* the add to cart button isnt completed yet still working on it 
cart removal works fine tho */

