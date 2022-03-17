const settings = require('./settings');
const filters = require('../script/filter/tmp_entrys.js')

// 多入口
let entrys = {};
if(JSON.stringify(filters) === '{}' || Object.getOwnPropertyNames(filters).length === 0 || process.env.NODE_ENV === 'production'){
  settings.routers.forEach(page=> {
    entrys[page.name] = settings.pathEntry(page.path);
  });
} else {
  entrys = filters
}

console.log(entrys)
module.exports = entrys
