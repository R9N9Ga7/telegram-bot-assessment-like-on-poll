const { TOKEN, CHAT_ID } = require('./token');
const { Telegraf } = require('telegraf');

const bot = new Telegraf(TOKEN);

bot.on('photo', async (ctx) => {
  await ctx.telegram.sendPhoto(CHAT_ID, ctx.message.photo[2].file_id);

  await ctx.telegram.sendPoll(
    CHAT_ID,
    `From: ${ctx.message.from.first_name}.\n\nLike it?`,
    ['Like', 'Dislike', 'See answer'],
  );
  await ctx.deleteMessage();
});

bot.on('text', (ctx) => {
  ctx.deleteMessage();
});

bot.on('sticker', (ctx) => {
  ctx.deleteMessage();
});

bot.launch();
