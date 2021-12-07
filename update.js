function reload(){
    
    if(localStorage.getItem("toggel") == 1){
        var x = document.getElementById("base");
        x.style.display = "none";
    }
    var color = localStorage.getItem("C1");
    var txtcolor =localStorage.getItem("tc");
    document.getElementById('base').innerHTML = localStorage.getItem('T');
    document.getElementById('base').style.backgroundColor = color
    document.getElementById('base').style.color = txtcolor
 
} setInterval ('reload()', 1)