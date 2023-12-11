function guardar() {
    let n = document.getElementById("nombre").value
    let p = parseFloat(document.getElementById("edad").value)
    let s = document.getElementById("escuderia").value
    let nc = document.getElementById("nacionalidad").value
    let i = document.getElementById("imagen").value


    let piloto = {
        nombre: n, 
        edad: p,
        escuderia: s, 
        nacionalidad:nc,
        imagen: i 
    }
    let url = "https://mcforets.pythonanywhere.com/pilotos"
    var options = {
        body: JSON.stringify(piloto),
        method: 'POST',
        headers: { 'content-Type' : 'application/json'},
    }
    fetch(url, options)
        .then (function () {

            alert ("Grabado")
            window.location.href = "./index.html";
        })
        .catch (err => {
            alert("Error al grabar")
            console.error (err);
        })

}