const https = require('https');

export default function handler(req, res) {
  // 猫画像をランダムに1枚くれるAPI
  const apiUrl = 'https://thecatapi.com';

  https.get(apiUrl, (apiRes) => {
    let data = '';
    apiRes.on('data', (chunk) => { data += chunk; });
    apiRes.on('end', () => {
      const catData = JSON.parse(data);
      const catUrl = catData[0].url; // ランダムに選ばれた猫の住所

      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>猫API学習中</title></head>
        <body style="text-align:center; font-family:sans-serif;">
          <h1>今日のランダム猫ちゃん</h1>
          <p>更新するたびに違う猫が出てくるよ。</p>
          <img src="${catUrl}" style="max-width:100%; height:400px; border-radius:10px;">
          <br><br>
          <button onclick="location.reload()">次の猫を見る</button>
        </body>
        </html>
      `);
    });
  }).on('error', (e) => {
    res.status(500).send('エラー: ' + e.message);
  });
}
