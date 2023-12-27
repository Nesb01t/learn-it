const axios = require('axios')
const getWbiQuery = require('./lib/wbi')
const getBuvid3 = require('./lib/buvid3')

const queryHeaders = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.63",
  accept: "*/*",
  "accept-encoding": "gzip, deflate, br",
  "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
};

getWbiQuery({
  mid: 1624454327,
}).then(async (query) => {
  const b3 = await getBuvid3();
  const config = {
    method: 'get',
    url: `https://api.bilibili.com/x/space/wbi/acc/info`,
    data: query,
    headers: {...queryHeaders, cookie: `buvid3=${b3}`}
  }

  console.log(config)
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
})
