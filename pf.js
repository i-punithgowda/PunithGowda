years=document.querySelector('.years');

addEventListener('load',e=>{
    tick;   
   
})

const tick=()=>{
    const now=new Date();
    const before = new Date('April 17 2000 11:35:00');

    const timespn = now.getTime() - before.getTime();
    const min = (timespn / 1000 / 60);
    const hours = min / 60;
    const days = hours / 24;
    const yea = (days / 365).toFixed(8);
years.textContent=yea;

}

setInterval(tick,1000);

a=document.querySelector('.a');
a.addEventListener('click',e=>{
    window.open("https://www.facebook.com/profile.php?id=100050720154168");
})

b=document.querySelector('.b');
b.addEventListener('click',e=>{
    window.open("https://www.instagram.com/i.punithgowda/");
})
c=document.querySelector('.c');
c.addEventListener('click',e=>{
    window.open("https://github.com/itsmepunith");
})

d=document.querySelector('.d');
d.addEventListener('click',e=>{
    window.open("https://www.snapchat.com/add/pgowda1835");
})
    