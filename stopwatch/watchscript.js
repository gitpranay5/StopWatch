
    var hours = 0;
    var min = 0;
    var tens = 0;
    var seconds = 0;

    var appendHours = document.getElementById("hr");
    var appendMin = document.getElementById("min");
    var appendSeconds = document.getElementById("sec");
    var appendTens = document.getElementById("tens");
    
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    var Interval;
    

    function startTimer() {
      // console.log(tens);
        tens++;
        if(tens<9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens>9){
            appendTens.innerHTML = tens;
        }
        if(tens>99){
            seconds++;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
            if(seconds<9){
                appendSeconds.innerHTML = "0" + seconds;
            } 
            if(seconds > 9){
                appendSeconds.innerHTML = seconds;
            }
            if(seconds > 59){
                min++;
                tens = 0;
                seconds = 0;
                appendTens.innerHTML = "0" + 0;
                appendSeconds.innerHTML = "0" + 0;
                if(min<9){
                    appendMin.innerHTML = "0" + min;
                }
                if(min>9){
                    appendMin.innerHTML = min;
                }
                if(min>59){
                    hours++;
                    min = 0;
                    tens = 0;
                    seconds = 0;
                    appendMin.innerHTML = "0" + 0;
                    appendTens.innerHTML = "0" + 0;
                    appendSeconds.innerHTML = "0" + 0;
                    if(hours<9){
                        appendHours.innerHTML = "0" + hours;
                    }
                    if(hours>9){
                        appendHours.innerHTML = hours;
                    }
                }
            }
        }
    }

    buttonStart.onclick = function(){
        buttonStart.style = "background-color: rgba(3, 252, 3, 0.9)";
        buttonStop.style = "background-color:white, color:black";
        buttonReset.style = "background-color:white, color:black ";
        Interval = setInterval(startTimer);
    };
    buttonStop.onclick = function(){
        buttonStop.style = "background-color:  rgba(255, 123, 0, 0.947)";
        buttonStart.style = "background-color:white, color:black";
        buttonReset.style = "background-color:white, color:black";
        clearInterval(Interval);
    };
    buttonReset.onclick = function(){
        buttonReset.style = "background-color:  rgba(4, 0, 248, 0.755)";
        buttonStart.style = "background-color:white, color:black";
        buttonStop.style = "background-color:white, color:black";
        clearInterval(Interval);
        tens="00";
        seconds = "00";
        min = "00";
        appendMin.innerHTML = min;
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    };
