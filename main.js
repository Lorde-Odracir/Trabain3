$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    const novoItem = $('<li></li>');
    $(`<div id="line">${novaTarefa}</div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul')

    $('li').click(function() {
        $(this).css('text-decoration', 'line-through');
    })    
})




