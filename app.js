let nombre = document.getElementById("name");
let pass = document.getElementById("password")

let validacion = [
    {
        "nombre": "Daniel",
        "pass": "123456D"
    },
    { 
        "nombre": "Alberto",
        "pass": "123456A"
    },
    {   
        "nombre": "Jose",
        "pass": "123456J"
    },
    {
        "nombre": "Gaizka",
        "pass": "123456G"
    }
        ];

    document.getElementsByTagName("form")[0].addEventListener("submit", function validar(e) {
        e.preventDefault();
       let resultado =  validacion.filter((objeto,index) => {
            if (objeto.nombre == nombre.value && objeto.pass == pass.value ) {
                return objeto
            }
        }); 
        if(resultado.length !==0){
            alert("todo guay");
        } else {
            alert("pass incorrecta");
        }
    })