console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // piloto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        nombre:"",
        imagen:"",
        edad:"",
        escuderia:"",
        nacionalidad:"",
        url:'https://mcforets.pythonanywhere.com/pilotos/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.nombre = data.nombre,
                    this.imagen=data.imagen,
                    this.edad=data.edad,
                    this.escuderia=data.escuderia,
                    this.nacionalidad=data.nacionalidad 
                                      
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let piloto = {
                nombre:this.nombre,
                edad: this.edad,
                escuderia: this.escuderia,
                nacionalidad: this.nacionalidad,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(piloto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./index.html"; // navega a pilotos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')


