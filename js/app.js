const nam = document.getElementById("name");
const btn = document.getElementById("btn-Enviar");
const ema = document.getElementById("email");
const mn = document.getElementById("mensaje");
btn.onclick = () =>{
    let nombre = nam.value;
    let email = ema.value;
    let mensaje = mn.value;
    if(nombre=="" || mensaje=="" || email ==""){
        alert("completa todos los Datos o el correo no es valido ❌");
    }else{
        alert(`gracias por contactarte ${nombre} ✅`);
    }
};