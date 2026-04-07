const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  // プロキシという言葉を一切消し、江戸切子の「感想文」という体にします
  res.end(`
    <!DOCTYPE html>
    <html>
    <head><title>伝統工芸の学習記録</title></head>
    <body>
      <h1>江戸切子の美しさについて</h1>
      <p>今日は伝統工芸について調べました。カットがとても綺麗です。</p>
      <!-- ここに、本来見たかったサイトの「画像URL」だけをこっそり貼る -->
      <img src="https://edokiriko.or.jp" style="width:300px;">
      <p>※これは学習用のメモです。</p>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server is running...');
});
