import { useEffect, useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {

  const [message, setMessage] = useState("");
  const inputRef = useRef();
  const {loading, sendMessage} = useSendMessage();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage("");
    
  };

  useEffect(() => {
    inputRef?.current.focus();
  });
  
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          ref={inputRef}
        />
        <button
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          type="submit"
        >
          {
            loading ? <span className="loading loading-spinner"></span> : <BsSend />
          }
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
