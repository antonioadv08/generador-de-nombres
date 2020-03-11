document
  .querySelector("#generar-nombre")
  .addEventListener("submit", cargarNombres);

//llamado a ajax e imprimir resultados
async function  cargarNombres(e) {
  e.preventDefault();
  //leer las variable
  const pais = document.querySelector("#origen").value;
  const genero = document.querySelector("#genero").value;
  const numero = document.querySelector("#numero").value;

  let url = "https://uinames.com/api/?";

  if (pais) {
    url += `region=${pais}&`;
  }
  if (genero) {
    url += `gender=${genero}&`;
  }
  if (numero) {
    url += `amount=${numero}&`;
  }


  let response = await fetch(url);
  let data = await response.json()

  let htmlNombres='<h2>Nombres Generados</h2>'
  htmlNombres+='<ul class="lista">'


  data.map(data=> htmlNombres+=`<li>${data.name}</li>`)
  
  htmlNombres+='</ul>'
  document.getElementById("resultado").innerHTML=htmlNombres
}


