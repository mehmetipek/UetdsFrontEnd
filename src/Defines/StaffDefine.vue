<template>
<div class="dashboard-editor-container">
<el-card >
    <div class="col-md-12" style="padding-top:10px">
        <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPersonelTürü">Personel Türü</label>
      <input type="text" v-model="personels.personeltürü"  class="form-control" id="inputPersonelTürü" placeholder="Şöför,Şöför Yardımcısı vs.">
    </div>
    <div class="form-group col-md-6">
      <label for="inputCinsiyet">Cinsiyet</label>
      <input type="text" v-model="personels.cinsiyet"  class="form-control" id="inputCinsiyet" placeholder="Seçiniz.">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPersonelAdı">Personel Adı</label>
      <input type="text" v-model="personels.personeladi"  class="form-control" id="inputPersonelAdı" placeholder="Adınızı Giriniz.">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPersonelSoyadi">Personel Soyadı</label>
      <input type="text" v-model="personels.personelsoyadi"  class="form-control" id="inputPersonelSoyadi" placeholder="Soyadınızı Giriniz.">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputUyruk">Uyruk</label>
      <input type="text" v-model="personels.uyruk"  class="form-control" id="inputUyruk" placeholder="Uyruğunuzu giriniz.">
    </div>
    <div class="form-group col-md-3">
      <label for="inputKimlikNumarasi">Kimlik Numarası</label>
      <input type="text" v-model="personels.personelTc"  class="form-control" id="inputKimlikNumarasi" placeholder="Kimlik Numarası">
    </div>
  </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmailAdresi">E-mail Adresi</label>
      <input type="text" v-model="personels.personelmail"  class="form-control" id="inputEmailAdresi" placeholder="Email giriniz.">
    </div>
    <div class="form-group col-md-6">
      <label for="inputTelefonNumarasi">Telefon Numarası</label>
      <input type="text" v-model="personels.personeltel" class="form-control" id="inputTelefonNumarasi" placeholder="Telefon no giriniz.">
    </div>
</div>
<div class="form-row">
    <div class="form-group col-md-12">
      <label for="inputAdres">Adres</label>
      <textarea type="text" v-model="personels.personeladres" class="form-control" id="inputAdres"> </textarea>
    </div>
</div>
      <el-button  type="primary" style="width:100%;margin-bottom:30px;" @click="personsave">Kayıt</el-button>
  </div>
  </el-card >
  </div>
</template>
<script>

export default {
  name: 'PersonelTanimla',
  data() {
   
    return {
      personels: {
        personeltürü: '',
        cinsiyet: '',
        personeladi:'',
        personelsoyadi:'',
        uyruk:'',
        personelTc:'',
        personelmail:'',
        personeltel:'',
        personeladres:''
      }
     
    }
  },
  methods: {
    personsave() {
      this.$store.dispatch('user/personkayit', this.personels)
        .then((response) => {
          
          console.log(response.data);
          })
        .catch(() => {
        })
    }
  }
}
</script>

<style lang="scss" scoped>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
.dashboard-editor-container {
    background-color: #e3e3e3;
    min-height: 100vh;
    padding: 50px 60px 0px;
    .pan-info-roles {
      font-size: 12px;
      font-weight: 700;
      color: #333;
      display: block;
    }
    .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display_name {
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }
  }
</style>