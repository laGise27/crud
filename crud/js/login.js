
function loguear() 
{
let user=document.getElementById("usuario").value;
let pass=document.getElementById("clave").value;


if (user=="admin" && pass=="1234") 
{
    window.location.href = "./index.html";

}

else 
{
    alert("Datos Incorrectos");


}

}
