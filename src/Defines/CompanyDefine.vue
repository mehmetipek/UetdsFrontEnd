<template>
<div class="dashboard-editor-container">
    <div  class="col-md-12" style="padding-top:10px;">
    <el-card>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputFirma">Firma Ünvanı</label>
            <input type="text"  class="form-control" id="inputFirma" placeholder="Firma Ünvanını Giriniz.">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputUetdsKullanici">Uetds Kullanıcı Adı</label>
            <input type="text"  class="form-control" id="inputUetdsKullanici" placeholder="Uetds Kullanıcı Adı.">
        </div>
        <div class="form-group col-md-6">
            <label for="inputSifre">Uetds Şifre</label>
            <input type="text"  class="form-control" id="inputSifre" placeholder="Uetds Şifre">
        </div>
    </div>
    </el-card>
 </div>
</div>    
</template>
<script>
export default {
    data(){
        return{
            saveCom:{

            }
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