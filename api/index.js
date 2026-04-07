export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <!DOCTYPE html>
    <html>
    <head><title>伝統工芸の学習記録</title></head>
    <body>
      <h1>江戸切子の美しさについて</h1>
      <p>今日は伝統工芸について調べました。カットがとても綺麗です。</p>
      
      <!-- 画像の「直URL」に修正しました -->
      <img src="https://edokiriko.or.jp/images/home/head-showroom2.jpg" style="width:300px;">
      
      <p>※これは学習用のメモです。</p>
    </body>
    </html>
  `);
}

