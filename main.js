
const icon = document.querySelector('.icon');
const menu = document.querySelector('#myTopnav')
console.log(menu);
icon.addEventListener('click', function(){
   if(menu.classList == 'topnav'){
       menu.classList.add('responsive');
   }
   else{
       menu.classList.remove('responsive');
   }
})