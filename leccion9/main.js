/**
 * Created by fabian on 12-07-16.
 */

function findById(items,id){


    for( var i in items){
        if(items[i].id == id){
         return items[i];
        }
    }

    return null;


}

Vue.component('select-category',{

   template:'#select_category_tpl',
   props:['categories','id'],
});


Vue.component('note-row',{

    template:'#note_row_tpl',
    props:['note','categories'],
    data:function(){
        return{
            editing:false
        }

    },
    methods:{
        remove:function(){
            this.$parent.notes.$remove(this.note);

        },
        edit: function(){
            // note.editing=true;
            // Vue.set(note,'editing',true);
            this.editing= true;

        },
        update: function(){
            // note.editing=false;
            this.editing= false;



        }


    },

});

Vue.filter('category',function(id){

        var category = findById(this.categories,id);

        return category != null  ? category.name : '';


});




    var vm =new Vue({

        el:'body',
        data:{
            new_note:{
                note:'',
                category_id:''
            },
            notes:[

                {
                    note:'Laravel 5.1 es LTS',
                    category_id:1,

                },

                {
                    note:'Este es el cuso de vue js esperemos que sirva de mucho',
                    category_id:2,


                },
                {
                    note:'v-for es la directia que utilizamos para iterar una lista',
                    category_id:3,
                },
                {
                    note:'registrate hoy en ',
                    category_id:4,


                }

            ],


          categories:[

              {
                  id:1,
                  name:'Laravel'
              },
              {
                  id:2,
                  name:'curso entretenido'
              },
              {
                  id:3,
                  name:'v for'
              },
              {
                  id:4,
                  name:'registro'
              },

          ]

        },

        filters: {

            },
        methods:{

            createNote:function(){
                this.notes.push(this.new_note);
                this.new_note={note:'',category_id:''};
            }




        }



    })