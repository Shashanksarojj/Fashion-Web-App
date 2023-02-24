let memberData=JSON.parse(localStorage.getItem("account-data"))||[];

let form=document.querySelector("form");

memberData.forEach(function(el,i){
    form.addEventListener("submit",function(e){
        e.preventDefault();
        let email=document.querySelector("#email").value;
        let pass=document.querySelector("#Cpassword").value;
        if(el.email==email && el.password==pass){
           window.location="index.html";
        }else{
            alert("Wrong Credentials")
        }
    })
})