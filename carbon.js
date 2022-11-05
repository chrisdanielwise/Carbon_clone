let open = document.getElementById('open');
let link = document.getElementById('links');
let hamburger = document.getElementsByClassName('hamburger');

open.addEventListener('click', function(){
    if(open.style.backgroundColor == 'rgb(250, 250, 250)') {
        link.style.display = 'block';
        open.style.backgroundColor = 'hsl(258, 63%, 49%)';
    } else {
        link.style.display = 'none';
        open.style.backgroundColor = 'rgb(250, 250, 250)';
    }
    
})
