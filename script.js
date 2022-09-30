var result,n1,n2 ;
function add(){
    let t1 = document.getElementById("num1").value;
    let t2 = document.getElementById("num2").value;
    result = Number(t1)+Number(t2);
    document.getElementById("res").innerHTML = result;
}

function sub(){
    let t1 = document.getElementById("num1").value;
    let t2 = document.getElementById("num2").value;
    result = Number(t1)-Number(t2);
    document.getElementById("res").innerHTML = result;
}

function mul(){
    let t1 = document.getElementById("num1").value;
    let t2 = document.getElementById("num2").value;
    result = Number(t1)*Number(t2);
    document.getElementById("res").innerHTML = result;
}

function div(){
    let t1 = document.getElementById("num1").value;
    let t2 = document.getElementById("num2").value;
    result = Number(t1)/Number(t2);
    document.getElementById("res").innerHTML = result;
}

function mod(){
    let t1 = document.getElementById("num1").value;
    let t2 = document.getElementById("num2").value;
    result = Number(t1)%Number(t2);
    document.getElementById("res").innerHTML = result;
}

