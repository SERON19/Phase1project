var quotes = []
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes = data
       const newQuotees = document.getElementById("quotes");
    data.forEach ((quote)=> {
        fetch("http://localhost:3000/quotes",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(quote)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    // var li = document.createElement('li');
    //      li.innerText = quotes[i].text + "-" + quotes[i].author;    
    //      newQuotees.appendChild(li);
  })
  });
  const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function updateClock(){
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let ampm = "AM"
    if (h > 23 ) {
        h = h - 12;
        ampm = "PM";
        }
    if (h < 10){
        h = '0' + h
    }
    if (m < 10){
        m = '0' + m
    }
    if (s < 10){
        s = '0' + s
    }
    // console.log(h,m,s)
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
        }
setInterval(()=>{
    updateClock()
    }, 1000)

const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function (e) {
    let type = password.getAttribute('type');
    if (type === 'password'){
        type = 'text'
    }
    else{
        type = 'password'
    }
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
  