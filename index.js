// FORM-1.

// const nameinp = document.getElementById("nameinp");
// const surnameinp = document.getElementById("surnameinp")
// const ageinp = document.getElementById("ageinp")
// const fin = document.getElementById("fininp")
// const emailinp = document.getElementById("emailinp")
// const passwordinp = document.getElementById("passwordinp")
// const myform = document.getElementById("formm")

// function axiosPost(event) {
//     event.preventDefault()
//      axios.post("https://655c30caab37729791aa046b.mockapi.io/102/swpstudents", {
//          name: nameinp.value,
//          surname: surnameinp.value,
//          age: ageinp.value,
//          fin: fininp.value,
//          emailinp: emailinp.value,
//          passwordinp: passwordinp.value,
//      })
//  }
//  myform.addEventListener('submit', axiosPost)


 
 FORM-2.

const username = document.getElementById("username");
const emailinp = document.getElementById("emailinp");
const passwordinp = document.getElementById("passwordinp");
const adressinp = document.getElementById("adressinp");
const countryinp = document.getElementById("countryinp");
const myform = document.getElementById("formm")


function axiosPost(event) {
   event.preventDefault()
    axios.post("https://655c30caab37729791aa046b.mockapi.io/102/swpstudents", {
        username: username.value,
        emailinp: emailinp.value,
        passwordinp: passwordinp.value,
        adressinp: adressinp.value,
        countryinp: countryinp.value,
    })
}
myform.addEventListener('submit', axiosPost)





// FORM-3.

// const titleinp = document.getElementById("titleinp");
// const priceinp = document.getElementById("priceinp");
// const descriptioninp = document.getElementById("descriptioninp");
// const discountinp = document.getElementById("discountinp");
// const stockinp = document.getElementById("stockinp");
// const qualityinp = document.getElementById("qualityinp");
// const countryinp = document.getElementById("countryinp");
// const customersCountinp = document.getElementById("customersCountinp");
// const categoryinp = document.getElementById("categoryinp");
// const cityinp = document.getElementById("cityinp");
// const myform = document.getElementById("formm")










   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   document.getElementById('form-control')
   if (input.valuen !== "" ) {
    setTimeout(function () {
        window.location.href = "home.html";
        
    },3000 );
    
   }else {
    alert("ne ise duzgun getmir");
   }

}




