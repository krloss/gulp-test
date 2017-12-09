function initDOM() {
  var result = {};

  result.app01 = new Vue({el:'#app-01', data:{message:'Hello Vue!'}});
  result.app02 = new Vue({el:'#app-02', data:{message:'You loaded this page on '+ new Date()}});
  result.app03 = new Vue({el:'#app-03', data:{seen:true}});
  result.app04 = new Vue({el:'#app-04', data:{todos:[
    {text:'Learn JavaScript'},{text:'Learn Vue'},{text:'Build something awesome'}]}});

  result.app05 = new Vue({el:'#app-05',data:{message:'Hello Vue.js!'},
    methods:{reverseMessage:function() {
      this.message = this.message.split('').reverse().join('');
    }
  }});

  result.app06 = new Vue({el:'#app-06', data:{message:'Hello Vue!'}});

  Vue.component('todo-item',{props:['todo'], template:'<li>{{todo.text}}</li>'});
  result.app07 = new Vue({el:'#app-07', data:{groceryList:[
    {text:'Vegetables'},{text:'Cheese'},{text:'Whatever else humans are supposed to eat'}]}});

  result.app10 = new Vue({el:'#app-10', data:{atributo:{style:'color:red;'}}});

  return result;
}
