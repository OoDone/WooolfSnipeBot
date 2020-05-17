const got = require('got');
module.exports.api = function (port, callback) {
  got("https://api.mcsrvstat.us/2/37.59.209.192:" + port, { json: false }).then(response => {
    global.parsedjson = JSON.parse(response.body);
    //console.log(port);
    global.port = port;
    global.isonline = parsedjson['online'];
    console.log(global.isonline + " " + parsedjson['port']);
    //console.log(response.body);
    //global.bedwarslevel = "Level: " + parsedjson['player']['achievements']['bedwars_level'];
    callback(null, global.isonline);
    //callback(null, global.fk);
  }).catch(error => {
    console.log("error: "+error.response);
  });
  //callback(return global.bedwarslevel);
}
