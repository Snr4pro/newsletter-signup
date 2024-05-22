email = document.querySelector('#email');
signup = document.querySelector('.signup');
submit = document.querySelector('#button');
dismiss = document.querySelector('#button2');
valueArea = document.querySelector('span');
thankYou = document.querySelector('.thankyou');
placeHolder = document.querySelector('input type[placeholder]');
errorAlert = document.querySelector('#error p');

emails = [];

submit.addEventListener('click', function(e){
    if (email.value === ''){
        email.style.background = "#F4DDDC";
        email.classList.add('active');
        email.classList.add('active::placeholder');
        errorAlert.style.display = "block";
    } else {
        emails.push(email.value);
        signup.style.display = "none";
        thankYou.style.display = "flex";
        valueArea.innerText = emails[0];
        email.classList.remove('active');
        email.classList.remove('active::placeholder');
        errorAlert.style.display = "none";
        email.style.background = "none";
        e.preventDefault();
    }
    
}) 

dismiss.addEventListener('click', function(){
    signup.style.display = "flex";
    thankYou.style.display = "none";
    emails.pop(email.value);

})