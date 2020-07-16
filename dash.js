var currentUser = JSON.parse(localStorage.getItem('username'))
console.log(currentUser)
var user = document.getElementById('user').textContent = currentUser.username
var time = document.getElementById('time').textContent = "Login Time :" + " " + currentUser.time
var date = document.getElementById('date').textContent = "LAst Login Date :" + " " + currentUser.date
var logout = document.getElementById('logout')

logout.addEventListener('click', handlelogout)

function handlelogout() {
    location.href = "index.html"
}



function covid() {
    location.href = 'covid-19.html'
}

function coin() {
    location.href = 'coin.html'
}