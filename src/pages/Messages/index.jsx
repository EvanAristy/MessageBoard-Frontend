import { useEffect, useState } from "react";
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/allmessages"
      );

      console.log(response);
      setMessages(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div id="message-board">
        {messages.map((message) => {
          return (
            <div className="ui comments" key={message.id}>
              <div className="comment">
                <div className="content">
                  <a className="author">{message.user}</a>
                  <div className="metadata">
                    <div className="date">{message.date}</div>
                    <div className="rating">
                      <i className="star icon"></i>5 Faves
                    </div>
                  </div>
                  <div className="text">{message.post}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div id="key-board">
        <form className="ui reply form">
          <div className="field">
            <textarea></textarea>
          </div>
          <button className="ui primary submit labeled icon button">
            <i className="icon edit"></i> Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
