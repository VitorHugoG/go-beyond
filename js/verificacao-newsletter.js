const fields =  document.querySelectorAll('[required]')



function ValidateField(field){
    function verifyErrors(){
        let foundError = false;
  
        for(const error in field.validity){
           if(field.validity[error] && !field.validity.valid){
               foundError = error
           }
        }
        return foundError;
    }

    function setCustomMessage (message){
        const spanError = field.parentNode.querySelector('span.error')
  
        if(message){
            spanError.classList.add("active-error");
            spanError.innerHTML = message;
        }else{
            spanError.classList.remove("active-error");
            spanError.innerHTML = ""
        }
       
    }

   return () =>{
    if(verifyErrors()){
       field.style.borderColor = "red"  
       setCustomMessage("Campo Obrigatório")
    }else{
       field.style.borderColor = "green"  
       setCustomMessage()
    }
   }  
}


function customValidation(event){
  const field = event.target
  const validation = ValidateField(field)

  validation()
  //lógica para verificar se existem erros

  

  const error = ValidateField(field)
  console.log("Error Exist " + error)

  //trocar mensagem de required

 
}


for(const field of fields){
    field.addEventListener('invalid', event => {
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}


document.querySelector('form').addEventListener('submit',event => {
    

   
})