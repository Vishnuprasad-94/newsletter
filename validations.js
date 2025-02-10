const form = document.getElementById('form');


const email_input = document.getElementById('email');
const number_input = document.getElementById('number');


const email_error_msg = document.getElementById('mailError');
const number_error_msg = document.getElementById('numberError');


const inputs = [email_input,number_input]
const labels = [email_error_msg,number_error_msg]


for (const input of inputs) {
   input.addEventListener('input', () =>  {
      input.parentElement.classList.remove('show');
      input.closest('.inputBox').previousElementSibling.classList.remove('show');
      
   })
}




form.addEventListener('submit', (e) => {
    let valid = true;


    if (!email_input.value || !email_input.value.includes('@') ) {
        
        email_input.parentElement.classList.add('show');
        email_error_msg.parentElement.classList.add('show');
        
        valid = false;
     } else {
        email_input.parentElement.classList.remove('show');
        email_error_msg.parentElement.classList.remove('show');

     }
    
     if(!number_input.value || !/^\d+$/.test(number_input.value)) {
       
       number_input.parentElement.classList.add('show');
       number_error_msg.parentElement.classList.add('show');

       valid  = false;

     } else {
        number_input.parentElement.classList.remove('show');
        number_error_msg.parentElement.classList.remove('show');
       

     }

     if (valid === false) {
        e.preventDefault();
     }
         

})


