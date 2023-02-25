
 //let A=JSON.parse(localStorage.getItem("element"))||[]
// jacket()
// let main1=document.getElementById("main1")
//  let url="https://63f4671c3f99f5855daeb266.mockapi.io/products"
//  let item=JSON.parse(localStorage.getItem("cart"))||[]
// for(let i=0;i<item.length;i++){

// itemData=[]
// async function jacket(){
//     try{
//        let res=await fetch(`${url}/${item[i]}`)
//        .then(res=>res.json())
//        .then(data=>{
//        // console.log(data)
//         itemData.push(data)
//         console.log(itemData)
//        })
//        .catch((error){
//         console.log(error)
//     })
//   }
//     function crt(itemData){
//        itemData.forEach((element) => {
//           if(element.gender=="men"&&element.category=="clothing"){
//               let card=document.createElement("div")
//               card.setAttribute("class","card")
//               let imgdiv=document.createElement("div")
//               imgdiv.setAttribute("class","imgdiv")
//               let img=document.createElement("img")
//                img.setAttribute("src",element.image[0])
//                 img.addEventListener("mouseover",()=>{
//                 img.setAttribute("src",element.image[1])
//                 })
//               img.addEventListener("mouseout",()=>{
//                 img.setAttribute("src",element.image[0])
//               })
//               let namediv=document.createElement("div")
//               namediv.setAttribute("class","namediv")
//               let name=document.createElement("h4")
//               name.innerText=element.name
               
//               card.addEventListener("click",()=>{
//                       localStorage.setItem("cart",element.id)
//                       window.location.href="./individualproduct.html"
//               })


//               namediv.append(name)
//               imgdiv.append(img)
//               card.append(imgdiv,namediv)
//               main1.append(card)

//             })
//           }
           

      
       
  // jacket()
  //       }
  let prd=document.querySelector(".prd")
  let prc=document.querySelector(".price")
  let sprc=document.querySelector(".sprice")
  let td1= document.querySelector(".td1")
 let td2= document.querySelector(".td2")
 let td3= document.querySelector(".td3")
 let td4= document.querySelector(".td4")
  let A=JSON.parse(localStorage.getItem("cart"))||[]
  const url = `https://63f4671c3f99f5855daeb266.mockapi.io/products`
  let bag=[]; 
for(let i=0;i<A.length;i++){
  
   
   async function getData(){ 
      try { let res=await fetch(`${url}/${A[i]}`); 
      let M=await res.json(); 
      bag.push(M)
      console.log(bag)
       display(bag)
       } 
       catch(err){ console.log(err)
  } 
}
getData()
}  
  
   function display(arr=[]){
    document.querySelector("#main1").innerHTML=null;
    for(let i=0;i<arr.length;i++){
  //  prd.value=arr[i].name
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
      let btnP=document.createElement("button")
      btnP.innerHTML="+"
      btnP.addEventListener("click",function(){
        prc.innerText=arr[i].price
        btnNu.innerHTML++;
      })
      let btnNu=document.createElement("button")
      btnNu.innerHTML="1"
      let btnN=document.createElement("button")
      btnN.innerHTML="-"
      btnN.addEventListener("click",function(){
        prc.innerText=arr[i].price
        if( btnNu.innerHTML>0){
        btnNu.innerHTML--
        }
        if(btnNu.innerHTML==0){
          arr.splice(i, 1)
          localStorage.setItem("cart", JSON.stringify(arr))
          display(arr)
        }
      })
      let btn3 = document.createElement("button")
      btn3.textContent = "Cancel"
      btn3.addEventListener("click", () => {
          if (btn3.innerText === "Cancel") {
              arr.splice(i, 1)
              localStorage.setItem("cart", JSON.stringify(arr))
              display(arr)
              //total.innerText = Math.floor(+(total.innerText) - ((B[i].price) * btn.innerText))
          }
          //localStorage.setItem("buy", JSON.stringify(B))
      })
     let btn4=document.createElement("button")
     btn4.textContent=btnNu.innerHTML*(+(price.innerText))
    console.log(price.innerText)
div.append(img,title,brand,category,price,btnP,btnNu,btnN,btn3,btn4);
document.querySelector("#main1").append(div)


}
}