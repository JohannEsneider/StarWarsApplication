function obtenerDatos(valor){
 

  let urlApi = `https://swapi.dev/api/${valor}`;

  const api = new XMLHttpRequest();
  api.open('GET', urlApi, true);
  api.send();

  api.onreadystatechange = function(){

    if(this.status == 200 & this.readyState == 4){
      let datos = JSON.parse(this.responseText);
  //    console.log(datos.results);

      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = '';


      for(let item of datos.results){
        resultado.innerHTML += `<td>${item.name}</td>
        <td>${item.height}</td>
        <td>${item.mass}</td>
        <td>${item.hair_color}</td>
        <td>${item.skin_color}</td>
        <td>${item.eye_color}</td>
        <td>${item.created.substr(0,10)}</td>
        `
      }
    }

  }
}