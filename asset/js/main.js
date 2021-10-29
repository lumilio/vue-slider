

const app = new Vue({


    el: '#root',

    data: {
        addClass: 'red',
        name: 'ciao',
        surname: '',
        counter: 0,
    },

    methods: {
        changeColor(){
            if(this.addClass == 'red'){
                this.addClass = 'blu'
            }
            else{
                this.addClass = 'red' 
            }
        }
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



