const input = document.querySelector(".input__palindromo");
const btn = document.querySelector(".botao__palindromo");
const body = document.querySelector(".body")

//function verificaPalindromo (palavra) {

   // var letrasSeparadas = palavra.split("");
   // var letrasInvertidas = palavra.reverse();
   // var palavraInvertida = letrasInvertidas.join("");

  // console.log(palavraInvertida);

//}

btn.addEventListener("click", e =>{
    e.preventDefault();

    var palavra = input.value;
    var letrasSeparadas = palavra.split("");
    var palavraInvertida = letrasSeparadas.reverse();
    var palavraFinal = palavraInvertida.join("");
    
    console.log(palavraFinal);

    if(palavraFinal == palavra) {
        body.innerHTML = ` <form>
        <input class="input__palindromo" type="text">
        <button class="botao__palindromo">"Checar se é palíndromo"</button>
    </form> 

    <h3> A palavra ${palavra} é um palíndromo! </h3>

    <script src="./main.js"></script>`



    } else{


        body.innerHTML = ` <form>
        <input class="input__palindromo" type="text">
        <button class="botao__palindromo">"Checar se é palíndromo"</button>
         </form> 

        <h3> A palavra ${palavra} não é um palíndromo! </h3>

        <script src="./main.js"></script>`



    }

})

