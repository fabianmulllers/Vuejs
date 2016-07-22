/**
 * Created by fabian on 13-07-16.
 */



var url = 'https://randomuser.me/api/?results=5';
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

alert(document.querySelector('#token').getAttribute('value'));
Vue.component('row-users',{

    template:'#row_users_tpl',
    props:['users'],

})


Vue.component('table-users',{

    template:'#table_users_tpl',
    props:['heads','users'],


});

Vue.component('notification-user',{

    template:'#notification_tpl',
    data:

        function(){

            return {

            }
        },
    created: function(){
        this.viewNotification();

    },

    methods:{
        viewNotification:function(){
            this.$http.get('https://randomuser.me/api/?results=5')
                .then(function(response){

                    console.log(response);

                });


        }
    }

});



vm= new Vue({

    el:'body',
    data:{

        heads:['id','name','correo'],


        users:[

            {
              id:'1',
              name:'fabian',
              correo:'hbkmayhem@hotmail.com'
            },
            {
                id:'2',
                name:'nicole',
                correo:'nicole.munoz@hotmail.com'
            },

            {
                id:'3',
                name:'jose',
                correo:'saavedra@hotmail.com'
            },

            {
                id:'4',
                name:'matias',
                correo:'matiasalex@hotmail.com'
            },


        ]
    }





})