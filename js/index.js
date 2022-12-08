function sendMessage(event) {
    if (event.keyCode == 13) {
        let mess = document.querySelector('div.chat-detail__input input').value;
        document.querySelector('div.chat-detail__input input').value = '';
        if (mess.trim() === '') {
            return;
        }
        document.querySelector('div.chat-detail__messages').innerHTML = document.querySelector('div.chat-detail__messages').innerHTML +
            `<div class="message me">
                <div class="message__detail">
                    <div class="message__detail__inline">
                    ${mess}
                    </div>
                </div> 
            </div>`;
    }
}