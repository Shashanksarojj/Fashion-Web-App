
let item=JSON.parse(localStorage.getItem("element"))||null

let url="https://63f4671c3f99f5855daeb266.mockapi.io/products"

let products=[]
let main=document.getElementById("main")

function render(prodata){
   main.innerHTML=null
   prodata.forEach((element) => {
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
         let pricediv=document.createElement("div")
         pricediv.setAttribute("class","pricediv")
         let price=document.createElement("h5")
         price.innerText=element.price
         pricediv.append(price)
          
         card.addEventListener("click",()=>{
                 localStorage.setItem("element",element.id)
                 window.location.href="./individualproduct.html"
         })


         namediv.append(name)
         imgdiv.append(img)
         card.append(imgdiv,namediv,pricediv)
         main.append(card)


      }

   });
}

async function jacket(){
    try{
       let res=await fetch(url)
       .then(res=>res.json())
       .then(data=>{
        data.forEach((element) => {
           products.push(element)
        });
        render(products)
       })
    }
    catch(error){
        console.log(error)
    }
}
jacket()


// creating dropdown div for sort functionality .........
let down=document.getElementById("downSymbol")
let downtwo=document.getElementById("downSymboltwo")
let sort=document.getElementById("sort")
let sortchild=document.getElementById("sortchild")
let count=0
sort.addEventListener("click",()=>{
   count++
   console.log(count)
   if(count%2!==0){
      down.classList.add("rotate180")
   let sortdiv=document.createElement("div")
   sortdiv.setAttribute("id","sortdiv")
   let deflt=document.createElement("h4")
      deflt.setAttribute("id","default")
      deflt.innerText="default"
   let h2l=document.createElement("h4")
   h2l.setAttribute("id","hightolow")
   let l2h=document.createElement("h4")
   l2h.setAttribute("id","lowtohigh")
   l2h.innerText="low to high"
   h2l.innerText="high to low"
   // default dom..........
   deflt.addEventListener("click",()=>{
      render(products)
   })
   // sorting low to high........................
   l2h.addEventListener("click",()=>{
      let sorted_data=products.sort((a,b)=>a.price-b.price)
      render(sorted_data)
   })
   // sorting high to low.........................
   h2l.addEventListener("click",()=>{
      let sorted_data=products.sort((a,b)=>b.price-a.price)
      render(sorted_data)
   })
   
   sortdiv.append(deflt,h2l,l2h)
   sortchild.append(sortdiv)
   }
   else{
      sortchild.innerHTML=null
      down.classList.remove("rotate180")
     
   }
   

})

// filter dropdown..............
let filter=document.getElementById("filter")
let filterchild=document.getElementById("filterchild")
let count1=0
filter.addEventListener("click",()=>{
   count1++
   console.log(count)
   if(count1%2!==0){
      downtwo.classList.add("rotate180")
   let filterdiv=document.createElement("div")
   filterdiv.setAttribute("id","tagfilterdiv")
   let filterdeflt=document.createElement("h4")
      filterdeflt.setAttribute("id","filterdefault")
      filterdeflt.innerText="default"
   let newproduct=document.createElement("h4")
   newproduct.setAttribute("id","newproduct")
   let trendingproduct=document.createElement("h4")
   trendingproduct.setAttribute("id","trendingproduct")
   trendingproduct.innerText="Trending items"
   newproduct.innerText="Newly launched"
   // default dom..........
   filterdeflt.addEventListener("click",()=>{
      render(products)
   })
   // filter new item........................
   newproduct.addEventListener("click",()=>{
      console.log("g")
      let filterd_data = products.filter((ele)=>{
         return ele.tag == "new"
     })
     render(filterd_data)
   })
   // filter trending.........................
   trendingproduct.addEventListener("click",()=>{
      let filterd_data = products.filter((ele)=>{
         return ele.tag == "trending"
     })
     render(filterd_data)
   })
   
   filterdiv.append(filterdeflt,newproduct,trendingproduct)
   filterchild.append(filterdiv)
   }
   else{
      filterchild.innerHTML=null
      downtwo.classList.remove("rotate180")
   }

})