
let item=JSON.parse(localStorage.getItem("element"))||null

let url="https://63f4671c3f99f5855daeb266.mockapi.io/products"


let main=document.getElementById("main")

async function jacket(){
    try{
       let res=await fetch(url)
       .then(res=>res.json())
       .then(data=>{
        data.forEach((element) => {
           if(element.gender=="women"&&element.category=="bag"){
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
                      localStorage.setItem("element",element.id)
                      window.location.href="./individualproduct.html"
              })


              namediv.append(name)
              imgdiv.append(img)
              card.append(imgdiv,namediv)
              main.append(card)


           }

        });
       })
    }
    catch(error){
        console.log(error)
    }
}
jacket()