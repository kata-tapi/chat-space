$(function(){
  function buildHTML(message) {
    var image = message.image ? `<img class="chat_middle__box__message_image" src=${message.image}>` : "";

    var html = `<div class="chat_middle__box" data-message-id=${message.id}>
                  <div class="chat_middle__box__info">
                    <div class="chat_middle__box__info_name">
                      ${message.user_name}
                    </div>
                    <div class="chat_middle__box__info_date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="chat_middle__box__message">
                    <div class="chat_middle__box__message_content">
                      ${message.content}
                      ${image}
                    </div>
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url, 
      type: 'POST', 
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html =  buildHTML(message);
      $('.chat_middle').append(html)
      $('.chat_middle').animate({ scrollTop: $('.chat_middle')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('.chat_bottom_submit').prop('disabled', false);
  })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.chat_bottom_submit').prop('disabled', false);
  });
});

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
    last_message_id = $('.chat_middle__box:last').data('message-id');
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      $('.chat_middle').append(insertHTML);
      $('.chat_middle').animate({ scrollTop: $('.chat_middle')[0].scrollHeight});
      });      
    })
    
    .fail(function() {
      alert('自動更新に失敗しました');
    });
  }
  };
  setInterval(reloadMessages, 4000);
});