const { createApp } = Vue

  createApp({
    data() {
      return {
        pilotos: [], 
        url:'https://mcforets.pythonanywhere.com/pilotos',
        error: false,
        cargando: true,
        id:0,
        nombre:"",
        edad:"",
        escuderia:"",
        nacionalidad:"",
        imagen:"",

      }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.pilotos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let piloto = {
                nombre:this.nombre,
                edad:this.edad,
                escuderia:this.escuderia,
                nacionalidad:this.nacionalidad,
                imagen:this.imagen
            }
            var options = {
                body:JSON.stringify(piloto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./index.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },


  }).mount('#app')