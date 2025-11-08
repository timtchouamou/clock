// creation of real-time analog clock ⏰ using DOM 
//manipulation and CSS rotations

// 1- select HTML elements that represent the clock hands
// const millisecondHandle = document.querySelector(".handle__milliseconds")
const secondHandle = document.querySelector(".handle__second")
const minuteHandle = document.querySelector(".handle__minute")
const hourHandle = document.querySelector(".handle__hour")
// console.log(hourHandle, minuteHandle, secondHandle) //verification

// NB: it is good to use AnimationFrame when milliseconds hand is not define
requestAnimationFrame(setHandles)

//2-Tells the browser to call the setHandles() function every 1000 milliseconds (1 second).

// this setInterval function is very import for this case, because we use the second hand
// setInterval(() =>{
//     setHandles()
// }, 1000)


function setHandles() {
    // console.log('denay')
const currentTime = new Date() // this gives the current time.
// console.log(currentTime) // verification
const hours = currentTime.getHours() // this gives the current hour
// console.log(hours) // verification
const minutes = currentTime.getMinutes() // this gives the current minute
// console.log(minutes) // verification
const seconds = currentTime.getSeconds() // this gives the current second
// console.log(seconds) // verification
// const milliseconds = currentTime.getMilliseconds() // this gives the current millisecond
// console.log(milliseconds) // verification

//key visual part: rotate each clock hand.

hourHandle.style.transform = `translateX(-50%) rotate(${hours * 30 + minutes * 0.5 }deg)`

minuteHandle.style.transform = `translateX(-50%) rotate(${minutes * 6 + seconds * 0.1 }deg)`
secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`
// millisecondHandle.style.transform = `translateX(-50%) rotate(${milliseconds * 0.36}deg)`

// A full circle = 360°
// There are 12 hours → 360 / 12 = 30° per hour
// There are 60 minutes → 360 / 60 = 6° per minute
// There are 60 seconds → 360 / 60 = 6° per second

// So:
// hours * 30 rotates the hour hand
// minutes * 6 rotates the minute hand
// seconds * 6 rotates the second hand

// NB:
// The translateX(-50%) part just centers the hand’s base horizontally on the clock face.


// NB: it is good to use AnimationFrame because it calls this function every milliseconds
requestAnimationFrame(setHandles)
}