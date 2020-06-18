$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Messagebox">
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
      `<div class="Messagebox">
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
  $('.Main__form__input').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Main__message').append(html);      
      $('.Main__form__input')[0].reset();
      $('.Main__message').animate({ scrollTop: $('.Main__message')[0].scrollHeight});
      // $(".Main__form__input__submit-btn").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function() {
      $(".Main__form__input__submit-btn").prop("disabled", false);
    })
  });
});