const https = require('https')

const fetchJSON = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = ''
        res.on('data', (chunk) => (body += chunk))
        res.on('end', () => {
          try {
            resolve(JSON.parse(body))
          } catch (err) {
            reject(err)
          }
        })
      })
      .on('error', reject)
  })
};

(async () => {
  const res = await fetchJSON(`https://picsum.photos/v2/list?page=1&limit=10`)
  console.log("🔎🔎🔎 ~ file: https-fetch.js ~ line 23 ~ res", typeof res)
})();
