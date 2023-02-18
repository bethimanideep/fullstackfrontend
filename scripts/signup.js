let email = document.getElementById('email')
let password = document.getElementById('password')
let confirm = document.getElementById('confirm')
let username=document.getElementById("username")
let dob=document.getElementById("dob")
let role=document.getElementById("role")
let loca=document.getElementById("location")

let last = document.getElementById('last')

last.addEventListener('click', () => {    
    console.log("ddddd");
    let data = {
        username:username.value,
        email: email.value,
        dob:dob.value,
        location:loca.value,
        password: password.value,
        role:role.value,
        todo:[]
    }

    if (data.email === '') {
        alert('Provide an EMAIL')
    }
    else if (data.password == '') {
        alert('Fill The Password')
    }
    
    else if (data.password !== confirm.value) {
        alert('Both Password Not Same')
    }
    else if (password.value.length < 2) {
        alert('Password length to short')
    }
    else {
        fetch("https://vast-gray-marlin-kilt.cyclic.app/app/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((res)=>{
                if(res=="exists")alert("Already username exists")
                else{
                    console.log(res);
                    alert("Registered Successfully")
                    window.location.href="./login.html"
                }
            })
            .catch(err => console.log(err))
        
    }

})
