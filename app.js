window.onload=function(){
    const mins=document.getElementById("mins");
    const tens=document.getElementById("tens");
    const secs=document.getElementById("secs");
    const StartBtn=document.getElementById("startBtn")
    const StopBtn=document.getElementById("stopBtn")    
    const ResetBtn=document.getElementById("resetBtn")    
    console.log(mins,tens,secs)
    console.log(startBtn,StopBtn,ResetBtn)
    let minsSet= 00;
    let tensSet= 00;
    let secsSet= 00;
    let Interval;
    StartBtn.onclick=function(){
        Interval=setInterval(startTimer,10)
    }
    StopBtn.onclick=function(){
        clearInterval(Interval);
        const lap=document.getElementById("laps");
        const li=document.createElement("li");
        li.innerHTML=`lap : <span>${mins.innerHTML}:${secs.innerHTML}.${tens.innerHTML}</span>`
        lap.appendChild(li);
    }
    ResetBtn.onclick=function(){
        clearInterval;
        minsSet="00";
        secsSet="00";
        tensSet="00";
        mins.innerHTML=minsSet;
        secs.innerHTML=secsSet;
        tens.innerHTML=tensSet;
        document.getElementById("laps").innerHTML=" "; 
    }
    function startTimer(){
        tensSet++;
        if (tensSet<9){
            tens.innerHTML="0"+tensSet;
        }
        if (tensSet>9){
            tens.innerHTML=tensSet;
        }
        if (tensSet>99){
            secsSet++;
            secs.innerHTML="0"+secsSet;
            tensSet=0;
            tens.innerHTML="0"+0; 
        }
        if (secsSet>9){
            secs.innerHTML=secsSet;
        }
        if (secsSet==60){
            minsSet++;
            mins.innerHTML="0"+minsSet;
            secsSet=0;
        }
        if (minsSet>9){
            mins.innerHTML=minsSet;
        }
    }
}
