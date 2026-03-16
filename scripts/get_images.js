const fs = require('fs');
const path = require('path');
const https = require('https');

const aliens = ['Wildmutt', 'Ghostfreak'];

const dest = path.join(__dirname, '..', 'assets', 'aliens');

async function downloadImage(alien) {
  return new Promise((resolve) => {
    // try just the name
    const apiUrl = `https://ben10.fandom.com/api.php?action=query&titles=${alien}&prop=pageimages&format=json&pithumbsize=500`;
    
    https.get(apiUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          const page = pages[pageId];
          if (page && page.thumbnail && page.thumbnail.source) {
            const imgUrl = page.thumbnail.source;
            console.log(`Downloading ${alien} from ${imgUrl}`);
            https.get(imgUrl, (imgRes) => {
              const fileStream = fs.createWriteStream(path.join(dest, `${alien}.png`));
              imgRes.pipe(fileStream);
              fileStream.on('finish', () => resolve());
            });
          } else {
             console.log(`No thumbnail found for ${alien}`);
             resolve();
          }
        } catch(e) {
             resolve();
        }
      });
    }).on('error', () => resolve());
  });
}

(async () => {
  for (const alien of aliens) {
    await downloadImage(alien);
  }
})();
