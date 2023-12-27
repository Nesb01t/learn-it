const axios = require('axios')

const config = {method: 'get', url: `https://api.bilibili.com/x/frontend/finger/spi`}
const getBuvid3 = async () => {
  return axios(config).then(res => {
    return res.data?.data?.b_3
  })
}

module.exports = getBuvid3;