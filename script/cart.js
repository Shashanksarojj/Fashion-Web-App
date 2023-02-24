let td1= document.querySelector(".td1")
 let td2= document.querySelector(".td2")
 let td3= document.querySelector(".td3")
 let td4= document.querySelector(".td4")
 //let A=JSON.parse(localStorage.getItem("element"))||[]
// jacket()
let main1=document.getElementById("main1")
 let url="https://63f4671c3f99f5855daeb266.mockapi.io/products"
 let item=JSON.parse(localStorage.getItem("cart"))||null
for(let i=0;i<item.length;i++){


async function jacket(){
    try{
       let res=await fetch(`${url}/${item[i]}`)
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        data.forEach((element) => {
           if(element.gender=="men"&&element.category=="clothing"){
              let card=document.createElement("div")
              card.setAttribute("class","card")
              let imgdiv=document.createElement("div")
              imgdiv.setAttribute("class","imgdiv")
              let img=document.createElement("img")
              img.setAttribute("src",element.image[0])
              img.addEventListener("mouseover",()=>{
                img.setAttribute("src",element.image[1])
              })
              img.addEventListener("mouseout",()=>{
                img.setAttribute("src",element.image[0])
              })
              let namediv=document.createElement("div")
              namediv.setAttribute("class","namediv")
              let name=document.createElement("h4")
              name.innerText=element.name
               
              card.addEventListener("click",()=>{
                      localStorage.setItem("cart",element.id)
                      window.location.href="./individualproduct.html"
              })


              namediv.append(name)
              imgdiv.append(img)
              card.append(imgdiv,namediv)
              main1.append(card)


           }

        });
       })
    }
    catch(error){
        console.log(error)
    }

}
jacket()
}