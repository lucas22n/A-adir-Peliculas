var listaPeliculasFavoritas = [];
var listaTrailersPeliculasFavoritas = [];

function añadirPelícula(){
  var peliculaFavorita = document.getElementById('banda').value;
  var trailerPeliculasFavoritas = document.getElementById('cancion').value;
  
    if(( peliculaFavorita.endsWith('jpg') ) || ( peliculaFavorita.endsWith('jpeg') )){
      
      document.getElementById('mensajeDeError').innerHTML = '';
      listaPeliculasFavoritas.push(peliculaFavorita);
      listaTrailersPeliculasFavoritas.push(trailerPeliculasFavoritas);
      
      limpiarCampos();
      recargarPeliculas();
      
    } else {
      
      document.getElementById('mensajeDeError').innerHTML = 'Dirección de imagen no válida, inténtalo de nuevo';
      limpiarCampos();
      
    }
  }

function recargarPeliculas(){
 
  var elementoListaPeliculas = document.getElementById('listaPeliculas');
  elementoListaPeliculas.innerHTML = '';
  for(i=0; i < listaPeliculasFavoritas.length ; i++){
    elementoListaPeliculas.innerHTML += `<a href=" ${listaTrailersPeliculasFavoritas[i]} "><img src=" ${listaPeliculasFavoritas[i]} "></a>`;
    
  }
}

function  limpiarCampos(){
   document.getElementById('banda').value = '';
   document.getElementById('cancion').value = '';
}