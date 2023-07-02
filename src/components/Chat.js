import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { Button, TextField, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import ForumIcon from '@mui/icons-material/Forum';


const socket = io("http://localhost:3001");

export default function Chat() {
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  // Chating-box 스크롤 생길시 항상 최하단으로 유지하여 새로운 메시지 보이게함.
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    element.scrollTop = element.scrollHeight;

    // -> scroll 생기게 해주는 Wrapper Tag에 ref={scrollRef}를 넣어줌.
  }, [messages]);
  //

  const handleMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleSubmit = () => {
    if(userName) {
      if (inputValue.trim() !== "") {
        const currentTime = new Date().toLocaleString();
        socket.emit("message", {
          userName,
          content: inputValue,
          time: currentTime,
        });
        setInputValue("");
      }
    } else {
      alert('채팅 닉네임을 입력해주세요')
    }
  };

  useEffect(() => {
    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  return (
    <>
      {
        isOpen
        ?
        <div className="chat-wrapper">
        <div>
          <div className="chat-title-grp">
            <h3 className="chat-title">Movie Forum</h3>
            <IconButton aria-label="close" size="small" onClick={() => { setIsOpen(false) }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>
          <div>
            <TextField
              style={{marginBottom: '10px', width: '100%'}}
              id="standard-basic"
              label="채팅 닉네임"
              variant="standard"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <List className="chat-list" ref={scrollRef}>
            {
              messages.map((message, index) => {
                return (
                  <ListItem className="chat-list-item" key={index} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={message.userName} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText>
                      <p className="chat-name">{message.userName}</p>
                      <p className="chat-msg">{message.content}</p>
                      <p className="chat-date">{message.time}</p>
                    </ListItemText>
                  </ListItem>
                )
              })
            }
          </List>
          <div>
            <TextField
              style={{width: '100%'}}
              className="message-input-wrap"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              defaultValue="Default Value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <Button
              type="submit"
              size="small"
              variant="outlined"
              style={{ color: "#000", borderColor: "#000", marginTop: '5px', width: '100%' }}
              onClick={handleSubmit}
            >
              <SendIcon fontSize="small" />
            </Button>
          </div>
        </div>        
      </div>
      :
      <IconButton className="chat-open-icon-btn" aria-label="delete" size="large" onClick={() => { setIsOpen(true) }}>
        <ForumIcon fontSize="inherit" />
      </IconButton>
      }
    </>
  );
}
