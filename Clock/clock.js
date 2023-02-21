

   setInterval( function () 
  {
     seconds = new Date().getSeconds();
     minute = new Date().getMinutes();
     hour = new Date().getHours();
    document.getElementById("seconds").innerHTML = seconds+":sec"
  
    document.getElementById("minute").innerHTML = minute+":min"
    
    if(hour>12)
    {
      hour=hour-12
          document.getElementById("hours").innerHTML = hour+":pm"
    }
    else
    {
      document.getElementById("hours").innerHTML = hour+":Am"
    }
 },1000)

 var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; ;
   var w = new Date();
   var days = day[w.getDay()];

   var date = new Date().getDate();
   var years = new Date().getFullYear();
     
   document.getElementById("days").innerHTML=date+" "+days+" "+years

  //  ----------bakground----

  function Image(){
    document.body.style.backgroundImage="url('https://picsum.photos/1920/1020')"
    setTimeout(()=>{
    document.location.reload()
    },8000)
  } Image()