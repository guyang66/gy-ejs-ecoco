module.exports = {
  deployConfig: {
    // 服务器ip
    serverIp: '120.48.51.123',
    // 项目目录
    targetDir: '/opt/workspace',
    // scp本地文件目录
    localTarDir: './tgz/ecoco.tgz',
    // 压缩包名字
    tarDirName: 'ecoco.tgz',
    // 服务器用户
    user: 'root'
    // 密码不要写入！！！ 脚本启动后，按照提示，从控制台输入
  }
}
