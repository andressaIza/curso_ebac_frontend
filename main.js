$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    const novoItem = $('#tarefa').val();
    const novaTarefa = $('<li id="item"></li>');
    $(`<p id="nova-tarefa">${novoItem}</p>`).appendTo(novaTarefa);
    
    $(novaTarefa).appendTo('ul');
    $(novaTarefa).fadeIn(1000);
  })

  $('#nova-tarefa').click(function (){
    $('#nova-tarefa').css("text-decoration", "line-through");
  })
})