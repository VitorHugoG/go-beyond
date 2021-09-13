const fields =  document.querySelectorAll('[required]')
const confirm = document.querySelector("#confirm-container")
const form = document.querySelector("#newsletter-container")

function ValidateField(field){
    //lógica para verificar se existem erros
    function verifyErrors(){
        let foundError = false;
  
        for(const error in field.validity){
           if(field.validity[error] && !field.validity.valid){
               foundError = error
           }
        }
        return foundError;
    }

    function customMessage(typeError){
        const messages = {
            text: {
                valueMissing : "Preencha com  seu nome completo"
            },
            email: {
                valueMissing : "Preencha com um email válido",
                typeMismatch: ""
            }
        }

        return messages[field.type][typeError]
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
    const error = verifyErrors()
   

    if(error){
       const message = customMessage(error)
       field.style.borderColor = "red"  
       setCustomMessage(message)
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
  
  //só pra testar
  const error = ValidateField(field)
  console.log("Error Exist " + error)

 
}


for(const field of fields){
    field.addEventListener('invalid', event => {
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}



document.querySelector('form').addEventListener('submit',event => {
    event.preventDefault();
    form.style.display = "none"
    confirm.style.display = "flex";
})


