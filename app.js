
//// getting value from the button
    let displays = document.getElementById('display');
    let lstButtons = document.querySelectorAll('button');
    for (let element of lstButtons) {
    element.addEventListener("click",function(){click(this)});
    }
    function click(el){
        
        switch (el.innerText) {
            case "C":
                  displays.innerText = ('');
            break;

            case "<=":
                  displays.innerHTML = displays.innerText.slice(0,-1);
            break;
    
            case "=":
            result = eval(displays.innerText)
            displays.innerHTML +=   "=" + result
            break;

            default:
                displays.innerHTML += el.innerText;
            break;
        }
    }






//Place Holder
    let display = document.getElementById('display').innerHTML="0";

// // clear function
//     let clear = document.getElementById('clear');


//     //onclick function
//     clear.addEventListener("click", clears)

//     //function for clear
//     function clears(){
//     document.getElementById('display').innerHTML="0";
//     }

    //  result = total(displays.innerText)
    //             displays.innerHTML+= + '*' + result;


     // case "+":
            //       total = displays.innerText + displays.innerText;
            // break;

            // case "-":
            //       displays.innerText = displays.innerText - displays.innerText;
            // break;
            // case "/":
            //       displays.innerText = displays.innerText / displays.innerText;
            // break;
            // case "*":
            //    displays.innerHTML = displays.innerText * displays.innerText;
            // break;