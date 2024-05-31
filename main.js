function muestra_oculta(id) {
  let div = document.getElementById(id);
  if (div) { // Verifica si el elemento existe
      let estilo = window.getComputedStyle(div); // Obtiene los estilos computados del elemento
      if (estilo.display === "none") {
          div.style.display = "flex"; // Cambia a "flex" si estaba oculto
      } else {
          div.style.display = "none"; // Oculta si estaba visible
      }
  } else {
      console.error("El elemento con ID '" + id + "' no existe."); // Mensaje de error si el elemento no existe
  }
}