import { useEffect, useState } from "react";
import axios from "axios";
// css
import './styles.css'

const Messages = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [characterCount, setCharacterCount] = useState(0)
  const [post, setPost] = useState('')
  const [userId, setUserId] = useState()

  useEffect(() => {
    fetchMessages();
    whoWroteIt();
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

  const whoWroteIt = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/allusers/${user}`);

      setUserId(response.data[0].id)
      // console.log('HEREnow', userId)
    } catch(err) {
      console.log(err)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newMessage = {
      post: post,
      // THIS ISNT WORKING NEED HELP !!!!!!
      // user: userId
    }
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/addmessage/${user}`, newMessage);

      if(response.status === 200) {
        setPost('')
      }
      console.log("JDJFJFJFJFJ",user)
      fetchMessages()
      setCharacterCount(0)
    } catch(err) {
      console.log(err)
    }
  };

  // console.log("hey this is the current user", user)
  return (
    <div id='post'>
      <div id="message-board">
        {messages.map((message) => {
          return (
            <div className="ui comments" key={message.id}>
              <div className="comment">
                <div className="content">
                  <a className="author">{message.user.nickname}</a>
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
          <div className="field text">
            <label htmlFor="post">Type your message</label>
            <textarea 
              name="post" 
              type="text"
              value={post}
              onChange={e => setPost(e.target.value) & setCharacterCount(e.target.value.length)}
              rows="2"
            />
            <p>{characterCount}/200</p>
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
