// ChatBotModal.jsx
import React from 'react';
import Modal from 'react-modal';
import { TbMessageChatbot } from 'react-icons/tb';
import logo from "/logo.png"
import { BiSolidSend } from "react-icons/bi"

const ChatBotModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Chatbot Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
      <img src={logo} alt="" />
        <button onClick={onRequestClose}>&times;</button>
      </div>
      <div className="modal-body">



        {/* Add your chatbot content here */}
        <div className='ai-message'>

       
        <p>Hello and welcome to FyreWrap Assistance! I'm your dedicated FyreWrap Agent, ready to help with all your needs. please share your name and email. Whether it's about product details, installation guidance, compliance with fire safety codes, quote or any other inquiries regarding FyreWrap, I'm here to assist. How can I help you today?</p>
         </div>

         <div className="type-area">
<input type="text" placeholder='Message...' />
<BiSolidSend className='cursor-pointer text-xl text-text-gray'/>
         </div>
      </div>
    </Modal>
  );
};

export default ChatBotModal;
