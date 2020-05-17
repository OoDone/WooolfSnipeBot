const got = require('got');
module.exports.api = function (username) {
  got('https://api.hypixel.net/player?key=e4e148ec-6bfc-4f8c-b313-453ca5571472&name=' + username, { json: false }).then(response => {
    global.parsedjson = JSON.parse(response.body);
    console.log(username);
    global.username = username;
    global.losses = "gamesplayed: " + parsedjson['player']['stats']['Bedwars']['Games_played_bedwars_1'];
    console.log(global.losses);
  }).catch(error => {
    console.log("error "+error.response);
  });
  //callback(return global.bedwarslevel);
}
