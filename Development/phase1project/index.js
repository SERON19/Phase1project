const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function updateClock(){
    let h = new Date().getHours
    let m = new Date().getMinutes
    let s = new Date().getSeconds
    let ampm = "PM"
    h = 12;
    if (h > 12 ) {
        h = h - 12;
        ampm = "PM";
}

hourEl.innerText = h;
hourEl.innerText = m;
hourEl.innerText = s;
ampmEl,(innerText = ampm);

setTimeout(()=>{
    updateClock()

}, 1000)
}
updateClock();
// function updateClock(){
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();
//     let ampm = "AM";
    
//     if (h > 12 ) {
//         h = h - 12;
//         mpm = "PM";a
//     }
//     hourEl.innerText  = h;
// }
// updateClock()