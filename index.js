const fs = require('fs')
const express = require('express')
const app = express();
const path = require(`path`);
const html = require("html");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001
app.use(express.static('public'))
//console.log(data)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//
app.set('view engine', "ejs")
app.set('views', path.join(__dirname, './views'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

//segidor de archivos
app.use(express.static(path.join(__dirname, "./views/assets/css")));
app.use(express.static(path.join(__dirname, "./views/assets/js")));
app.use(express.static(path.join(__dirname, "./views/assets/audio")));
app.use(express.static(path.join(__dirname, "./views/assets/images")));
app.use(express.static(path.join(__dirname, "./views/assets/images/dark")));
app.use(express.static(path.join(__dirname, "./views/assets/images/light")));

//redirifidores
app.get('/', (req, res) => {
	res.render('index', { title: "Home" })
})

app.get('/tos', (req, res) => {
	res.render('tos', { title: "Tos" })
})

app.get('/privacy-policy', (req, res) => {
	res.render('tos', { title: "Tos" })
})

//api
app.get("/api", (req, res) => {
	res.redirect(`https://api.teamarcades.xyz`)
});

//new
app.get('/api/new/:id', function (req, res) {
  res.send(req.params.id)
})


//inivte katira
app.get("/katira", (req, res) => {
	res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=960043017954283591&permissions=8&scope=applications.commands%20bot`)
});

//inivte rocket
app.get("/rocket", (req, res) => {
	res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=931204092406161459&permissions=8&scope=applications.commands%20bot`)
});

//inivte maker
app.get("/maker", (req, res) => {
	res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=986336804229767209&permissions=8&scope=applications.commands%20bot`)
});

//discord oficial
app.get("/dc", (req, res) => {
	res.redirect(`https://discord.gg/team-arcades-935157109761388554`)
});

//discord oficial
app.get("/discord", (req, res) => {
	res.redirect(`https://discord.gg/team-arcades-935157109761388554`)
});

//premium
app.get("/premium", (req, res) => {
	res.redirect(`https://discord.gg/team-arcades-935157109761388554`)
});

//patreon
app.get("/patreon", (req, res) => {
	res.redirect(`https://discord.gg/team-arcades-935157109761388554`)
});

//yt
app.get("/yt", (req, res) => {
	res.redirect(`https://www.youtube.com/channel/UCQP6PgrYDPQtZ-qGSAtXZ5Q`)
});

//yt
app.get("/youtube", (req, res) => {
	res.redirect(`https://www.youtube.com/channel/UCQP6PgrYDPQtZ-qGSAtXZ5Q`)
});


//404
app.use((req, res) => {
	res.status(404).render('404', { title: 404 })
})


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))