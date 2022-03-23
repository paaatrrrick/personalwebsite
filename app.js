const methodOverride = require('method-override');
const express = require('express');
const path = require('path');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
});

app.all('*', (req, res, next) => {
    res.redirect('./')
})


app.listen(3000, () => {
    console.log('Serving on port 3000')
})

