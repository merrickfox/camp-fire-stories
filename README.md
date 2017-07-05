`npm install`
then `node ./server/server.js` from root directory

visit `localhost:8080/camp.html`

This project needs to run over https for webRTC to transmit audio, I've committed a throwaway self signed cert and key
for ease of getting dev env going, you may need to trust this cert on your machine and/or push through any trust
 errors the browser throws at you.