let form=document.querySelector("form");
let memberData=JSON.parse(localStorage.getItem("account-data"))||[];
form.addEventListener("submit",function(e){
  e.preventDefault()
  let formData={
    location:form.Location.value,
    title:form.title.value,
    fname:form.fname.value,
    lname:form.lname.value,
    phone:form.pnumber.value,
    email:form.email.value,
    password:form.Cpassword.value,
}
memberData.push(formData);
console.log(memberData)
localStorage.setItem("account-data",JSON.stringify(memberData));
alert("Register successfully");
window.location="login.html";
})