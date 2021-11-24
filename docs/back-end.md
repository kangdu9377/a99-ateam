# Back-End Planning

## User Database
Users can:
- create profile
- update profile
- delete profile

Required Infomation:
- Username
- Email Address
- Password

Optional Information collected:
- Full Name
- UNC Year
- Major

Can be changed:
- Username (must have old username and password)
- Email (must have username and password)
- Optional Info (must have username and password)

## Game Database
Users can press a button to add themselves to the database of high scorers after every game. This could replace a previous high score so each person only has one or it could just continue to add your name like in a video game. 


## Pressing Issues
- How to see data from XML GET requests
  - look at his examples from A04 to see how he got it to the console and adapt
- use form to stay logged in and have a sign in / sign out w global var
  - will need global vars for username and boolean of logged in or not