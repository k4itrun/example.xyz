import express from 'express';
import path from 'path';
import minifyHTML from 'express-minify-html-terser';
import {
  navLinks,
  site,
  openGraph,
  twitter,
  fonts,
  adsense,
  redirects,
  port
} from './config.js';

const app = express();
const PORT = process.env.PORT || port;

// Middleware =>
app.use(minifyHTML({
  override: true,
  exception_url: false,
  htmlMinifier: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    minifyJS: true
  }
}));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.static(path.resolve('public', 'assets')));

// Main routes =>
app.get('/', (req, res) => {
  res.status(200).render('index', { navLinks, site, openGraph, twitter, fonts, adsense });
});

redirects.forEach(({ source, destination, permanent }) => {
  app.get(source, (req, res) => {
    res.redirect(permanent ? 301 : 302, destination);
  });
});

// Error =>
app.use((req, res) => {
  res.status(404).render('404', { navLinks, site, openGraph, twitter, fonts, adsense });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { navLinks, site, openGraph, twitter, fonts, adsense });
});

// Starting web =>
app.listen(PORT, () => console.log(`Web running at http://localhost:${PORT}`));