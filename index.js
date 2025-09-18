/* === FUNCIONES JAVASCRIPT === */
/* Función para compartir el enlace en móviles */
function compartirEnlace() {
  const url = window.location.href;
  const title = document.title || "Business Card";
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(() => {
      alert("No se pudo compartir el enlace.");
    });
  } else {
    // Fallback para desktop o navegadores sin soporte
    navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles: " + url);
  }
}

/* Función para llamar al numero de la oficina */
function mostrarTelefono() {
        document.getElementById('telefono-popup').style.display = 'block';
      }
      function cerrarPopup() {
        document.getElementById('telefono-popup').style.display = 'none';
      }
      function llamarTelefono() {
        window.location.href = 'tel:+17879933500';
      }

/* Función para agregar contacto - Compatible con móviles */
function agregarContacto() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Carlos Roldán Soto
N:Roldán Soto;Carlos;;;
ORG:Sheraton Hotel & Casino;
TITLE:Banquet Manager
TEL;TYPE=WORK,VOICE:787-993-3500
TEL;TYPE=CELL:787-640-3652
EMAIL:carlos.roldansoto@sheraton.com
URL:https://carlosroldansoto.github.io/
NOTE: Extension: 3656
END:VCARD`;

  // Detectar si es un dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Para dispositivos móviles, crear un enlace temporal y hacer click
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Carlos_Roldan_Soto_Contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    
    // Limpiar después de un breve delay
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  } else {
    // Para desktop, usar el método tradicional
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Carlos_Roldan_Soto_Contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
