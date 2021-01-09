var myModule =  (function(){
   var _name = 'Soikat';
   return {
       setName: function(newName) {
        _name = newName;
       },
       sayName: function() {
        alert(_name);
       },
       getName: function() {
           return _name;
       }
   }
})()

Object.freeze(myModule);

