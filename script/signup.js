console.log("hvdjx")
let form=document.querySelector("form");

let mem=[]
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        email:form.email.value,
        password:form.Cpassword.value,
    }
    mem.push(obj)
    console.log(mem)
})