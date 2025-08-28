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


// Copy Count

function copy_count(id,number)
{
  document.getElementById(id)
  .addEventListener("click",async function(e){
    e.preventDefault()
    // copy count
    const copy_count_value = parseInt(document.getElementById("copy-count").innerText)
    document.getElementById("copy-count").innerText = copy_count_value + 1;

    // clipboard copy

    const number_value = document.getElementById(number).innerText

    try{
      await navigator.clipboard.writeText(number_value);
      alert("Number Copied: "+number_value)
    }
    catch(err)
    {
      console.error("Failed ot copy", err);
    }
  })
}

copy_count("copy1","num1")
copy_count("copy2","num2")
copy_count("copy3","num3")
copy_count("copy4","num4")
copy_count("copy5","num5")
copy_count("copy6","num6")
copy_count("copy7","num7")
copy_count("copy8","num8")
copy_count("copy9","num9")


// History

function history_div(id,name,number){
  document.getElementById(id)
  .addEventListener("click", function(e){
    e.preventDefault()

    const newdiv = document.createElement("div")
    const newdiv2 = document.createElement("div")

    const name_value = document.getElementById(name).innerText
    const number_value = document.getElementById(number).innerText
   const now = new Date()
   const Time = now.toLocaleTimeString()

   const name_el = document.getElementById(name)
   const number_el = document.getElementById(number)

    const history_name = document.createElement("h4")
    const history_number = document.createElement("h3")
    const history_time = document.createElement("span")

    history_name.innerText= name_value
    history_number.innerText= number_value
    history_time.innerText = Time

    history_name.className = name_el.className
    history_name.className = "text-[18px] font-bold"
    history_number.className =  "text-gray-500"

    newdiv2.appendChild(history_name)
    newdiv2.appendChild(history_number)

    newdiv.appendChild(newdiv2)
    newdiv.appendChild(history_time)

    newdiv.className = "div p-2 m-2"

    // coin error
    const coinElem = document.getElementById("base-coin");
    const coin_value = parseInt(coinElem.innerText);

    if (coin_value - 20 < 0) {
        return;
      }
    


    document.getElementById("history-body").appendChild(newdiv)
  })
}

history_div("call-btn1","name1","num1")
history_div("call-btn2","name2","num2")
history_div("call-btn3","name3","num3")
history_div("call-btn4","name4","num4")
history_div("call-btn5","name5","num5")
history_div("call-btn6","name6","num6")
history_div("call-btn7","name7","num7")
history_div("call-btn8","name8","num8")
history_div("call-btn9","name9","num9")