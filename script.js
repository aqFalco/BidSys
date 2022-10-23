function calc(btn_type){
    var balance = document.getElementById("bal");
    var bid = document.getElementById("bid");
    if (btn_type == "del")
    {
        balance.innerText = balance.innerText.slice(0, -1);
    }
    else if (balance.innerText.length <= 7)
    {
        balance.innerText = (balance.innerText == "0") ? balance.innerText = btn_type : balance.innerText += btn_type;
    }
    else if (btn_type == "." && balance.innerText.length <= 7)
    {
        btn_type = balance.innerText.includes(".") ? "" : btn_type;
        balance.innerText += btn_type;
    }

    bid.style.backgroundColor = (balance.innerText == "") ? bid.style.backgroundColor = "#FF0000" : "#c0f990";

    if(balance.innerText == "")
    {
        bid.style.backgroundColor = "#FF0000"
    }

    balance.innerText = (balance.innerText == "") ? "0" : balance.innerText;
    bid.innerText =  "Place a bid - "+ balance.innerText +" ETH";
}