function initDOM() {
  var result = {};

  result.app01 = criaVue('#app-01',{message:'Hello Vue!'});
  result.app02 = criaVue('#app-02',{message:'You loaded this page on '+ new Date()});
  result.app03 = criaVue('#app-03',{seen:true});
  result.app04 = criaVue('#app-04',{todos:[
    {text:'Learn JavaScript'},{text:'Learn Vue'},{text:'Build something awesome'}]});

  result.app05 = criaVue('#app-05',{message:'Hello Vue.js!'},
    {reverseMessage:function() { this.message = reverter(this.message); }
  });

  result.app06 = criaVue('#app-06',{message:'Hello Vue!'});

  Vue.component('todo-item',{props:['todo'], template:'<li>{{todo.text}}</li>'});
  result.app07 = criaVue('#app-07',{groceryList:[
    {text:'Vegetables'},{text:'Cheese'},{text:'Whatever else humans are supposed to eat'}]});

  result.app10 = criaVue('#app-10',{atributo:{style:'color:red;'}});

  return result;
}
