
let item=JSON.parse(localStorage.getItem("element"))||null
let url="https://63f4671c3f99f5855daeb266.mockapi.io/products"


let main=document.getElementById("trendProduct")

async function trending(){
    try{
        let res= await fetch (url)
        .then(res=>res.json())
        .then(data=>{
            data.forEach((element) => {
                if(element.gender=="women"&&element.tag=="trending"){
                    let prodiv=document.createElement("div")
                    prodiv.setAttribute("class","productDiv")
                    let image=document.createElement("img")
                    image.setAttribute("src",element.image[0])
                     prodiv.addEventListener("click",()=>{
                        localStorage.setItem("element",element.id)
                      window.location.href="./individualproduct.html"
                     })
                    prodiv.append(image)
                    main.append(prodiv)
                }
            });
        })

    }
    catch(error){
        console.log(error)
    }
}
trending()