var stats = (function(){

    var people = 0;
    var $stats = $('#statsModule');
    var template = $('#stats-template').html();

    events.on('peopleChange', setPeople)

    //_render()

    function _render(){
        $stats.html(Mustache.render(template, {people: people}))
    }

    function setPeople(newPeople){
        people = newPeople
        _render();
    }

    function destroy(){
        $stats.remove();
        events.off('peopleChange', setPeople);
    }

    return {
        destroy: destroy
    }

})()