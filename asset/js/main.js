
const app = new Vue({

    el: '#root',

    data: {

        acrtive: 0,
        selected: 0,
        
        paesi: [
            {
                nome: 'Svezia',
                foto: 'img/01.jpg',
                testo: 'Lorem ipsum, dolor sit amet consecteEt temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                nome: 'Svizzera',
                foto: 'img/02.jpg',
                testo: 'Lorem ipsum, dolor sit amectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                nome: 'Gran Bretagna',
                foto: 'img/03.jpg',
                testo: 'Lorem ipsum, dolor sit amet csectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                nome: 'Germania',
                foto: 'img/04.jpg',
                testo: 'Lorem ipsum, dolor sit amet conseetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                nome: 'Paradise',
                foto: 'img/05.jpg',
                testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
        ]

    },

    methods: {
        
        swipeUp(){
            if (position > 0){
                --position;
            }
            else if (position == 0){                                             //--------------------------------bonus
                position = items.length -1;
            }
            
            document.querySelector('.lil-photo.choice').classList.remove('choice');
            document.getElementsByClassName('lil-photo')[position].classList.add('choice');
        
            document.querySelector('.big-photo.choice').classList.remove('choice');
            document.getElementsByClassName('big-photo')[position].classList.add('choice');
        },

        swipeDown(){
            if (position < items.length -1){
                ++position;
            }
            else if (position == items.length -1){                                  //--------------------------------bonus
                position = 0;
            }
            document.querySelector('.lil-photo.choice').classList.remove('choice');
            document.getElementsByClassName('lil-photo')[position].classList.add('choice');
        
            document.querySelector('.big-photo.choice').classList.remove('choice');
            document.getElementsByClassName('big-photo')[position].classList.add('choice');
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






  