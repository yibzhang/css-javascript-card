var shopAmount = 0;

const cardImages = document.querySelectorAll('.card-image')
cardImages.forEach((cardImage, index) => {
    cardImage.style.background = `url('cosmetic${index + 1}.jpg')`;
    cardImage.style.backgroundSize = 'contain';
    cardImage.style.backgroundRepeat = 'no-repeat';
    cardImage.style.backgroundPosition = 'top';
})

document.querySelector('.card-info-button-add').addEventListener("click", (e) => {
    shopAmount += 1;
    console.log(shopAmount);
    displayShopAmount();
})

document.querySelector('.card-info-button-del').addEventListener("click", () => {
    if (shopAmount > 0) {
        shopAmount -= 1;
        console.log(shopAmount);
        displayShopAmount();
    }
    if (shopAmount == 0){
        hideShopAmount();
    }
})

function displayShopAmount(){
    document.querySelector('.card-info-amount > span').innerHTML = shopAmount;
    document.querySelector('.card-info-amount').style.display = 'flex';
    document.querySelector('.card-info-amount').style.borderLeft = '2px solid #dfe4ea';
    document.querySelector('.card-info-button-del').style.display = 'flex';
    document.querySelector('.card-info-button-add').style.width = '50%';
    document.querySelector('.card-info-button-add').style.borderLeft = '2px solid #dfe4ea';
}

function hideShopAmount(){
    document.querySelector('.card-info-amount').style.display = 'none';
    document.querySelector('.card-info-amount').style.removeProperty('borderLeft');
    document.querySelector('.card-info-button-del').style.display = 'none';
    document.querySelector('.card-info-button-add').style.width = '100%';
    document.querySelector('.card-info-button-add').style.removeProperty('borderLeft');
}
