const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        console.log("Message sent");
    };
});

// Add a sample received message
const receivedMessage = document.createElement('div');
receivedMessage.classList.add('message', 'received');
receivedMessage.textContent = 'Hello!';
chatMessages.appendChild(receivedMessage);