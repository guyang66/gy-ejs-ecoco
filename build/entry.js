const settings = require('./settings');

// 多入口
const entrys = {};
settings.routers.forEach(page=> {
  entrys[page.name] = settings.pathEntry(page.path);
});

module.exports = entrys
