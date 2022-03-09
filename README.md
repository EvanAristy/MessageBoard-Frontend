

===== Wire Frame =====

![ScreenShot](/src/components/images/wireFrame1.png)
![ScreenShot](/src/components/images/wireFrame2.png)
![ScreenShot](/src/components/images/wireFrame3.png)
![ScreenShot](/src/components/images/wireFrame4.png)


===== End Points =====

base:                         |        |   /api/v1

search all users:             | GET    |   /allusers 
search user by id:            | GET    |  /user/{id}
search user by username:      | GET    |  /alluser{nickname}
create new user:              | POST   |  /adduser
edit user:                    | PUT    |  /user/{id}
delete user:                  | DELETE |  /user/{id}

search all messages:          | GET    |   /allmessages 
search message by id:         | GET    |  /message/{id}
create new message:           | POST   |  /addmessages/{username}
edit message:                 | PUT    |  /message/{id}
delete message:               | DELETE |  /message/{id}

