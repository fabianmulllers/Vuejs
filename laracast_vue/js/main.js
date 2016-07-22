/**
 * Created by fabian on 16-07-16.
 */



Vue.component('tasks',{

    template:'#tasks_template',
    props:['list'],
    computed:{

        remaining:function(){

            return this.list.filter(this.InProgress).length;


        }


    },
    methods: {

        isCompleted: function (task) {

            return task.completed;
        },

        InProgress: function (task) {
            return !this.isCompleted(task);

        },
        deleteTask: function (task) {
            this.list.$remove(task);
        },
        clearCompleted: function () {
              this.list = this.list.filter(this.InProgress)

        }
    }

});

new Vue({

    el :'#app',

    data: {
        someThing :true,
        thing:'thingy',
        tasks:[
            {body:'Go to the store',completed:false},
            {body:'Go to the bank',completed:true},
            {body:'Go to the doctor',completed:true}

        ]
    },




  /*  methods:{

        toggleCompletedfor:function(task){

            task.completed=!task.completed;
        }

    }*/

});