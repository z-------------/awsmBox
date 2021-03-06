var awsmBox = {};

awsmBox.create = function(opts) {
    var i;
    
    var options = {
        title: "awsmBox",
        body: "Sample text, lens flare",
        buttons: [{
            text: "OK",
            closeOnClick: true,
            style: "color: white; background-color: #2be02b;"
        }],
        transition: {
            enable: true,
            easing: "ease",
            duration: 300
        }
    };
    
    if (opts) {
        for (i=0; i<Object.keys(opts).length; i++) {
            options[Object.keys(opts)[i]] = opts[Object.keys(opts)[i]];
        }
    }
    
    var boxDiv = document.createElement("div");
    boxDiv.classList.add("awsmBox");
    boxDiv.innerHTML = "<h2></h2><div class='content'></div><div class='buttons'></div>";
    
    boxDiv.querySelector("h2").innerHTML = options.title;
    
    for (i=0; i<options.buttons.length; i++) {
        var button = document.createElement("button");
        button.setAttribute("type", "button");
        
        button.innerHTML = options.buttons[i].text;
        
        if (options.buttons[i].closeOnClick) {
            button.addEventListener("click", function(){
                awsmBox.close(this.parentElement.parentElement);
            });
        }
        
        button.addEventListener("click", options.buttons[i].onClick);
        button.setAttribute("style", options.buttons[i].style);
        
        boxDiv.querySelector(".buttons").appendChild(button);
    }
    
    boxDiv.querySelector(".content").innerHTML = options.body;
    
    if (options.transition.enable) {
        if (!document.querySelector("#awsmbox-style")) {
            var animStyle = document.createElement("style");
            animStyle.innerHTML = "@keyframes awsmbox-anim { from { transform: scale(0); opacity: 0 } } @-webkit-keyframes awsmbox-anim { from { -webkit-transform: scale(0); opacity: 0 } }";
            animStyle.setAttribute("id", "awsmbox-style");
            document.head.appendChild(animStyle);
        }
        
        var animationString = "awsmbox-anim " + options.transition.duration +  "ms " + options.transition.easing;
        
        if (boxDiv.style.animation === undefined) {
            boxDiv.style.webkitAnimation = animationString;
        } else {
            boxDiv.style.animation = animationString;
        }
    }
    
    document.body.appendChild(boxDiv);
    
    boxDiv.style.marginTop = - boxDiv.offsetHeight / 2 + "px";
    boxDiv.style.marginLeft = - boxDiv.offsetWidth / 2 + "px";
    
    return boxDiv;
};

awsmBox.close = function(boxDiv) {
    boxDiv.parentElement.removeChild(boxDiv);
};