const fs = require('fs')

let dataJSON = fs.readFileSync('./src/posts/data.json', 'utf8')
const data = JSON.parse(dataJSON)

const wordsPerMinute = 300

data.forEach(item => {
  const content = fs.readFileSync(`./src/posts/md/${item.content}.md`, 'utf8')
  
  const minutes = content.length / wordsPerMinute
  var displayed = Math.ceil(minutes.toFixed(2))

  item.readingTime = displayed
});

fs.writeFileSync('./src/posts/data.json', JSON.stringify(data, null, 2))
