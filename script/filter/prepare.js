const fs = require('fs');
const path = require('path');
const entryFilters = require('./entryFilters.js');
const settings = require('../../build/settings');

const entries = function () {
  let map = {};

  // 这里也可以不用routers作为匹配表（简单已读），也可以用src/page 来作为匹配表，
  // 用nodejs的文件系统递归读取src/page 下所有目录文件进行匹配，这样可以适当增加规则，匹配的更加精准
  for (let i = 0; i < settings.routers.length; i++) {
    let pageItem = settings.routers[i];
    let skip = true;
    let matchTarget = pageItem.name
    entryFilters.forEach((item) => {
      if (item) {
        if (matchTarget.match(item)) {
          skip = false;
        }
      }
    });
    // 如果没有匹配上就跳过
    if(skip){
      continue
    }
    map[pageItem.name] = settings.pathEntry(pageItem.path)
  }
  return map
}

let entryList = entries()
let outPutFileName = path.resolve(__dirname, 'tmp_entrys.js');
// 先删除上次缓存的filter
try {
  fs.unlinkSync(outPutFileName);
} catch (err) {
  console.log('fs.unlinkSync fail!' + err.toString())
}

let fd;
try {
  // 把需要的格式数据写入对应的文件
  fd = fs.openSync(outPutFileName, 'a');
  fs.appendFileSync(fd, 'var filters = \n', 'utf-8')
  fs.appendFileSync(fd, "" + JSON.stringify(entryList) + "", 'utf8');
  fs.appendFileSync(fd, ';\n','utf8')
  fs.appendFileSync(fd, 'module.exports = filters;', 'utf8')
} catch (err) {
  console.log( 'fs写入失败：' + err.toString())
} finally {
  if (fd !== undefined) {
    fs.closeSync(fd);
  }
}
