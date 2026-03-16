const fs = require('fs');
const path = require('path');
const https = require('https');
const { image_search } = require('duckduckgo-images-api');

const newAliens = [
  'Alien_X', 'Swampfire', 'Humungousaur', 'Echo_Echo', 'Big_Chill'
];

const dest = path.join(__dirname, '..', 'assets', 'aliens');

async function downloadImage(alien) {
  const searchTerm = alien.replace('_', ' ') + ' Ben 10 transparent png';
  console.log(`Searching for: ${searchTerm}`);
  try {
    const results = await image_search({ query: searchTerm, moderate: true, iterations: 1 });
    if (results.length > 0) {
      let url = results[0].image;
      return new Promise((resolve) => {
        https.get(url, (res) => {
          if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
             const destUrl = res.statusCode === 200 ? url : res.headers.location;
             https.get(destUrl, (res2) => {
                const fileStream = fs.createWriteStream(path.join(dest, `${alien}.png`));
                res2.pipe(fileStream);
                fileStream.on('finish', () => resolve());
             }).on('error', () => resolve());
          } else resolve();
        }).on('error', () => resolve());
      });
    }
  } catch (err) {}
}

(async () => {
  for (const alien of newAliens) {
    await downloadImage(alien);
    console.log(`done ${alien}`)
  }
})();
