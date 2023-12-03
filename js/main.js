document. getElementById("header").innerHTML=  `  <nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="index.html"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/120px-F1.svg.png" alt="">
  </a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0 ">
          <li class="nav-item">
              <a class="nav-link active" href="https://carrerasformula1.netlify.app" aria-current="page">Pagina <span class="visually-hidden">(current)</span></a>
          </li>
          
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="index.html">Pilotos</a>
                  <a class="dropdown-item" href="noticias.html">Circuitos</a>
              </div>
          </li>
      </ul>
      <form class="d-flex my-2 my-lg-0">

          <input class="form-control me-sm-2" type="text" placeholder="Buscar">
          <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
  </div>
</div>
</nav>`
