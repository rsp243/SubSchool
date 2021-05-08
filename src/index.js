$('.name-project').fadeIn(1000);
function openReqistrationPanel() {
    $('.register').fadeIn(1000);
}
  
setTimeout(openReqistrationPanel, 1000);

$('.sign-in-btn').on('click', function() {
    let loginValue = document.getElementById('login').value;
    let passwordValue = document.getElementById('password').value;
    if (loginValue === "" || passwordValue === "") {
        $('.sign-in .error-message').css('display', '');
    } else {
        $('.sign-in .error-message').css('display', 'none');
        if (loginValue === "admin" && passwordValue === "admin"){
            window.location.href = "main.html";
        }
    }
})

$('.sign-up-btn').on('click', function() {
    let nameValue = document.getElementById('name').value;
    let surnameValue = document.getElementById('surname').value;
    let emailValue = document.getElementById('email').value;
    let telValue = document.getElementById('tel').value;
    if (nameValue === "" || surnameValue === "" || emailValue === "" || telValue === "") {
        $('.sign-up .error-message').css('display', '');
    } else {
        $('.sign-up .error-message').css('display', 'none');
        window.location.href = "";
    }
})