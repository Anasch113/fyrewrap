import React, { useState } from 'react';
import "./chatbotbtn.css"
import { TbMessageChatbot } from "react-icons/tb";
import { Link } from 'react-scroll';
import Modal from 'react-modal';
import ChatBotModal from './ChatBotModal';
import { FaChevronDown } from "react-icons/fa";



const ChatBotBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="chat-button">
      {
        isModalOpen ? <button  onClick={closeModal}><FaChevronDown/></button> :
        <button  onClick={openModal}><TbMessageChatbot /></button>
      }

 <ChatBotModal isOpen={isModalOpen} onRequestClose={closeModal} />
  </div>
  )
}

export default ChatBotBtn
