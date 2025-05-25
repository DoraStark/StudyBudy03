const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3001;


app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public_html')));


app.get('/', (req, res) => {
  res.send('Welcome! Go to <a href="/profile">/profile</a> or <a href="/community">/community</a>');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/profile', (req, res) => {
  res.render('profile', {
    languages: ['🇩🇪 Deutsch', '🇬🇧 Englisch'],
    learn: ['🌍 Geografie', '🔭 Astronomy'],
    teach: ['➕ Mathe', '🎵 Musik'],
    preferences: [
      {
        title: "Was ich erwarte?",
        text: "Möchte gerne mehr über Klima und verschiedene Länder wissen und auch Saturn Bewegungen"
      },
      {
        title: "Wie kann ich dir helfen?",
        text: "Kann dir mit Mathe helfen, Geometrie und Algebra im Rahmen des Schulkurses und auch Musiktheorie"
      },
      {
        title: "Was noch?",
        text: "Ich wohne in Berlin (Prenzlauer Berg), habe Zeit mittwochs nachmittags, können uns treffen oder online – bin flexibel."
      }
    ]
  });
});



app.get('/community', (req, res) => {
  res.render('community', {
    users: [
      { name: "Anna", skills: "🎵 Musik, ➕ Mathe" },
      { name: "Mark", skills: "🎨 Kunst, ➕ Bio" },
      { name: "Lara", skills: "🧮 Mathe, ➕ Musik" },
      { name: "Erik", skills: "🎵 Musik, ➕ Mathe" },
      { name: "Karina", skills: "🎨 Kunst, ➕ Bio" },
      { name: "Louise", skills: "🧮 Mathe, ➕ Musik" }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
