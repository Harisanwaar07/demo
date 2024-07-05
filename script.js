function clock() {
    const date=new Date();
     const seconds=date.getSeconds();
     const minutes=date.getMinutes();
     const hours=date.hours();

     const secondDegrees=(seconds/60) *360;
     const minutesDegrees=(minutes/60) *360 +(seconds/60)*6;
     const hoursDegrees=(hours/12) *360 +(minutes/60)*30;

     document.getElementById('hand-sec').style.transform= 'rotate(${secondDegrees}deg)';
     document.getElementById('hand-min').style.transform= 'rotate(${minutesDegrees}deg)';
     document.getElementById('hand-hour').style.transform= 'rotate(${hoursDegrees}deg)';
    
    }
    setInterval(clock,1000);
    clock();