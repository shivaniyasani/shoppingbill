let cart =[];
function calculateTotal(){
    const productSelect=document.getElementById("product");
    const quantityInput=document.getElementById("quantity");
    const productValue=parseInt(productSelect.value);
    const quantityValue=parseInt(quantityInput.value);
    
    if(productValue > 0 && quantityValue . 0){
        const productName=productSelect.options[productValue].text;
        const productPrice=parseFloat(productSelect.value)*10;
        const itemTotal = productPrice*quantityValue;
        cart.push({name:productName,quantity:quantityValue,total:itemTotal});
        updateCartDisplay();
        calculateAndDisplayTotal();
    }
    else{
        alert("Please select a product any specify a valid quantity");
    }
    
}
function updateCartDisplay(){
    const cartDiv=document.getElementById("cart");
    cartDiv.innerHTML="";
    cart.forEach(item,index)=>{
        cartDiv.innerHTML += $
        {item.name} x${item.quantity} -$$
        {item.total.toFixed(2)}<br>;
    }
}
    function calculateAndDisplayTotal(){
        const totalBillDiv=document.getElementById("bill");
        const totalBill = cart.reduce((total,item)=>total+item.total,0);
        totalBillDiv.innerHTML=Total Bill:
        $${totalBill.toFixed(2)};
    }
    