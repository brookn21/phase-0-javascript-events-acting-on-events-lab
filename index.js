// Your code here
const dodger = document.getElementById('dodger')

// dodger.style.bottom = "20px"
function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace('px', " ")
    const left = parseInt(leftNumber)
        
    if(left > 0){
        dodger.style.left = `${left - 5}px`
    }
}
document.addEventListener('keydown', (e) =>{
    if(e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }
});

function moveDodgerRight(){
    const rightNumber = document.getElementById('dodger').style.left.replace('px', " ")
    const right = parseInt(rightNumber)

    if(right > 0){
        dodger.style.left = `${right + 5}px`
    }
}

document.addEventListener('keydown', (e) =>{
    if(e.key === 'ArrowRight'){
        moveDodgerRight();
    }
});
