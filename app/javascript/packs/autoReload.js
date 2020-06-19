$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="Messagebox">
          <div class="Messagebox__messageinfo">
            <div class="Messagebox__messageinfo__username">
              ${message.user_name}
            </div>
            <div class="Messagebox__messageinfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Messagebox__message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
    </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="Messagebox">
          <div class="Messagebox__messageinfo">
            <div class="Messagebox__messageinfo__username">
              ${message.user_name}
            </div>
            <div class="Messagebox__messageinfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Messagebox__message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.MessageBox:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Main__message').append(insertHTML);
        $('.Main__message').animate({ scrollTop: $('.Main__message')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
  setInterval(reloadMessages, 7000);
  }
});