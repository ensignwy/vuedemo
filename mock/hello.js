module.exports = {

  // �ӿڵ�ַ
  api: '/api/hello',

  // �������� �ο�http://expressjs.com/zh-cn/4x/api.html
  response: function (req, res) {
    res.send(`
      <p>hello vue!</p>
    `);
  }
}