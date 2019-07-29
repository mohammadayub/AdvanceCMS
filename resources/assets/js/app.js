
require('./bootstrap');

window.Vue = require('vue');

import Buefy from 'Buefy'

Vue.use(Buefy);

var app= new Vue({
    el:'#app',
    data:{}
})

$(document).ready(function(){
    $('button.dropdown').hover(function(e){
        $(this).toggleClass('is-open');

    });
});



