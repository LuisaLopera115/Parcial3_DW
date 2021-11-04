


const mensaje = document.querySelector("#msg");
let textoActual = 0;
let frases = [
    "Sin embargo, aunque no podemos adivinar el mundo que será, bien podemos imaginar el que queremos que sea. El derecho de soñar no figura entre lostreinta derechos humanos que las Naciones Unidas proclamaron a fines de1948. Pero si no fuera por él, y por las aguas que da de beber, los demásderechos se morirían de sea",
    "La educación es algo admirable, pero es bueno recordar de cuando en cuando que nada de lo que merece la pena saber puede ser enseñado, Oscar Wilde.",
    "Cuando es verdadera, cuando nace de la necesidad de decir, a la voz humana no hay quien la pare. Si le niegan la boca, ella habla por las manos, o por losojos, o por los poros, o por donde sea, Eduardo Galeano.",
    " Nunca pensé que en la felicidad hubiera tanta tristeza, Mario Benedetti.",
    "Las cosas simples son las más extraordinarias y sólo los sabios consiguen verlas, Paulo Coelho."];

setInterval(PoneFrase, 3000);
function PoneFrase() {
    textoActual++;
    if (textoActual == frases.length) textoActual = 0;

    mensaje.innerHTML = frases[textoActual];
}
