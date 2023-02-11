<template>
<div class="dashboard-editor-container">
    <div class="col-md-12" style="padding-top:10px;">
      <el-card >
    <div class="form-row" >
    <div class="form-group col-md-12">
    <label >ŞOFÖR BİLGİLERİ</label>
      <button type="button" style="float: right;" class="btn btn-info" @click="createOpenModals">Yeni Yük Kaydı</button>
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label >Taşıma Türü Kodu</label>
    <el-select   v-model="yeniYuk.aracBilgileriInput.tasimaTuruKodu"   placeholder="Taşıma Türü Kodunu Seçiniz.">
              <el-option
          :key="1" 
      :label="1"
      :value="1">
    </el-option>
              <el-option
          :key="2" 
      :label="2"
      :value="2">
    </el-option>
  </el-select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPlaka1">Plaka 1</label>
      <input type="text" v-model="yeniYuk.aracBilgileriInput.plaka1" class="form-control" id="inputPlaka1" placeholder="Plaka 1 i Giriniz.">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPlaka2">Plaka 2</label>
      <input type="text" v-model="yeniYuk.aracBilgileriInput.plaka2" class="form-control" id="inputPlaka2" placeholder="Plaka 2 i Giriniz.">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputSofor1TcNo">Şoför 1 Tc No</label>
      <input type="text" v-model="yeniYuk.aracBilgileriInput.sofor1TcNo" class="form-control" id="inputSofor1TcNo" placeholder="Şoför 1 Tc No Giriniz.">
    </div>
    <div class="form-group col-md-6">
      <label for="inputSofor2TcNo">Şoför 2 Tc No</label>
      <input type="text" v-model="yeniYuk.aracBilgileriInput.sofor2Tcno" class="form-control" id="inputSofor2TcNo" placeholder="Şoför 2 Tc No Giriniz.">
    </div>
  </div>
</el-card>


<el-dialog 
style="margin-top:-4%"
  title="YÜK KAYDI EKLE"
  :visible.sync="dialogVisible"
  :before-close="handleClose">
<div class="form-row">
    <!-- <div class="form-group col-md-3">
      <label for="inputTasima">Teklikeli Madde Taşıma Şekli</label>
      <input type="text" v-model="yukBilgileri.tehlikeliMaddeTasimaSekli" class="form-control" id="inputTasima" placeholder="Tür Seç">
    </div> -->
    <div class="form-group col-md-3">
      <label for="inputYükTürü">Yük Türü</label>
      <el-select   v-model="yukBilgileri.yukCinsId"  placeholder="Seçiniz.">
          <el-option 
          v-for="item in paramYukTurListesi"
      :key="item.id"
      :label="item.adi"
      :value="item.id">
    </el-option>
  </el-select>
    </div>
    <div class="form-group col-md-3">
      <label for="inputYükMiktari">Yük Miktarı</label>
      <input type="text" v-model="yukBilgileri.yukMiktari" class="form-control" id="inputYükMiktari" placeholder="örn:12.5">
    </div>
    <div class="form-group col-md-3">
      <label >Yük birimi</label>
      <el-select  v-model="yukBilgileri.yukBirimi"  placeholder="Seçiniz.">
          <el-option 
          v-for="item in paramYukBirimiList"
      :key="item.kodu"
      :label="item.aciklama"
      :value="item.kodu">
    </el-option>
  </el-select>
      <!-- <input type="text" v-model="yukBilgileri.yukBirimi" @click="savePackageUnits" class="form-control" id="inputYukBirimi" placeholder="Yük Birimini Giriniz."> -->
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputVergiNo">Gönderen Vergi No</label>
      <input type="text" v-model="yukBilgileri.gonderenVergiNo" class="form-control" id="inputVergiNo" placeholder="Vergi No" >
    </div>
    <div class="form-group col-md-3">
      <label for="inputUnvani">Gönderen Ünvanı</label>
      <input type="text" v-model="yukBilgileri.gonderenUnvan" class="form-control" id="inputUnvani" placeholder="Ünvanı">
    </div>
    <div class="form-group col-md-3">
      <label for="inputAliciVergiNo">Alıcı Vergi No</label>
      <input type="text" v-model="yukBilgileri.aliciVergiNo" class="form-control" id="inputAliciVergiNo" placeholder="Vergi No">
    </div>
    <div class="form-group col-md-3">
      <label for="inputAliciUnvani">Alıcı Ünvanı</label>
      <input type="text" v-model="yukBilgileri.aliciUnvan" class="form-control" id="inputAliciUnvani" placeholder="Ünvanı">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputYuklemeUlke">Taşıma Bedeli</label>
      <input type="text" v-model="yukBilgileri.tasimaBedeli" class="form-control" id="inputYuklemeUlke" placeholder="Yükleme Ülke Kodu">
    </div>
    <div class="form-group col-md-6">
      <label for="inputYuklemeUlke">Un Numarası</label>
      <input type="text" v-model="yukBilgileri.unNumarasi" class="form-control" id="inputYuklemeUlke" placeholder="Yükleme Ülke Kodu">
    </div>
