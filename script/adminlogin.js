let form=document.querySelector("form");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        let email=document.querySelector("#email").value;
        let pass=document.querySelector("#Cpassword").value;
        if(email=="compras" && pass=="compras"){
           window.location="admin.html";
        }else{
            alert("Wrong Credentials")
        }
    })
    console.log("jvxj")