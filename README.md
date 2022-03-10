===== Deploy Links =====

Having major problems with Heroku. Will figure it out to deploy


===== Wire Frame =====

![ScreenShot](/src/components/images/wireFrame1.png)
![ScreenShot](/src/components/images/wireFrame2.png)
![ScreenShot](/src/components/images/wireFrame3.png)
![ScreenShot](/src/components/images/wireFrame4.png)


===== End Points =====

base: /api/v1

(GET)search all users: /allusers <br>
(GET)search user by id: /user/{id} <br>
(GET)search user by username: /alluser{nickname} <br>
(POST)create new user: /adduser <br>
(PUT)edit user: /user/{id} <br>
(DELETE)delete user: /user/{id} <br>
<br>
(GET)search all messages: /allmessages <br>
(GET)search message by id: /message/{id} <br>
(POST)create new message: /addmessages/{username} <br>
(PUT)edit message: /message/{id} <br>
(DELETE)delete message: /message/{id} <br>


===== App =====

Meant to be a messaging app to chat with friends.

JavaScript
React
Java - Backend
Spring - Backend
Html
Css
Semantic Ui - Css Framework


===== Problems =====

Figured out a way to automatically scroll to the last message on display in message board, but it started acting buggy so I left it out. Still trying to figure that out. 

Used UserContext.Provider to imitate user log-in. Would like to go back and add authentication.

Few minor changes I'd like to go back and make.