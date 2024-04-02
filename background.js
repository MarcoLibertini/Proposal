// Escuchar eventos de navegación
chrome.webNavigation.onCompleted.addListener(function(details) {
  // Verificar si la URL cargada es lanueva.com
  if (details.url.includes("https://moodle.uns.edu.ar/moodle/*")) {
      // Abrir una nueva pestaña con la URL de tu proyecto web
      chrome.tabs.create({ url: "https://tuproyectoweb.com" });
  }
});