</div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputYuklemeUlke">Yükleme Ülke Kodu</label>
      <input type="text" v-model="yukBilgileri.yuklemeUlkeKodu" class="form-control" id="inputYuklemeUlke" placeholder="Yükleme Ülke Kodu">
    </div>
    <div class="form-group col-md-6">
      <label for="inputBosaltmaUlke">Boşaltma Ülke</label>
      <input type="text" v-model="yukBilgileri.bosaltmaUlkeKodu" class="form-control" id="inputBosaltmaUlke" placeholder="Boşaltma Ülke Kodu">
    </div>
</div>
<div class="form-row">
    <div class="form-group col-md-6"> 
      <label >Yükleme Tarihi:</label>
       <el-date-picker
      type="date"
            v-model="yukBilgileri.yuklemeTarihi"
      placeholder="Tarih seç">
    </el-date-picker>
    </div>
    <div class="form-group col-md-6">
      <label >Boşaltma Tarihi:</label>
      <el-date-picker
      type="date"
            v-model="yukBilgileri.bosaltmaTarihi"
      placeholder="Tarih seç">
    </el-date-picker>
    </div>
</div>
<div class="form-row">
    <div class="form-group col-md-6"> 
      <label >Yükleme Saati:</label>
      <el-time-select
      v-model="yukBilgileri.yuklemeSaati"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="Select time">
</el-time-select>
    </div>
    <div class="form-group col-md-6">
      <label >Boşaltma Saati:</label>
      <el-time-select
      v-model="yukBilgileri.bosaltmaSaati"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="Select time">
</el-time-select>
    </div>
</div>
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputYuklemeIl">Yükleme İl</label>
      <input type="text" v-model="yukBilgileri.yuklemeIlMernisKodu" class="form-control" id="inputYuklemeIl" placeholder="Yükleme İl Kodu">
    </div>
    <div class="form-group col-md-6">
      <label for="inputBosaltmaIlce">Boşaltma İl</label>
      <input type="text" v-model="yukBilgileri.bosaltmaIlMernisKodu" class="form-control" id="inputBosaltmaIlce" placeholder="Boşaltma İlçe">
    </div>
</div>
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputYuklemeIlce">Yükleme İlçe</label>
      <input type="text" v-model="yukBilgileri.yuklemeIlceMernisKodu" class="form-control" id="inputYuklemeIlce" placeholder="Yükleme İlçe Kodu">
    </div>
    <div class="form-group col-md-6">
      <label for="inputBosaltmaIlce">Boşaltma İlçe</label>
      <input type="text" v-model="yukBilgileri.bosaltmaIlceMernisKodu" class="form-control" id="inputBosaltmaIlce" placeholder="Boşaltma İlçe">
    </div>
