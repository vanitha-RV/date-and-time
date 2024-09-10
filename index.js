function dispalyTime()
{
  var datetime=new Date();
  var hrs =datetime.getHours();
  var min =datetime.getMinutes();
  var sec = datetime.getSeconds();
  var session=document.getElementById('session');


   if(hrs>=12)
   {
    session.innerHTML ='PM';

   }
else 
{
    session.innerHTML='AM';
}

if(hrs >12)
{
    hrs= hrs-12;


}  

if (hrs <10)
{
    hrs="0" + hrs;
}
if (min < 10)
{
    min ="0" + min;
}
if (sec <10)
{
    sec ="0 "+sec;
}
document.getElementById('hrs').innerHTML= hrs;
document.getElementById('min').innerHTML=min;
document.getElementById('sec').innerHTML=sec;

}
setInterval(dispalyTime,1000);



 