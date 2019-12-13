$(function(){
  function buildHTML(message){
    if (message.image) {
      var html = `<div class="chat_middle__box">
                    <div class="chat_middle__box__info">
                      <div class="chat_middle__box__info_name">
                        ${message.user}
                      </div>
                      <div class="chat_middle__box__info_date">
                        ${message.date}
                      </div>
                    </div>
                    <div class="chat_middle__box__message">
                      <div class="chat_middle__box__message_content">
                        ${message.text}
                        <img class="chat_middle__box__message_image" src="${message.image}">
                      </div>
                    </div>
                  </div>`
    } else {
      var html = `<div class="chat_middle__box">
                    <div class="chat_middle__box__info">
                      <div class="chat_middle__box__info_name">
                        ${message.user}
                      </div>
                      <div class="chat_middle__box__info_date">
                        ${message.date}
                      </div>
                    </div>
                    <div class="chat_middle__box__message">
                      <div class="chat_middle__box__message_content">
                        ${message.text}
                      </div>
                    </div>
                  </div>`
    }
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
      $('.chat_bottom_send').prop('disabled', false);
  })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.chat_bottom_send').prop('disabled', false);
  })
  })
})

