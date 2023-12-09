document.getElementById("btn").onclick = function(){
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let amount  = document.getElementById("amount").value;

    

if(from == "dollar" && to == "naira"){
    document.getElementById("output").innerText = (amount * 800)
}

if(from == "naira" && to == "dollar"){
    document.getElementById("output").innerText =  (amount / 800)
}


if(from == "pounds" && to == "naira"){
    document.getElementById("output").innerText = (amount * 997.6)
}


if(from == "naira" && to == "pounds"){
    document.getElementById("output").innerText = (amount / 997.6)
}


if(from == "pounds" && to == "dollar"){
    document.getElementById("output").innerText = (amount * 1.26)
}

if(from == "dollar" && to == "pounds"){
    document.getElementById("output").innerText = (amount / 1.26)
}

if(from == "dollar" && to == "naira"){
    document.getElementById("output").innerText = (amount * 800)
}

if(from == "dollar" && to == "dollar"){
    document.getElementById("output").innerText = (amount)
}


if(from == "naira" && to == "naira"){
    document.getElementById("output").innerText = (amount)
}







// alert(from)
// alert(to)

}