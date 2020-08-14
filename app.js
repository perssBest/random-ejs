const express = require('express');
const app = express();

app.use(express.static("source"));
app.set('view engine','ejs')

const titles = ["Привет", "Пока", "Чем я занимаюсь..", "fuck.", "im freak"]
const description = ["Блин это же очередная параша от реди..", "Ну это описание, что дальше?", "Тут текст пока не придумал но когда нибудь точно придумаю!", "Люблю кушать.. Щяс бы дошик..", "Закажите мне дошик плиз :c"]
const emojis = [ "( ͡° ͜ʖ ͡°)", "ヽ༼ຈل͜ຈ༽ﾉ", "ಠ_ಠ", "இдஇ", "(≧▽≦)", "(´_ゝ`)", " (´• ل •`)", "ʕ•ᴥ•ʔ", "ᶘᵒᴥᵒᶅ", "凸-_-凸", "(ㆁωㆁ*)", " (•ө•)♡", "(/◕ヮ◕)/", "(^_^.)", "(◉ω◉)", "^오^", "(*´∀｀)", "٩(♡ε♡ )۶", "(๑•̀ㅂ•́)ﻭ✧", "(✿◠‿◠)", "(^o^)", "(｡>﹏<｡)", "༼ಢ_ಢ༽", "→_→", "(๑´•.̫ • `๑)", "(・へ・)", "(~_~メ)", "(ಥ﹏ಥ)"];

const random = (obj) => obj[Math.floor(Math.random() * obj.length)]

app.get('/', (req, res) => {
    res.render('index', {
        image: " ", // тут впринцепе тоже можете сделать рандом картинков oWo
        title: random(titles),
        description: random(description),
        main: random(emojis)
    })
})

app.listen();