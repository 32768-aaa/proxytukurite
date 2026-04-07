const http = require('http');

// サーバーの動作設定
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>おめでとう！サーバーが動いたよ</h1><p>ここにプロキシの機能を足していくんだ。</p>');
});

// ポート設定（Renderが自動で割り当ててくれる番号を使います）
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
