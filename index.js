count = 0

document.getElementById("add-btn").addEventListener("click", function(){
    count++
    updateCount(count)
})

function updateCount(num) {
    document.getElementById("num-el").textContent = num
}

document.getElementById("save-btn").addEventListener("click", function (){
    document.getElementById("count-log").innerHTML += ` ${count} , `
    count = 0
    updateCount(count)
})