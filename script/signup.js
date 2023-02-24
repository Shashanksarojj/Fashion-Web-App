console.log("hvdjx")
let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email =form.email.value;
    let password = form.Cpassword.value;
    fetch("http://localhost:3000/user/1",{
      method:'POST',
      headers:{
        'Content-type' : 'application/json'
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    .then((res)=> res.json())
    .then((data)=>{
     console.log(data);
    })
})
fetch("http://localhost:3000/user/1")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
})