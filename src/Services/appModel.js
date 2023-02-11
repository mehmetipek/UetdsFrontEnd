const axios = require('axios')

const url = "http://localhost:8080/"

export default{

    saveYukBildir(yukBildir){
        return axios.post(url+'deneme/yukBildir',yukBildir);
      },
      yukBildirimiListesi(yukBildirimiListesi){
        return axios.post(url+'deneme/bildirimListesi',yukBildirimiListesi);
      }
}

