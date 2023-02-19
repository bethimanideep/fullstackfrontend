let email = document.getElementById('input1')
let password = document.getElementById('input2')
let button = document.getElementById('b1')
let forgotpassword = document.getElementById('forgot')
let body = document.querySelector('body')


button.addEventListener("click", () => {
    if (email.value === '') {
        alert('Fill the Email')
    }
    else if (password.value === '') {
        alert('Fill the Password')
    }
    else if (email.value != '' && password.value != '') {
        let data={
            username:email.value,
            password:password.value
        }
        fetch("https://tan-coati-belt.cyclic.app/app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((res)=>{
                if(res=="register")alert("Incorrect username or register as a new user")
                else if(res=="notmatched"){
                    alert("Incorrect Password")
                }
                else if(res!=="register"&&res!=="notmatched"){
                    localStorage.setItem("token",res)
                    localStorage.setItem("temp",data.username)
                    window.location.href="./index.html"
                }
            })
            .catch(err => console.log(err))
    }
})
