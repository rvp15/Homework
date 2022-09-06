const input= document.getElementById('checkbx')
input.addEventListener('click',(e)=>{
    // console.log(e.target.checked)
    const bulb1= document.querySelector('.bulb')
   if(e.target.checked){
    // console.log(bulb1)
   
  bulb1.style.backgroundImage = "url('on.jpg')"
  //create bubble after light is on
 myInterval = setInterval(genertaBubble,150)//generatebubble function is called at every 150ms
}else{
    bulb1.style.backgroundImage = "url('off.jpg')"
    //delete bubbles after light is off
 clearInterval(myInterval)//clearing setinterval once the bulb is switched off
}

//////////////////////generating bubbles///////////////////////////////////////
function genertaBubble(){
    let bubble=document.createElement('span')
    let body = document.getElementsByTagName('body')
        bubble.classList.add('bubbles')
        document.body.append(bubble)
        let min=40
        let max=80
        let randomSizes = Math.floor(Math.random() * (max - min) + min);
        bubble.style.width = randomSizes + 'px';
        bubble.style.height = randomSizes + 'px';
        bubble.style.left = Math.random() * (innerWidth) + 'px';
        bubble.style.right = Math.random() * innerWidth + 'px';
       
        //removing created bubbles every 3 sec so that it doesnt have cluster
        setTimeout(()=>{
            bubble.remove()
        },3000)
}
////////////////////////////////////////////////////////////////////////
})
