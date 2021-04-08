window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    console.log(event);
    document.querySelector(".container").style.display = 'block'
    document.querySelector(".container-edit").style.display = 'none'
});


function editProfile() {

    document.querySelector(".container").style.display = 'none'
    document.querySelector(".container-edit").style.display = 'block'

    const name = document.getElementById("name").textContent
    document.getElementById("input-name").value = name

    const email = document.getElementById("email").textContent
    document.getElementById("input-email").value = email

    const interests = document.getElementById("interests").textContent
    document.getElementById("input-interests").value = interests
}

function saveProfile(){

    const name = document.getElementById("input-name").value
    document.getElementById("name").textContent = name

    const email = document.getElementById("input-email").value
    document.getElementById("email").textContent = email

    const interests = document.getElementById("input-interests").value
    document.getElementById("interests").textContent = interests

    document.querySelector(".container").style.display = 'block'
    document.querySelector(".container-edit").style.display = 'none'
}
