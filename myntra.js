let bagItem;
onload();

function onload(){
    let bagitemstr=localStorage.getItem('bagItems');
    bagItem = bagitemstr?JSON.parse(bagitemstr) : [];
    productDetail();
    addbagiteminbag();
}
function addBagItems(itemid){
    bagItem.push(itemid);
    localStorage.setItem('bagItems',JSON.stringify(bagItem));
    addbagiteminbag();
}
function addbagiteminbag(){
    let bagsaddcount=document.querySelector('.bagsaddcount');
    if(bagItem.length > 0){
        bagsaddcount.style.visibility='visible';
        bagsaddcount.innerText=bagItem.length;
    }
    else{
        bagsaddcount.style.visibility='hidden';
    }
}

function productDetail(){
    const product_container=document.querySelector(".main-container");

    if(!product_container){
        return;
    }
    let innerHtml ='';
    
    item.forEach(items=>{

        innerHtml +=` 
         <div class="main-content">
         <div class="content-items">
             <img src="${items.image}" alt="image">
             <div class="rating">
                  ${items.rating.stars}|${items.rating.noOfReviews} 
             </div>
             <div class="company-name">${items.company_name}</div>
             <div class="item-name">${items.itemName} </div>
             <div class="pricing">
                 <span id="price">rs${items.item_price}</span> 
                 <span id="orignal-price">Rs${items.item_originalPrice}</span> 
                 <span id="discount">( ${items.item_cutOff}% off)</span>
             </div>
             <button id="add-bag-btn" onclick="addBagItems(${items.id});">Add to Bag</button>
         </div>
         </div>`;
     
     })
     product_container.innerHTML=innerHtml;
     

}
