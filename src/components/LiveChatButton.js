
import React from 'react';
import CHAT_CDN from '../utlis/chat.png';
const LiveChatButton = () => {
  return (
    <div className="fixed bottom-4 right-4 cursor-pointer">
        <div  className="m-2 bg-white h-16 w-16 rounded-full shadow-xl flex items-center justify-center  hover:heartbeat">
                <img className='h-16 w-16 rounded-full ' alt='chat' src={CHAT_CDN}  />
        </div>
    </div>
  );
}

export default LiveChatButton;
