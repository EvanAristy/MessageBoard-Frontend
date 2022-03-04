import { useEffect, useState } from "react";
import axios from "axios";

const Messages = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [post, setPost] = useState('')

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/allmessages");

      console.log("messages", response);
      setMessages(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newMessage = {
      post: post
    }
    try {
      const response = await axios.post("http://localhost:8080/api/v1/addmessage", newMessage);

      if(response.status === 200) {
        setPost('')
      }

      fetchMessages()
    } catch(err) {
      console.log(err)
    }
  };
console.log("hey this is the current user", user)
  return (
    <div>
      <div id="message-board">
        {messages.map((message) => {
          return (
            <div className="ui comments" key={message.id}>
              <div className="comment">
                <div className="content">
                  <a className="author">{user}</a>
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
        <form className="ui reply form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="post">Type your message</label>
            <textarea 
              name="post" 
              type="text"
              value={post}
              onChange={e => setPost(e.target.value)}
              rows="2"
            />
          </div>
          <button className="ui primary submit labeled icon button" type="submit">
            <i className="icon edit"></i> Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
