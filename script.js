const accordians = document.querySelectorAll('.faq-1');

accordians.forEach(acconidan =>{
    const icon=acconidan.querySelector('.fa-plus');
    const answer=acconidan.querySelector('.ans-box')
    acconidan.addEventListener('click', () => {

        if(icon.classList.contains('active')){
            answer.classList.remove('active');
            icon.classList.remove('active');

            for(let i=0;i<=accordians.length;i++){
                if(i==acconidan){
                    continue;
                }
                answer.classList.remove('active');
                icon.classList.remove('active');
            }
        }
        else{
            answer.classList.add('active');
            icon.classList.add('active');
            
        }
    } )
})