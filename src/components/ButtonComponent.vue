<template>
    <div class="form-btn-container" style="padding: bottom 48px;">
        <div class="form-btn-wrap">
            <div class="form-bgbtn-login">
                <button class="form-btn-login" type="submit">{{buttonName}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CustomButton',
    props:['buttonName'],
    
}
</script>

<style scoped>
  .form-btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 13px;
  }
  .form-btn-wrap {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
  }
  .form-bgbtn-login {
    width: 100%;
    height: 100%;
    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    top: 0;
    left: -100%;
  }
  .form-btn-login {
    font-size: 15px;
    line-height: 1.2;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
  }
  button {
    outline: none!important;
    border: none;
    background: 0 0;
  }
</style>