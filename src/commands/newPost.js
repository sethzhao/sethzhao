const fs = require('fs')

let dataJSON = fs.readFileSync('./src/posts/data.json', 'utf8')
const data = JSON.parse(dataJSON)

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`文章标题：`, blogTitle => {
  readline.question(`发布日期（默认：${new Date().format('yyyy-MM-dd')}）：`, publishDate => {
    publishDate = publishDate || new Date().format('yyyy-MM-dd')
    readline.question(`友好URL（建议输入不带标点的英文句子，空格将被替换为“-”）：`, friendlyUrl => {
      friendlyUrl = friendlyUrl.replace(/\s+/g, '-')
      data.unshift({
        "title": blogTitle,
        "content": `${publishDate}_${friendlyUrl}`
      })

      fs.writeFileSync('./src/posts/data.json', JSON.stringify(data, null, 2))
      fs.writeFileSync(`./src/posts/md/${publishDate}_${friendlyUrl}.md`, '')

      console.log(`生成完毕，请去 ./src/posts/md/${publishDate}_${friendlyUrl}.md 编写内容。`)
      readline.close()
    })
  })
})


Date.prototype.format = function(fmt) { 
  var o = { 
    "M+" : this.getMonth()+1,                 //月份 
    "d+" : this.getDate(),                    //日 
    "h+" : this.getHours(),                   //小时 
    "m+" : this.getMinutes(),                 //分 
    "s+" : this.getSeconds(),                 //秒 
    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
    "S"  : this.getMilliseconds()             //毫秒 
  }
  if(/(y+)/.test(fmt)) {
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt; 
}

