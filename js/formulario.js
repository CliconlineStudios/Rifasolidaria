document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  const CLAVE_ADMIN = "720267";
  
  let inputCliente = document.querySelector("#cliente");
  let inputCelular = document.querySelector("#Celular");
  let inputBoleto = document.querySelector("#boleto");
  let inputAdmin = document.querySelector("#admin");

  let cliente = inputCliente.value;
  let Celular = inputCelular.value;
  let boleto = inputBoleto.value;
  let admin = inputAdmin.value;

  // 🔴 VALIDACIONES RÁPIDAS
  if (cliente === "" || Celular === "" || boleto === "") {
    Swal.fire({ icon: "warning", title: "Campos incompletos", text: "Llena todos los datos." });
    return false;
  }

  if (admin !== CLAVE_ADMIN) {
    Swal.fire({ icon: "error", title: "Clave incorrecta", text: "Verifica el código de admin." });
    return false;
  }

  // ✅ PREPARACIÓN DE DATOS Y ENVÍO A GOOGLE (Silencioso)
  let url = `https://docs.google.com/forms/d/e/1FAIpQLScqdqd4cdwl2NHNJC42mRRJn1ZXU4GFiN5wrsIL4WgZax_W1w/formResponse?entry.62078474=${encodeURIComponent(cliente)}&entry.384469547=${encodeURIComponent(Celular)}&entry.1968066278=${encodeURIComponent(boleto)}&submit=Submit`;
  
  fetch(url, { method: "POST", mode: "no-cors" });

  // Rellenar datos en el diseño del boleto
  document.querySelector("#bCliente").innerText = cliente;
  document.querySelector("#bCelular").innerText = Celular;
  document.querySelector("#bBoleto").innerText = boleto;
  inputAdmin.value = "";

  // 📸 PROCESO DE CAPTURA
  html2canvas(document.querySelector("#boletoDigital")).then(canvas => {
    // 1. Ejecutar descarga inmediatamente
    let link = document.createElement("a");
    link.download = `boleto-${cliente}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    
    // 2. ⏳ ESPERAR 3 SEGUNDOS ANTES DE MOSTRAR LA ALERTA
    setTimeout(() => {
      Swal.fire({
        title: "¡Boleto Generado!",
        text: `El comprobante de ${cliente} se descargó correctamente.`,
        icon: "success",
        draggable: true
      });

      // 3. Limpiar Formulario
      inputCliente.value = "";
      inputCelular.value = "";
      inputBoleto.value = "";
      inputAdmin.value = "";
    }, 1000); // <--- Aquí están los 3000ms (3 segundos)
  });
});

           //    menu laterl 

           var btns = document.getElementById("inicio"),
           informacion = document.getElementById("infomacion"),
           conta=0;
       
           function sidebar()  {
       
               if (conta==0) {
                   document.getElementById("side").style.display = "block";
                   conta=1;
               }
               else{
                   document.getElementById("side").style.display = "none";
                   conta=0;
               }
               }
       
               function cerrarside() {
                   document.getElementById("side").style.display = "none";
                   conta=0;
                   
               }