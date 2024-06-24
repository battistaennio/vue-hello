// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

//metodo del framework che ci permette di creare l'app Vue
const { createApp } = Vue;

//creazione istanza dell'app
createApp({
    data() {
        return {
            //testo da inserire nel titolo
            text: "Hey mondo, sono il titolo scritto tramite Vue!",

            //percorso da inserire in src 
            percorsoImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png",
            descrizioneAlt: "immagine Vue"
        }
    }
}).mount("#title")
