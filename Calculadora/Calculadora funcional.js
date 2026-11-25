let pantalla=document.querySelector("#pantalla");

let boton=document.querySelectorAll("button");

let operador="";
let primerNumero="";

for (let i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click",function(){
        let valor=this.textContent;
        if(valor === "="){
            let numero1=Number(primerNumero);
            let numero2=Number(pantalla.value);
            let resultado;

            switch (operador) {
                case "+":
                    resultado=numero1+numero2;
                    break;

                case"-":
                    resultado=numero1-numero2;
                    break;

                case"*":
                    resultado=numero1*numero2;
                    break;

                case"/":
                    resultado=numero1/numero2;
                    break;

                default:
                    break;
            }
             pantalla.value=resultado;
        }
        else if(valor === "C"){
            pantalla.value = "";
        }
        else if (isNaN(valor)) {
            primerNumero=pantalla.value;
            operador=valor;
            pantalla.value="";
        }else{
            pantalla.value+=valor;
        }
    });
}

