import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Adjust URL as needed

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chatMessage', (msg) => {
      setMessages([...messages, msg]);
    });

    return () => {
      socket.off('chatMessage');
    };
  }, [messages]);

  const sendMessage = () => {
    socket.emit('chatMessage', { room: 'chatRoom', message });
    setMessage('');
  };

  return (
    <div className="chat-container h-screen ">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
};

export default Chat;
