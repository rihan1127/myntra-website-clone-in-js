let loadbagObject;

onload();
function onload(){
    loadBagItemObject();
    displaybag();
    displyaBagItem();
}

function displyaBagItem(){
    let itemContainer=document.querySelector('.bags-item-container');

    let totalItem=loadbagObject.length;
    let totalMRP=0;
    let itemdiscount=0;
   

    loadbagObject.forEach(bagItem=>{
        totalMRP+=bagItem.item_originalPrice;
        itemdiscount+= bagItem.item_originalPrice - bagItem.item_price;
    });
    let finalpayment=totalMRP-itemdiscount + 99;
    itemContainer.innerHTML=`
    <div class="bag-details-container">
                <div class="price-header">PRICE DETAILS (${totalItem} items)</div>
                <div class="price-item">
                    <span class="price-item-tag">total MRP</span>
                    <span class="price-item-value pricedetail-base-discount">${totalMRP} rs</span>
                </div>
                <div class="price-item">
                    <span class="price-item-tag">Discount on MRP</span>
                    <span class="price-item-value pricedetail-base-discount">-${itemdiscount} rs</span>
                </div>

                <div class="price-item">
                    <span class="price-item-tag">convenience Fee</span>
                    <span class="price-item-value"> 99 rs</span>
                </div>
                <hr>

                <div class="price-footer">
                    <span class="price-item-tag">Total amount</span>
                    <span class="price-item-value pricedetail-base-discount">${finalpayment}rs</span>
                </div>
    </div>
            <button class="btn-place-order">
                <div class="btn">PLACE ORDER</div>
            </button>`;
}


function  loadBagItemObject(){
console.log(bagItem);
loadbagObject=bagItem.map(itemid => {

for(let i=0;i<item.length;i++){
    if(itemid == item[i].id){
        return item[i];
    }
}
});
console.log(loadbagObject);
}

function removeFromBag(itemId){

    console.log("hello");
    bagItem= bagItem.filter(itemid=> itemid!=itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItem));
    loadBagItemObject();
    displaybag();
    displyaBagItem();

}

function displaybag(){
const summary=document.querySelector('.bag-summary');

let innerHtml='';
loadbagObject.forEach(bagItem=> {

innerHtml+=generateItemhtml(bagItem);
   
});
summary.innerHTML=innerHtml;
}

function generateItemhtml(item){

    return  `<div class="bag-panel">
    <div class="bag-item-container">
            <div class="item-left-part">
                    <img src="${item.image}" alt="image" class="bag-item-img">
            </div>                                       
    </div>

    <div class="item-content">

        <div class="item-right-part  b">
            <div class="company">${item.company_name}</div>
            <div class="itemname">${item.itemName}</div>
        </div>
        <div class="price-container b">
            <span class="current-price">${item.item_price} </span>
            <span class="original-price">rs ${item.item_originalPrice}</span>
            <span class="discount-percentage">(${item. item_cutOff}%OFF)</span>
        </div>
        <div class="return-period b">
            <span class="return-period-day">${item.return_day}days</span>return available
        </div>
        <div class="delivery-details b">
            delivery by
            <span class="delivery-details-day">${item.delivery_date}</span>
        </div>
    </div>
    <div class="remove-cart" id="close" onclick="removeFromBag(${item.id})"> x </div> 
</div> `;
}