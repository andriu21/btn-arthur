// let mensaje = document.querySelectorAll(".mensaje-content");
let mensajeContent =  document.querySelectorAll(".contenido-msg");
let mensajeContentP = document.querySelectorAll(".contenido-msg p");
let btnMsg = document.getElementById("enviar-msg");
let Msg = document.querySelector("#mensaje");
const containerMsg = document.querySelector(".user__messeger-entrada");
let deletemensaje = document.querySelectorAll(".delete-msg");
let textMsg = document.getElementById("mensaje");
let write = document.getElementById("write-user");





mensajeContent.forEach(e=>{
      e.addEventListener("click",()=>{
            let bajar = document.querySelectorAll(".bajar");
            
            bajar.forEach(e=>{
                  if(mensajeContentP.length <= 80 && window.outerWidth <= 820){
                        e.style.display = "inline-block";
                  }else{
                        e.style.display = "none";
                  };
            });

      });
});

class UIMSG{
      createMsg(){
            let div = document.createElement("DIV");
            const containerMsg = document.querySelector(".user__messeger-entrada");
            let fragmento = document.createDocumentFragment();

            div.setAttribute("class","mensaje-content");
            div.innerHTML = `
               <div class="contenido-msg">
                  <p>${Msg.value}</p>
              </div>

             <div class="container-visto">
                   <i class="fas fa-check"></i>
                   <i class="fas fa-check"></i>
                   <i class="bajar fas fa-arrow-down"></i>
             </div>

             <div class="delete-msg"></div>
            `;

            fragmento.appendChild(div);
            containerMsg.appendChild(fragmento);

            document.querySelector(".form-messenger").reset();
      
            
            
      }

      deleteMsg(e){
        if(e.className === "delete-msg"){
                  e.parentElement.remove();
            }
      }

      
}

btnMsg.addEventListener("click",(e)=>{
      e.preventDefault();
   let uis = new UIMSG ();
   uis.createMsg();
   write.classList.remove("active");
});


containerMsg.addEventListener("dblclick",(e)=>{
      let uis = new UIMSG ();
      uis.deleteMsg(e.target);
})


textMsg.addEventListener("keydown",(e)=>{
     if(textMsg.value.length >= 2){ 
         write.classList.add("active");
     }else{
        write.classList.remove("active");
     }
})