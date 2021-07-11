import fs from 'fs'
import MD5 from 'md5'
import dotenv from 'dotenv'
dotenv.config()
import axios from 'axios'
import slugify from '@sindresorhus/slugify';
import readline from 'readline'

var appid = process.env.BAIDU_FANYI_APPID
var key = process.env.BAIDU_FANYI_KEY
var salt = (new Date).getTime()
var from = 'zh'
var to = 'en'

let dataJSON = fs.readFileSync('./src/posts/data.json', 'utf8')
const data = JSON.parse(dataJSON)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(`文章标题：`, blogTitle => {
  var str1 = appid + blogTitle + salt +key
  var sign = MD5(str1);
  axios.get('http://api.fanyi.baidu.com/api/trans/vip/translate', {
    params: {
      q: blogTitle,
      appid: appid,
      salt: salt,
      from: from,
      to: to,
      sign: sign
    }
  })
  .then(function (response) {
    const trans = slugify(response.data.trans_result[0].dst)
    rl.question(`友好URL（默认：${trans}）：`, friendlyUrl => {
      friendlyUrl = friendlyUrl ? friendlyUrl.replace(/\s+/g, '-') : trans

      rl.question(`发布日期（默认：${new Date().format('yyyy-MM-dd')}）：`, publishDate => {
        publishDate = publishDate || new Date().format('yyyy-MM-dd')
    
        data.unshift({
          "title": blogTitle,
          "content": `${publishDate}_${friendlyUrl}`
        })
    
        fs.writeFileSync('./src/posts/data.json', JSON.stringify(data, null, 2))
        fs.writeFileSync(`./src/posts/md/${publishDate}_${friendlyUrl}.md`, '')
    
        console.log(`生成完毕，请去 ./src/posts/md/${publishDate}_${friendlyUrl}.md 编写内容。`)
        rl.close()
      })
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
  return fmt
}
