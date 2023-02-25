
itemData=[]
async function jacket(){
    try{
       let res=await fetch(`${url}/${item[i]}`)
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        itemData.push(data)
        console.log(itemData)
        itemData.forEach((element) => {
          // if(element.gender=="men"&&element.category=="clothing"){
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
               
            //   card.addEventListener("click",()=>{
            //           localStorage.setItem("cart",element.id)
            //           window.location.href="./individualproduct.html"
            //   })


              namediv.append(name)
              imgdiv.append(img)
              card.append(imgdiv,namediv)
              main1.append(card)


           

        })
       })
    }
    catch(error){
        console.log(error)
    }

}
jacket()
}
