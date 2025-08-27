// Heart Count Function
function heart_count_fun(id)
{
  document.getElementById(id)
.addEventListener("click",function(e){
  e.preventDefault();
  const heart_count_value = parseInt(document.getElementById("heart-count").innerText)
  document.getElementById("heart-count").innerText = heart_count_value + 1;
}) 

}

heart_count_fun("heart1")
heart_count_fun("heart2")
heart_count_fun("heart3")
heart_count_fun("heart4")
heart_count_fun("heart5")
heart_count_fun("heart6")
heart_count_fun("heart7")
heart_count_fun("heart8")
heart_count_fun("heart9")


// Call


function call(id,nm,number) {
  document.getElementById(id)
    .addEventListener("click", function(e) {
      e.preventDefault();
      
      const name_value = document.getElementById(nm).innerText;

      const number_value = document.getElementById(number).innerText


      // coins deduction
      const coinElem = document.getElementById("base-coin");
      const coin_value = parseInt(coinElem.innerText);

      if (coin_value - 20 < 0) {
        alert("Invalid");
        return;
      }

      coinElem.innerText = coin_value - 20;
      alert("Calling "+name_value+" "+number_value);
    });
}


call("call-btn1","name1","num1")
call("call-btn2","name2","num2")
call("call-btn3","name3","num3")
call("call-btn4","name4","num4")
call("call-btn5","name5","num5")
call("call-btn6","name6","num6")
call("call-btn7","name7","num7")
call("call-btn8","name8","num8")
call("call-btn9","name9","num9")