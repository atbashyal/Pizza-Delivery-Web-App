// const { Telegraf } = require("telegraf");
// const TOKEN = "6427106889:AAGQ2UQt0alU36gTdAn7-YkTBlFo3qD1YZ4";
// const bot = new Telegraf(TOKEN);

// const web_link = "https://eclectic-florentine-06673d.netlify.app/";

// const sendImageToChat = (ctx) => {
//   ctx.replyWithPhoto({ source: qrscanImage });
// };

// bot.start((ctx) =>
//   ctx.reply("Welcome.", {
//     reply_markup: {
//       keyboard: [[{ text: "Click here to check pizzas out", web_app: { url: web_link } }]],
//     },
//   })
// );

// bot.launch();

// import qrscan from "./Components/images/assets/qe"
const { Telegraf } = require("telegraf");
const TOKEN = "6427106889:AAGQ2UQt0alU36gTdAn7-YkTBlFo3qD1YZ4";
const bot = new Telegraf(TOKEN);

const web_link = "https://eclectic-florentine-06673d.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome.", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Click here to check pizzas out",
            web_app: { url: web_link },
          },
        ],
      ],
    },
  })
);

bot.command("pay", (ctx) => {
  // Assuming qrscan.png is located in the same directory as bot.js
  const imageFilePath = __dirname + "/qrscan.png";

  // Send the image to the chat
  ctx.replyWithPhoto({ source: imageFilePath });
});

bot.launch();
