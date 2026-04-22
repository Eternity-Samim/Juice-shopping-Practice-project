let cartButton = document.querySelector('.addToCart');
let buyButtons = document.querySelectorAll('.buy');
let itemNum =0;

function cartButtonVisible(buttonNo){
  buyButtons[buttonNo].addEventListener("click", function(){
  cartButton.style.visibility='visible';
  itemNum++;
  cartButton.textContent=`Add ${itemNum} items to cart`;
});
};
cartButtonVisible(0);
cartButtonVisible(1);
cartButtonVisible(2);
cartButtonVisible(3);

cartButton.addEventListener('click',function(){
  cartButton.style.visibility='hidden';
  itemNum=0;
})