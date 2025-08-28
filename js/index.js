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


// Call and History

function callWithHistory(id, nameId, numberId) {
  document.getElementById(id).addEventListener("click", function(e) {
    e.preventDefault();

    const coinElem = document.getElementById("base-coin");
    let coin_value = parseInt(coinElem.innerText);

    // check coins
    if (coin_value - 20 < 0) {
      alert("Invalid: not enough coins");
      return;
    }

    // deduct coins
    coin_value -= 20;
    coinElem.innerText = coin_value;

    // get name & number
    const nameEl = document.getElementById(nameId);
    const numberEl = document.getElementById(numberId);
    const name_value = nameEl.innerText;
    const number_value = numberEl.innerText;

    alert("Calling " + name_value + " " + number_value);

    // create history div
    const newdiv = document.createElement("div");
    const innerDiv = document.createElement("div");

    const history_name = document.createElement("h4");
    const history_number = document.createElement("h3");
    const history_time = document.createElement("span");

    history_name.innerText = name_value;
    history_number.innerText = number_value;
    history_time.innerText = new Date().toLocaleTimeString();

    //adding style
    history_name.className = nameEl.className + " text-[18px] font-bold";
    history_number.className = numberEl.className + " text-gray-500";
    history_time.className = "text-18 font-bold"

    // assemble divs
    innerDiv.appendChild(history_name);
    innerDiv.appendChild(history_number);

    newdiv.appendChild(innerDiv);
    newdiv.appendChild(history_time);

    newdiv.className = "div p-2 m-2"; // outer div styling

    document.getElementById("history-body").appendChild(newdiv);
  });
}

// --- Function calls ---
callWithHistory("call-btn1","name1","num1");
callWithHistory("call-btn2","name2","num2");
callWithHistory("call-btn3","name3","num3");
callWithHistory("call-btn4","name4","num4");
callWithHistory("call-btn5","name5","num5");
callWithHistory("call-btn6","name6","num6");
callWithHistory("call-btn7","name7","num7");
callWithHistory("call-btn8","name8","num8");
callWithHistory("call-btn9","name9","num9");




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



// Clear Button

document.getElementById("clear-btn")
.addEventListener("click", function(e){
  e.preventDefault()
  
  const historyBody = document.getElementById("history-body")

  while(historyBody.firstChild){
    historyBody.removeChild(historyBody.firstChild)
  }
})


