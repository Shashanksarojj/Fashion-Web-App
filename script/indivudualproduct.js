
let item=JSON.parse(localStorage.getItem("element"))||null
let add=JSON.parse(localStorage.getItem("cart"))||[]
console.log(add)

let url="https://63f4671c3f99f5855daeb266.mockapi.io/products"
let addtocart=document.getElementById("parchase")
for(let i=0;i<add.length;i++){
    if(add[i]===item){
        addtocart.innerText="Go to cart"
        addtocart.classList.add("buy")
    }
}

addtocart.addEventListener("click",()=>{
    console.log(add.length)
    let x=false;
    if(add.length==0){
        add.push(item)
        localStorage.setItem("cart",JSON.stringify(add))
    }
    for(let i=0;i<add.length;i++){
        if(add[i]!=item){
            x=true
            console.log(x)
        }
        else{
            x=false
           console.log(x)
           addtocart.innerText="Redirecting To Cart"
        }
    }
    if(x==true){
        add.push(item)
        localStorage.setItem("cart",JSON.stringify(add))
        addtocart.innerText="Go To Cart"
        addtocart.classList.add("buy")
        x=false
    }
    else{
        window.location.href="./cart.html"
    }
})

let imgdiv=document.getElementById("proimg")
let path1=document.getElementById("path1")
let path2=document.getElementById("path2")
let namediv=document.getElementById("name")

let y=null
let elementdata=[]
async function product(){
   try{
    let res=await fetch(`${url}/${item}`)
     .then(res=>res.json())
     .then(data=>{
         elementdata.push(data)
        elementdata.forEach((element) => {
             y=element.category
             console.log(y)

            for(let i=0;i<element.image.length;i++){
                 let img=document.createElement("img")
                img.setAttribute("src",element.image[i])
                 imgdiv.append(img)
            }
            let pathA=document.createElement("a")
            pathA.setAttribute("href","./women.html")
            pathA.innerText=element.gender
            let pathB=document.createElement("a")
            pathB.setAttribute("href","./womenJacket.html")
            pathB.innerText=element.category
            path1.append(pathA)
            path2.append(pathB)
            let name=document.createElement("h3")
            name.innerText=element.name
            namediv.append(name)
            


        });
     })

   }
   catch(error){
    console.log(error)
   }
}


let recomented=document.getElementById("trendProduct")

async function trending(){
    try{
        let res= await fetch (url)
        .then(res=>res.json())
        .then(data=>{
            data.forEach((element) => {
                console.log(y)
                if(element.gender=="women"&&element.category==y){
                    let prodiv=document.createElement("div")
                    prodiv.setAttribute("class","productDiv")
                    let image=document.createElement("img")
                    image.setAttribute("src",element.image[0])
                    prodiv.append(image)
                    recomented.append(prodiv)
                }
            });
        })

    }
    catch(error){
        console.log(error)
    }
    console.log(y,"yui")
}
product()
trending()

