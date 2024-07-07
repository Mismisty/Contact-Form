window.onload = function() {
    document.getElementById('contact-form').reset();
  };


const form = document.getElementById('contact-form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');

const textarea = document.getElementById('message');
const checkBox = document.getElementById('checkbox');
const submit = document.getElementById('submitBtn');
const successMsg = document.getElementById('success-message');

const errorMsg = document.getElementsByClassName('error-msg');
const validEmail = document.getElementById('valid-email');
const errorSelect = document.getElementById('select-error');
const emptyCheckBox = document.querySelector('.empty-checkbox');
const radioChecked = document.getElementsByClassName('input-radio');


let checkBoxFlag = true;

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let fNameFlag = true;
    let lNameFlag = true;
    let emailFlag = true;
    let option1Flag = true;
    let option2Flag = true;
    let textareaFlag = true;
    
    

    if (fname.value.trim() === "") {
        fname.style.borderColor = 'red';
        errorMsg[0].style.display = 'block';
        fNameFlag = false;
    }else{
        fname.style.borderColor = '';
        errorMsg[0].style.display = 'none';
    }

    if (lname.value.trim() === "") {
        lname.style.borderColor = 'red';
        errorMsg[1].style.display = 'block';
        lNameFlag = false;
    }else{
        lname.style.borderColor = '';
        errorMsg[1].style.display = 'none';
    }

    if (email.value.trim() === "") {
        email.style.borderColor = 'red';
        errorMsg[2].style.display = 'block';
        emailFlag = false;
    }else{
        email.style.borderColor = '';
        errorMsg[2].style.display = 'none';
    }

    if (!email.value.match(/^[A-Za-z\.\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        validEmail.style.display = 'block';
    }else{
        validEmail.style.display = 'none';
    }

 /*
 ?--------TEXTAREA VALIDATION------------
 */  
 if (textarea.value === ''){
     textarea.style.borderColor = 'red';
     errorMsg[3].style.display = 'block';
     textareaFlag = false;
 }else{
     errorMsg[3].style.display = 'none';
     textarea.style.borderColor = '';
 }

 /*
 ?---------FORM SUCCESS MESSAGE VALIDATION-----------
 */ 

if (fNameFlag && lNameFlag && emailFlag && option1Flag && option2Flag &&
     textareaFlag === true){
        successMsg.style.display = 'block';
     }else{
        successMsg.style.display = 'none';
     }

/*
?-----------VALIDATE BOTTOM CHECKBOX--------
*/      

     if (checkBox.checked){
        emptyCheckBox.style.display = 'none';
    }else{
        emptyCheckBox.style.display = 'block';
        checkBoxFlag = false;  
    }

})

/**
 * ?----------VALIDATE QUERY SELECTIONS---------
 */

form.addEventListener('click', (e) => {
if (e.target === option1 || e.target === option2){    

if (option1.checked){
    errorSelect.style.display = 'none';
    radioChecked[0].style.backgroundColor = "hsl(148, 38%, 91%)";
    radioChecked[1].style.backgroundColor = "";
    e.stopPropagation();
} else if (option2.checked){
    errorSelect.style.display = 'none';
    radioChecked[0].style.backgroundColor = "";
    radioChecked[1].style.backgroundColor = "hsl(148, 38%, 91%)";
    e.stopPropagation();
}else{
    errorSelect.style.display = 'block';
    option1Flag = false;
    option2Flag = false;
}   

}
});
