const fs = require('fs');
const html = fs.readFileSync('out/index.html', 'utf8');
const matches = html.match(/<img[^>]+src="([^"]+)"/g);
console.log(matches.join('\n'));
