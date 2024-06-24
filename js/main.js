// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

//metodo del framework che ci permette di creare l'app Vue
const { createApp } = Vue;

//creazione istanza dell'app
createApp({
    data() {
        return {
            text: "Hey mondo, sono il titolo scritto tramite Vue!"
        }
    }
}).mount("#title")