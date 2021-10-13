module.exports.config = {
  name: "địt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hoàng 🥀",
  description: "Địt người bạn tag",
  commandCategory: "hình ảnh",
  usages: "địt [tag người bạn cần địt]",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs":""
  }
};

module.exports.run = function({
  api,
  event,
  args
}) {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa tag người bị địt !");
  else
  return request('https://nekos.life/api/v2/img/classic', (err, response, body) => {
    let picData = JSON.parse(body);
    var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + " Bị Anh Địt Đã Lồn Không Em 🥀",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000000) api.sendMessage("Muốn Dùng À Đâu Dễ 1m Nha Em Zai",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000000})
   var callback = () => api.sendMessage({body:`\n» Số dư: -1000000 đô «`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
        attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
  });
}