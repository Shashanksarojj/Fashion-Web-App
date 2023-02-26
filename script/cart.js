let prd=document.querySelector(".prd1")
let prc=document.querySelector(".price")
let qty=document.querySelector(".qty")
let sprc=document.querySelector(".sprc")
let prd2=document.querySelector(".prd2")
let prc2=document.querySelector(".price2")
let qty2=document.querySelector(".qty2")
let sprc2=document.querySelector(".sprc2")
let td1= document.querySelector(".td1")
let td2= document.querySelector(".td2")
let td3= document.querySelector(".td3")
let td4= document.querySelector(".td4")
let form1= document.querySelector(".form1")
let A=JSON.parse(localStorage.getItem("cart"))||[]
const url = `https://63f4671c3f99f5855daeb266.mockapi.io/products`
let bag=[]; 
for(let i=0;i<A.length;i++){

 
 async function getData(){ 
    try { let res=await fetch(`${url}/${A[i]}`); 
    let M=await res.json(); 
    bag.push(M)
    //console.log(bag)
     display(bag)
     } 
     catch(err){ console.log(err)
} 
}
getData()
}  

 function display(arr=[]){
  document.querySelector("#main1").innerHTML=null;
  //let td4=0
  for(let i=0;i<arr.length;i++){
  prd.innerHTML=arr[i].name
    let div=document.createElement("div")
   // let imgdiv=document.createElement("div");
    //for(let j=0;j<arr[i].image.length;j++){
      let img=document.createElement("img")
     img.setAttribute("src",arr[i].image[0])
     //imgdiv.append(img)
 //}
    let brand=document.createElement("h4");
    brand.innerText=arr[i].gender;
    let title=document.createElement("h4");
    title.innerText=arr[i].name;
    let category=document.createElement("p");
    category.innerText=arr[i].category;
    let price=document.createElement("p");
    price.innerText=arr[i].price;
    let btn4 = document.createElement("button")
    btn4.innerHTML="price"
    let btnP=document.createElement("button")
    btnP.innerHTML="+"
    prc.innerText=arr[i].price
    sprc.innerText=arr[i].price
    td1.innerText=arr[i].price
    td2.innerText=Math.floor((arr[i].price*12)/100)
    if(td1.innerText<2000){
      td3.innerText=149
    }else{
      td3.innerText=0
    }
    td4.innerText=(+( td1.innerText))+(+( td2.innerText))+ (+(td3.innerText))
    qty.innerHTML=1
    btnP.addEventListener("click",function(){
      sprc.innerText=arr[i].price*(+(btnNu.innerHTML)+1)
      td1.innerText=arr[i].price*(+(btnNu.innerHTML)+1)
      td2.innerText= Math.floor((td1.innerText*12)/100)
      if(td1.innerText<2000){
        td3.innerText=149
      }else{
        td3.innerText=0
      }
      td4.innerText=(+( td1.innerText))+(+( td2.innerText))+ (+(td3.innerText))
      //console.log(td4.innerText)
      btnNu.innerHTML++;
      btn4.textContent = arr[i].price*btnNu.innerHTML
      qty.innerHTML++
    })
    let btnNu=document.createElement("button")
    btnNu.innerHTML=1
    let btnN=document.createElement("button")
    btnN.innerHTML="-"
   
    btnN.addEventListener("click",function(){
      prc.innerText=((arr[i].price))
      if( btnNu.innerHTML>1){
        sprc.innerText= (arr[i].price*(+(btnNu.innerHTML)-1))
        td1.innerText=arr[i].price*(+(btnNu.innerHTML)-1)
        td2.innerText= Math.floor((td1.innerText*12)/100)
        if(td1.innerText<2000){``
          td3.innerText=149
        }else{
          td3.innerText=0
        }
        td4.innerText=(+( td1.innerText))+(+( td2.innerText))+ (+(td3.innerText))
       // console.log(td4.innerText)
        btnNu.innerHTML--
      btn4.textContent = arr[i].price*btnNu.innerHTML
      }
      if(qty.innerHTML>1){
      qty.innerHTML--
      }
    })
    let btn3 = document.createElement("button")
    btn3.textContent = "Cancel"
    btn3.addEventListener("click", () => {
        if (btn3.innerText === "Cancel") {
           A.splice(i, 1)
           arr.splice(i,1)
           localStorage.setItem("cart", JSON.stringify(A))
            display(bag)
            //total.innerText = Math.floor(+(total.innerText) - ((B[i].price) * btn.innerText))
        }
        //localStorage.setItem("buy", JSON.stringify(B))
    })
    form1.addEventListener("submit",function(e){
     e.preventDefault()
    
td4.innerText=Math.floor((+(td4.innerText*90))/100)
console.log(td4.innerText)
     
   
      })
   
   
   // btn4.textContent = arr[i].price*btnNu.innerHTML
   // let id=docoument.createElement("")
  
div.append(img,title,brand,category,price,btnP,btnNu,btnN,btn3,btn4);
document.querySelector("#main1").append(div)


}
}