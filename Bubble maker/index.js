
    let counter = 0;
    let displayCounter = document.querySelector('h1');  

    const mekerBubble = ()  => {

        const bubble = document.createElement('span');
        document.body.appendChild(bubble);
        bubble.classList.add('bubble_style')
        const size = ( Math.random() * 180 + 100 +'px');
    
        bubble.style.height = size;
        bubble.style.width = size;

        bubble.style.top = Math.random() * (-100) - 80 + '%' ;
        bubble.style.left = Math.random() * 100 + '%' ;

        
        const i = Math.random() > 0.5 ? 1 :-1;
        bubble.style.setProperty('--left', Math.random() *100 * i + '%');

        bubble.addEventListener('click', () =>{

            bubble.remove();
            counter++;
            displayCounter.textContent = counter; 
        })

        setTimeout( () =>{

            bubble.remove();
            
        },7000);
    
}
setInterval (mekerBubble, 500)

    