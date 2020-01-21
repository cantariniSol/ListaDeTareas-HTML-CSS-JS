//Función autoinvocada.
(function(){
  //Variable
  var lista = document.getElementById("lista"),
  tareaInput = document.getElementById("tareaInput"),
  btnNuevaTarea = document.getElementById("btn-agregar");

  //FUNCIONES:
   var agregarTarea = function(){
       var tarea = tareaInput.value,
       nuevaTarea = document.createElement("li"),
       enlace = document.createElement("a"),
       contenido = document.createTextNode(tarea); 

       if (tarea == ""){
           tareaInput.setAttribute("placeholder", "¡Agregar una tarea valida!");
           tareaInput.className="error";
           return false;
       }
       //Agregamos el contenido al enlace
       enlace.appendChild(contenido);
       //Le atribuimos un atributo a href.
       enlace.setAttribute("href", "#");
       //Agregamos el enlace (a) a la nueva tarea (li)
       nuevaTarea.appendChild(enlace);
       //Agreamos la nueva tarea 
       lista.appendChild(nuevaTarea);
       tareaInput.value="";

       for(var i = 0; i < lista.children.length; i++ ){
           lista.children[i].addEventListener("click", function(){
               this.parentNode.removeChild(this); //(Cuando sea ele elementos sea clickeado ---> Este elementos que esta siendo trabajando, queremos acceder al elemento padre y luego removerlo dentro de la lista.
           });
       }
   };
   
   var comprobarInput= function(){
       tareaInput.className= "";
       tareaInput.setAttribute("placeholder", "Agrega una tarea ツ ");
       
   };
   var eliminarTarea = function(){
       this.parentNode.removeChild(this);
    
   };
  //EVENTOS:
  //Agregar Tarea:
  btnNuevaTarea.addEventListener("click",agregarTarea);
  
  //Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);

   //Borrando elementos a la lista.
  //Ciclo el cual: Accedemos a la lista,después accedemos a los elementos li y después los contamos y nos va a retornar un número
  for (var i = 0; i < lista.children.length ; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
}

}());