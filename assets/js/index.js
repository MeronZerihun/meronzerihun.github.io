
window.addEventListener('pagehide', function (event) {
    
   // clear input fields
   const name = document.getElementById('name');
   name.value = '';

   const email = document.getElementById('email');
   email.value = '';

   const message = document.getElementById('message');
   message.value = '';
  
});

const reset = document.getElementById("reset");

reset.addEventListener("click", function (event){
   const name = document.getElementById('name');
   name.value = '';

   const email = document.getElementById('email');
   email.value = '';

   const message = document.getElementById('message');
   message.value = '';
});