</div>
    
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">İptal</el-button>
    <el-button type="primary" @click="saveYukBildir">Kaydet</el-button>
  </span>
</el-dialog>
</div>
</div>
</template>
<script>
import appModel from '@/Services/appModel';

export default {
    name:"YukTanimlama",
    data(){
      return{
        dialogVisible: false,
        paramYukBirimiList:[{
          aciklama:"",
          kodu:""
        }],
        paramYukTurListesi:[{
          adi:"",
          id:""
        }],
        yeniYuk:{
          wsuser:{
          kullaniciAdi:"922571",
          sifre:"0OKYGH0PVB"
        },
            aracBilgileriInput:{
                      plaka1:"",
                      plaka2:"",
                      sofor1TcNo:"",
                      sofor2TcNo:"",
                      tasimaTuruKodu:""
            },
            yukBilgileriListInput:[]
        },
        yukBilgileri: {
                    gonderenVergiNo:"",
                    gonderenUnvan:"",
                    aliciVergiNo:"",
                    aliciUnvan:"",
                    yuklemeUlkeKodu:"",
                    yuklemeIlMernisKodu:"",
                    yuklemeIlceMernisKodu:"",
                    bosaltmaUlkeKodu:"",
                    bosaltmaIlMernisKodu:"",
                    bosaltmaIlceMernisKodu:"",
                    yuklemeTarihi:"",
                    yuklemeSaati:"",
                    bosaltmaTarihi:"",
                    bosaltmaSaati:"",
                    yukCinsId:"",
                    yukBirimi:"",
                    yukMiktari:"",
                    tasimaBedeli:"",
                    unNumarasi:"",
                    tehlikeliMaddeTasimaSekli:""
        },
        paramYukBirimi:{
          wsuser:{
          kullaniciAdi:"922571",
          sifre:"0OKYGH0PVB"
        },
          tasimaTuruKodu:""
        },
        paramYukTuru:{
          wsuser:{
          kullaniciAdi:"922571",
          sifre:"0OKYGH0PVB"
        },
          tasimaTuruKodu:""
        }
      }
    },
    methods:{
    createOpenModals(){
      if(this.yeniYuk.aracBilgileriInput.tasimaTuruKodu!=""){
      this.dialogVisible = true;
      this.savePackageUnits();
      
      //this.savePackageTour();
      }
      else
      this.$notify.error({
          title: 'Hata',
          message: 'Taşıma Türü Kodu Doğrulanmadan Giriş Yapamazsınız.'
        });
    },
     handleClose(done) {
        this.$confirm('Kapatmak İstediğinize Emin misiniz?')
          .then(_ => {
            done();
            this.yukBilgileri=[];
          })
          .catch(_ => {});
      },
    saveYukBildir() {
        this.yeniYuk.yukBilgileriListInput.push(this.yukBilgileri);
        this.$store.dispatch("savePackageB", this.yeniYuk).then(res => {
          this.dialogVisible = false;
        },
        err => {
          console.log(err);
        });
    },
    savePackageUnits(){
      this.paramYukBirimi.tasimaTuruKodu=this.yeniYuk.aracBilgileriInput.tasimaTuruKodu;
      this.$store.dispatch("savePackageUnit",this.paramYukBirimi).then(res=>{
        if(res.paramYukBirimiListesi!=null){
          this.paramYukBirimiList=res.paramYukBirimiListesi;
        }
        this.savePackageTour();
      },
      err=>{
        console.log(err);
      });
    },
    savePackageTour(){
      this.paramYukTuru.tasimaTuruKodu=this.yeniYuk.aracBilgileriInput.tasimaTuruKodu;
      this.$store.dispatch("savePackageTour",this.paramYukTuru).then(res=>{
        if(res.yukTurListesi!=null){
          this.paramYukTurListesi=res.yukTurListesi;
        }
      },err=>{
        console.log(err);
      });
    }
    }
};
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