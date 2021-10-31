
const app = new Vue({

    el: '#root',

    data: {

        active: 0,
        /* addClass: 'choice',     -------------- inutile? */  

        paesi: [
            {
                nome: 'Svezia',
                foto: 'img/01.jpg',
                testo: 'Loreit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                nome: 'Svizzera',
                foto: 'img/02.jpg',
                testo: 'Lorem ipsum, dolor sit amectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                nome: 'Gran Bretagna',
                foto: 'img/03.jpg',
                testo: 'Lorbus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                nome: 'Germania',
                foto: 'img/04.jpg',
                testo: 'Lorem ipsum, dolor sit amet conseetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                nome: 'Paradise',
                foto: 'img/05.jpg',
                testo: 'Lorem voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
        ]

    },




    methods: {
        
        
        
        swipeUp(){
            if (this.active > 0) {--this.active;}
            else if (this.active == 0) {this.active = this.paesi.length -1;}
        },
        swipeDown(){
            if (this.active < this.paesi.length -1) {++this.active;}
            else if (this.active == this.paesi.length -1) {this.active = 0;}
        },

        swipeAuto(){
            setInterval(() => {
                if (this.active < this.paesi.length -1) {++this.active;}
                else if (this.active == this.paesi.length -1) { this.active = 0;}
            }, 1000)      
        },  
    },




})





/* 
v-model:
stampa i value di elementi
input e output,


v-bind:
ci permette di inserire una variabile
all’interno di un attributo di un tag.
----- v-bind:class=... = :class=... -----


v-on:
----- v-on:click=... = @click=... -----
 */






  