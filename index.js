require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('');
});
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
const bot = new TelegramBot(token, {polling: true});
//стартовые кнопки
bot.onText(/\/start/, function(msg, match) {
const button = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        keyboard: [
            ['help'],
            ['sch']
        ],
        resize_keyboard: true
    })
 };
    bot.sendMessage(msg.from.id, `Hello ${msg.from.first_name} ${msg.from.last_name}`, button);
});
//помощь то рау
    bot.onText(/help/, function(msg, match) {
        const fromId = msg.from.id;
        bot.sendMessage(fromId, `Чтобы получить билет просто напиши /pay "номер Автобуса"`);
        });
    
    bot.onText(/sch/, function(msg, match) {
        const chatId = msg.chat.id;
        const button = {
            reply_markup: JSON.stringify ({
                inline_keyboard: [
                    [{
                        text: 'Понидельник',
                        callback_data: 'mon'
                        
                    },
                    {
                        text: 'Вторник',
                        callback_data: 'tue'
                        
                    },
                    {
                        text: 'Среда',
                        callback_data: 'wed'
                        
                    },                        {
                        text: 'Четверг',
                        callback_data:  'thu'
                    
                    },                        {
                        text: 'Пятница',
                        callback_data: 'fri'
                        
                    },                        {
                        text: 'Субота',
                        callback_data: 'sat'
                        
                    }
                ]
            ]
        })
    }
});
        bot.sendMessage(chatId, `Укажите день недели`, button);

        bot.onText(/mon/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, `Два Урока у пидараза в 8 утра`);
            });

            bot.onText(/tue/, function(msg, match) {
                const fromId = msg.from.id;
                bot.sendMessage(fromId, `Два Урока у пидараза в 8 утра`);
                });
                
                bot.onText(/wed/, function(msg, match) {
                    const fromId = msg.from.id;
                    bot.sendMessage(fromId, `Два Урока у пидараза в 8 утра`);
                    });

                    bot.onText(/thu/, function(msg, match) {
                        const fromId = msg.from.id;
                        bot.sendMessage(fromId, `Два Урока у пидараза в 8 утра`);
                        });

                        bot.onText(/fri/, function(msg, match) {
                            const fromId = msg.from.id;
                            bot.sendMessage(fromId, `Два Урока у пидараза в 8 утра`);
                            });

                            bot.onText(/sat/, function(msg, match) {
                                const fromId = msg.from.id;
                                bot.sendMessage(fromId, `Два Урока у пидараза в 8 утра`);
                                });
                
//оплата за проезд
bot.onText(/pay (.+)/, function(msg, match) {
    const fromId = msg.from.id;
    const resp = match[1];
    const randomFirst = Math.floor(1000 + Math.random() * 9000);
    const randomSecond = Math.floor(1000 + Math.random() * 9000);
    const curTime = new Date();
    curTime.setSeconds(curTime.getSeconds() + 21600);

    bot.sendMessage(fromId,
`БИЛЕТ: ${randomFirst}:38:${randomSecond}
СУММА: 90 ТГ.
Дата: ${curTime}
Транспорт: ${resp}
ТЕЛ: 77769097977
ТРАНЗАКЦИЯ: 33853${randomSecond}
ТОО АСТАНА LRT
https://smsbus.kz/cd.jsp?id=${randomFirst}38${randomSecond}`);
    });
 
// bot.onText(/\/оплата (.+)/, function(msg, match) {
//          const fromId = msg.from.id;
//          const resp = match[1];
//          const randomFirst = Math.floor(1000 + Math.random() * 9000);
//          const randomSecond = Math.floor(1000 + Math.random() * 9000);
//          const curTime = new Date();
//          curTime.setSeconds(curTime.getSeconds() + 21600);

//          bot.sendMessage(fromId,
// `БИЛЕТ: ${randomFirst}:38:${randomSecond}
// СУММА: 90 ТГ.
// Дата: ${curTime}
// Транспорт: ${resp}
// ТЕЛ: 77769097977
// ТРАНЗАКЦИЯ: 33853${randomSecond}
// ТОО АСТАНА LRT
// https://smsbus.kz/cd.jsp?id=${randomFirst}38${randomSecond}`);
//          });