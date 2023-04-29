import React, { useState } from 'react';
import Emoji from 'react-emoji-render';

const Emote = () => {
    const [emotion, setEmotion] = useState('');

    const handleEmotionClick = (emotion) => {
        setEmotion(emotion);
      };

  return (
    <div className="flex flex-col space-y-2 items-center mx-auto">
    <div className='flex flex-row  w-full items-center jsutify-between mx-auto'> 
        <Emoji
         text=":)" 
         className="w-16 h-16 cursor-pointer"
         onClick={() => handleEmotionClick('happy')}/>
        <Emoji
         text=":(" 
         className="w-16 h-16 cursor-pointer"
         onClick={() => handleEmotionClick('sad')}/>
        <Emoji
         text=":angry:" 
         className="w-16 h-16 cursor-pointer"
         onClick={() => handleEmotionClick('angry')}/>
          <Emoji
         text=":|" 
         className="w-16 h-16 cursor-pointer"
         onClick={() => handleEmotionClick('neutral')}/>
          <Emoji
         text=":o" 
         className="w-16 h-16 cursor-pointer"
         onClick={() => handleEmotionClick('surprised')}/>
    </div>
    <div className="text-center" >{emotion}</div>
  </div>
  )
}

export default Emote;         