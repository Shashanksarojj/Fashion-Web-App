// https://63f4671c3f99f5855daeb266.mockapi.io/products

let tbodyel = document.querySelector("tbody")
let global = []
getdata()
async function getdata(){
  let req = await fetch("https://63f4671c3f99f5855daeb266.mockapi.io/products")
  let data = await req.json()

  display(data)
  global = data
  console.log(data)
}

function display(data){
 data.forEach((element, i) => {
    
let card=document.createElement("tr")
tbodyel.append(card)

let td1=document.createElement("td")
td1.innerText=element.price

let td2=document.createElement("td")
td2.innerText=element.name.substring(0,10)

let td3=document.createElement("td")
td3.innerText=element.category

let td4=document.createElement("td")
td4.innerText="Active"
td4.setAttribute("id","td4")

let td5=document.createElement("td")
td5.innerText="Delete"
td5.style.color = "red"
td5.style.cursor = "pointer"

td5.addEventListener("click", ()=>{
      global.forEach((ele, ind)=>{
        if(ind==i){
            fetch(`https://jsonplaceholder.typicode.com/posts/${ind+1}`, {
                method: "DELETE",
                headers: { 
                    'Content-type': 'application/json'
                  },
               })
        }
          
      })
})

card.append(td2,td3,td1,td4,td5)

 });
}