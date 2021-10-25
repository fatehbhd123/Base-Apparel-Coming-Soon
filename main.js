const form = document.forms[0];
const email = document.querySelector('form input[type="text"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs(e);
});

function checkInputs(e) {
    let emailValue = email.value.trim();
    if (emailValue === '' || !Valid(emailValue)) {

        document.querySelector('.message').classList.add('active');
        document.querySelector('.error').classList.add('active');
    }
    else {
        document.querySelector('.message').classList.remove('active');
        document.querySelector('.error').classList.remove('active');
        email.value = "";
    }

}

function Valid(email) {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
}


