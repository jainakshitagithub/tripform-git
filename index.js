console.log('This is project 4');
let name = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let validation=false;
name.addEventListener('blur', () => {
    console.log('Name fired');
    const regex = /^[a-zA-z0-9_]{3,15}$/;
    let str = name.value;
    if (regex.test(str)) {
        console.log('Valid Username');
        name.classList.remove('is-invalid')
        validation = true;

    }
    else {
        console.log('Invalid Username');
        name.classList.add('is-invalid')
        validation = false;

    }
})
email.addEventListener('blur', () => {
    console.log('email fired');
    const regex = /^([a-zA-z0-9_*&$#]){3,15}@([a-zA-z]){2,10}\.([a-zA-Z]){1,7}$/
    let str = email.value;
    if (regex.test(str)) {
        console.log('Valid email');
        email.classList.remove('is-invalid')
        validation = true;

    }
    else {
        console.log('Invalid email');
        email.classList.add('is-invalid')
        validation = false;


    }

})
phone.addEventListener('blur', () => {
    console.log('phone fired');
    const regex = /^[0-9]{10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log('Valid number');
        phone.classList.remove('is-invalid')
        validation = true;


    }
    else {
        console.log('Invalid number');
        phone.classList.add('is-invalid')
        validation = false;

    }

})

let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    let message = document.getElementById('message');
    if(validation==true)
    {
        let alert1 ='';
alert1 =` <div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Success!</strong> You have successfully submit the form.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
message.innerHTML = alert1;

}
else{
let alert2 =''
    alert2 = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Failure!</strong> You should have checked out the fields
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    message.innerHTML = alert2;
}
})
