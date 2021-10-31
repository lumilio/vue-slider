
const app = new Vue({

    el: '#root',

    data: {

        active: 0,
        /* addClass: 'choice',     -------------- inutile? */  
        buttonClass: "start",
        buttonText: "START",
        clicked: false,

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
        
        
        
        swipeUp: function () {
            if (app.active > 0) {--app.active;}
            else if (app.active == 0) {app.active = app.paesi.length -1;}
        },
        swipeDown: function () {
            if (app.active < app.paesi.length -1) {++app.active;}
            else if (app.active == app.paesi.length -1) {app.active = 0;}
        },




        swipeAuto: function() {
            
            if (app.clicked == false) {
                app.clicked = true;
                app.buttonClass = "stop"
                app.buttonText = "STOP"
            } else {
                app.clicked = false
                app.buttonClass = "start"
                app.buttonText = "START"
            }
        
            let clock = setInterval(function () {
                if (app.clicked == true) {

                    app.active++
                    if (app.active == app.paesi.length) {
                        app.active = 0;
                    } else if (app.active < 0) {
                        app.active = app.paesi.length;
                    }


                } else {
                    clearInterval(clock)
                }


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






  