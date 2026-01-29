
function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};


var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


    function inicio() {
        backarriba();

       
    }

    function arriba() {
        backarriba();

       
    }

    function serviciosA() {
        document.getElementById("servicios").scrollIntoView();
        cerrarside();
       
     
         
     }

     function ubicacion() {
        document.getElementById("ubicacion").scrollIntoView();
        cerrarside();
        
     
         
     }


function contactanos() {
   document.getElementById("redes").scrollIntoView();
   cerrarside();
   

    
}

function eventos() {
    document.getElementById("eventos").scrollIntoView();
    cerrarside();
 
     
 }

function reserva() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("screen4").scrollIntoView();
    cerrarside();
  
        
}


function reservasalir() {
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen4").scrollIntoView();
    cerrarside();

  
        
}

   
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
                document.getElementById("side").classList.remove("active");
                conta=0;
               });

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").classList.add("active");
            conta=1;
        }
         else {
        
        document.getElementById("side").classList.remove("active");
        conta=0;
    }
}

        function cerrarside() {
            document.getElementById("side").classList.remove("active");
            conta=0;
            
        }



        
//formulario>
        document.querySelector("#submit").addEventListener("click", e => {
            e.preventDefault();
          
            //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
            let telefono = "593962618736";
          
            let cliente = document.querySelector("#cliente").value;
            let edad = document.querySelector("#edad").value;
            let fecha = document.querySelector("#fecha").value;
            let hora = document.querySelector("#hora").value;
            let modulos = document.querySelector("#modulos").value;
            let resp = document.querySelector("#respuesta");
          
            resp.classList.remove("fail");
            resp.classList.remove("send");
          
            let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
                  *Next Adventure*%0A
                  *Datos de la Reserva*%0A
                  *Nombre*%0A
                  ${cliente}%0A
                  *Cantidad*%0A
                  ${edad}%0A
                  *Fecha de Reserva*%0A
                  ${fecha}%0A
                  *Hora de Entrada*%0A
                  ${hora}%0A
                  *Paquete*%0A
                  ${modulos}%0A`;
          
            if (cliente === "" || edad === "" || fecha === "" || hora === "") {
              resp.classList.add("fail");
              resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
              return false;
            }
            resp.classList.remove("fail");
            resp.classList.add("send");
            resp.innerHTML = `Tu Reserva Fue Enviada, ${cliente}`;
          
            window.open(url);
          });
          
          //ALERTAS>
         
          
          function msj2() {
            Swal.fire({
            showCloseButton: true,
            icon: 'success',
            title: 'Webmaster',
            text: 'Link Copiado a Portapapeles',
            footer: 'CliconlineStudios'
            });
          
           
          };
    
    
        
/// nuevo share

const shareData = {
    title: 'Next Adventure WebMater ',
    text: 'Agencia de Viajes',
    url: 'https://nextadventureagenciadeviajes.blogspot.com'
  };
  
  
  // Share must be triggered by "user activation"

  function shareplus(){
    if (navigator.share) {
        navigator
       .share(shareData)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
        sharetj();
    }
 };


    document.addEventListener("DOMContentLoaded", function() {
        const tituloh = document.querySelector('.tituloh');
        tituloh.classList.add('start-animation');
    });


const scrollButton = document.getElementById("back");

window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight / 2) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

