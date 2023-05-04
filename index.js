
// get the countdown element
let countdown=document.getElementById("countdown");
let countdownContainer=document.getElementById("countdown-container");
let img=document.getElementById("img");



//insert value
setTimeout(function() {
    countdown.innerText="10";
    setTimeout(function() {
        countdown.innerText="9";
      setTimeout(function() {
        countdown.innerText="8";
        setTimeout(function() {
            countdown.innerText="7";
          setTimeout(function() {
            countdown.innerText="6";
            setTimeout(function() {
                countdown.innerText="5";
              setTimeout(function() {
                countdown.innerText="4";
                setTimeout(function() {
                    countdown.innerText="3";
                  setTimeout(function() {
                    countdown.innerText="2";
                    setTimeout(function() {
                        countdown.innerText="1";
                      setTimeout(function() {
                        countdown.innerText="1";
                        setTimeout(function() {
                            countdownContainer.style="display:none";
                            img.style="display:flex";
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
