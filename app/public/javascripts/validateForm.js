

var validateForm = function() {
  try{
      var result= true;
       var nameReg = /^[A-Za-z]+$/;
       var numberReg =  /^[0-9]+$/;
       var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

       var fname = $('#NFNAME').val();
       var lname = $('#NLNAME').val();
       var email = $('#NELECADR').val();
       var company = $('#NCOMPANY').val();
       var message = $('#HOW_CAN_BLOCKCHAIN_HELP').val().trim();

       var inputVal = new Array(fname, lname, email, company, message);

       var inputMessage = new Array("first name", "last name", "email address", "company name",  "message");

      $('.error').hide();
      $('input').removeClass('ibm-field-error');
      $('textarea').removeClass('ibm-field-error');

         if(inputVal[0] == ""){
            $('#NFNAME').addClass("ibm-field-error");
             $('#NFNAME').after('<span class="error ibm-item-note ibm-alert-link"> Please enter your ' + inputMessage[0] + '</span>');
             result = false;
         }
         else if(!nameReg.test(fname)){
           $('#NFNAME').addClass("ibm-field-error");
             $('#NFNAME').after('<span class="error ibm-item-note ibm-alert-link"> Letters only</span>');
             result = false;
         }
         if(inputVal[1] == ""){
           $('#NLNAME').addClass("ibm-field-error");
             $('#NLNAME').after('<span class="error ibm-item-note ibm-alert-link"> Please enter your ' + inputMessage[1] + '</span>');
             result = false;
         }
         else if(!nameReg.test(lname)){
           $('#NLNAME').addClass("ibm-field-error");
             $('#NLNAME').after('<span class="error ibm-item-note ibm-alert-link"> Letters only</span>');
             result = false;
         }

         if(inputVal[2] == ""){
           $('#NELECADR').addClass("ibm-field-error");
             $('#NELECADR').after('<span class="error ibm-item-note ibm-alert-link"> Please enter your ' + inputMessage[2] + '</span>');
             result = false;
         }
         else if(!emailReg.test(email)){
           $('#NELECADR').addClass("ibm-field-error");
             $('#NELECADR').after('<span class="error ibm-item-note ibm-alert-link"> Please enter a valid email address</span>');
             result = false;
         }

         if(inputVal[3] == ""){
           $('#NCOMPANY').addClass("ibm-field-error");
             $('#NCOMPANY').after('<span class="error ibm-item-note ibm-alert-link"> Please enter your ' + inputMessage[3] + '</span>');
             result = false;
         }
         if(inputVal[4] == ""){
           $('#HOW_CAN_BLOCKCHAIN_HELP').addClass("ibm-field-error");
             $('#HOW_CAN_BLOCKCHAIN_HELP').after('<span class="error ibm-item-note ibm-alert-link"> Please enter your ' + inputMessage[4] + '</span>');
             result = false;
         }
         if (result){
           alert('Fields validated. IBM to add action to form. Remove this alert in validateForm.js');
         }
         return false;
       }catch(e){
         console.log(e.message)
         alert(e.message);
         return false;
       }

}
