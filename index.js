window.onload = function() {
    var form = document.getElementById('submit')
    form.addEventListener('click', handlelogin)
        // console.log(form)


}


var users = [{
        username: "admin",
        password: "admin"
    },
    {
        username: "aman",
        password: "aman"
    },
    {
        username: "albert",
        password: "albert11"
    },
    {
        username: "amanv",
        password: "amanv1"
    },
    {
        username: "rahul",
        password: "rahul"
    }


]



function allUserInfo(payload) {
    var data = JSON.parse(localStorage.getItem('allusers')) || []
    data.push(payload)
    localStorage.setItem('allusers', JSON.stringify(data))


    console.log(data)

}

function handlelogin() {
    var user = document.getElementById('username').value

    var pass = document.getElementById('password').value
        // console.log(user, pass)
    var flag = false
    var adm = false
    users.forEach(item => {
        if (item.username === user && item.password === pass) {
            if (item.username === 'admin' && item.password === 'admin') {
                adm = true
            } else {
                flag = true
            }
        }

    })
    var date = new Date().toDateString()
    var Time = new Date().toLocaleTimeString()
    var payload = {
        username: user,
        date: date,
        time: Time
    }
    if (flag) {
        localStorage.setItem('username', JSON.stringify(payload))
        location.href = "dash.html"
    } else if (adm) {
        location.href = "admin.html"
    } else {
        var error = document.getElementById('error')
        error.innerHTML = "Wrong Username Or PassWord"
    }

    allUserInfo(payload)


}