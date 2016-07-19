

var validateForm = function() {

   var nameReg = /^[A-Za-z]+$/;
   var numberReg =  /^[0-9]+$/;
   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

   var names = $('#nameInput').val();
   var company = $('#companyInput').val();
   var email = $('#emailInput').val();
   var message = $('#messageInput').val();

   var inputVal = new Array(names, company, email, message);

   var inputMessage = new Array("name", "company", "email address", "message");

    $('.error').hide();

       if(inputVal[0] == ""){
           $('#nameLabel').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
       }
       else if(!nameReg.test(names)){
           $('#nameLabel').after('<span class="error"> Letters only</span>');
       }

       if(inputVal[2] == ""){
           $('#emailLabel').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
       }
       else if(!emailReg.test(email)){
           $('#emailLabel').after('<span class="error"> Please enter a valid email address</span>');
       }

       if(inputVal[4] == ""){
           $('#messageLabel').after('<span class="error"> Please enter your ' + inputMessage[4] + '</span>');
       }
}
