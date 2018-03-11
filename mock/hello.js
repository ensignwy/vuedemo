module.exports = {

  // 接口地址
  api: '/api/hello',

  // 返回数据 参考http://expressjs.com/zh-cn/4x/api.html
  response: function (req, res) {
    res.send(`
      <p>hello vue!</p>
    `);
  }
}