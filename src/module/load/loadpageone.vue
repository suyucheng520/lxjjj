<template >
<div>
  <div class="decorateBanner"></div>
  <div class="bankChopBox">
    <div class="bankChop">
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
  <div class="loanInterestBox">
    <p class='monthRate'>月费率</p>
    <div class="loanNumber">
      <span>0.48</span>
      <span>%</span>
    </div>
    <div class="loanInfoWrap">
      <div class="loanInfo">
        <i class="icon iconfont icon-shizhong"></i>
        <span>最快一天</span>
        <span>完成审核</span>
      </div>
      <div class="loanInfo">
        <i class="icon iconfont icon-anonymous-iconfont"></i>
        <span>额度灵活</span>
        <span>最高可贷款30万</span>
      </div>
      <div class="loanInfo">
        <i class="icon iconfont icon-nian"></i>
        <span>还款轻松</span>
        <span>周期最长5年</span>
      </div>
      <div class="clearfix"></div>
      <router-link class="blackBtn decorate_btn_251" to="/module/loadpagetwo" >立即申请</router-link>
    </div>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style media="screen">
.decorateBanner {
  height: 4.27rem;
  background: url(./images/zxl-banner.png);
  background-size: contain;
}
.bankChopBox {
    margin: 0.35rem 0 0 0.18rem;
}

.bankChop {
    width: 100%;
    height: 1.04rem;
}

.bankChop i {
    float: left;
    height: 0.35rem;
    border-right: 1px solid #ccc;
}

.bankChop i:nth-child(1) {
    width: 24%;
    background: url(./images/Guangzhou_nl_.png) no-repeat;
    background-size: contain;
}

.bankChop i:nth-child(2) {
    width: 41%;
    margin-left: 0.2rem;
    padding: 0 0.5rem;
    background: url(./images/Guangzhou_gs.png) no-repeat;
    background-size: contain;
}

.bankChop i:nth-child(3) {
    width: 29%;
    margin-left: 0.2rem;
    border: none;
    background: url(./images/Guangzhou_zx.png) no-repeat;
    background-size: contain;
}

.loanInterestBox {
    padding-top: 0.65rem;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 1rem;
}

.loanInterestBox .monthRate {
    font-size: 0.24rem;
}
.loanInterestBox {
    padding-top: 0.65rem;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 1rem;
}

.loanInterestBox .monthRate {
    font-size: 0.24rem;
}

.loanNumber span {
    color: #cc3333;
}

.loanNumber span:nth-child(1) {
    font-size: 0.67rem;
    font-weight: 600;
}

.loanNumber span:nth-child(2) {
    font-size: 0.20rem;
}

.loanInfoWrap {
    width: 100%;
    margin-top: 0.9rem;
}

.loanInfoWrap .loanInfo {
    float: left;
    width: 33.333%;
}

.loanInfo i {
    font-size: 0.63rem;
    display: block;
}

.loanInfo span {
    display: block;
    font-size: 0.26rem;
    color: #999999;
}
.blackBtn {
    height: 9rem;
    background: #000;
    color: #fff;
    text-align: center;
    width: 6.38rem;
    height: 0.9rem;
    font-size: 0.26rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.decorate_btn_251 {
    display: block;
    margin: 0 auto;
    line-height: 0.9rem;
    margin-top: 1.1rem;
}
</style>
