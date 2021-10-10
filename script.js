const val = document.getElementsByClassName('val')
var r = document.querySelector(':root');
const inpSpeed = document.getElementById('inpSpeed')
const Play = document.getElementById('Play')
const Pause = document.getElementById('Pause')


arr = ['👍', '✔', '😎', '👀']


Play.onclick = function () {
    val[0].style.animationPlayState = "running";
    val[1].style.animationPlayState = "running";
    val[2].style.animationPlayState = "running";
    updateAnimation(inpSpeed.value)
}
Pause.onclick = function () {
    
    val[0].style.animationPlayState = "paused";
    val[1].style.animationPlayState = "paused";
    val[2].style.animationPlayState = "paused";
    clearInterval(timeout);
}


inpSpeed.onchange = function () {
    r.style.setProperty('--speed', inpSpeed.value);
   
}
//this function changes the speed of setinterval by clearnig the old setinterval and then calling it agin when input value is changed
//everytime when we run setinterval it gives some id which we have taken in variable clled "timeout",
let timeout;
function updateAnimation(newSpeed) {
    if (timeout)//if there is some id returned by setinterval only then clearinterval, if no id is returned means setinterval is not running so no need to clear it
        clearInterval(timeout);
    timeout = setInterval(function () {
        const l = arr.length
        r1 = Math.floor(l * Math.random())
        r2 = Math.floor(l * Math.random())
        r3 = Math.floor(l * Math.random())
        console.log(r1, r2, r3)

        //console.log(r1,r1,r3)
        val[0].innerText = arr[r1]
        val[1].innerText = arr[r2]
        val[2].innerText = arr[r3]
        val[0].style.fontSize = '60px'
        val[1].style.fontSize = '60px'
        val[2].style.fontSize = '60px'
        if ((r1 == r2) && (r2 == r3)) {
            alert("You won: "+arr[r1]);
            val[0].style.animationPlayState = "paused";
            val[1].style.animationPlayState = "paused";
            val[2].style.animationPlayState = "paused";
            
            clearInterval(timeout);

        }

    }, 1000 / newSpeed)


}

