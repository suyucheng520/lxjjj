<template >
<div>
  <div class="loanPeriodBanner">
    <div>优质客户可享受 <i>8.8</i> 折</div>
  </div>
  <div class="loanPeriodLog">
    <div class="loanPeriodLxj"></div>
    <div class="loanPeriodBank"></div>
  </div>
  <div class="applicationLoan">
    <input type="text" class='inputBox userName' value="" placeholder="请输入您的称呼">
    <input class='inputBox userPhone' type="tel" onkeyup="value=value.replace(/[^\d]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" placeholder="请输入您的手机号码" maxlength="11" />
    <input type="button" class='inputBox loanSelectCity' value="请输入您的城市">
    <group>
      <x-address title="二级省市" v-model="value3" raw-value :list="addressData"></x-address>
    </group>
    <input type="button" value="立即申请装修贷" class='blackBtn applicationBtn'>
  </div>
  <div class="applicationQualification"></div>
  <div class="applicationStep"></div>
  <div class="loanCompute">
    <h3>计算器</h3>
    <div class='computeAmount'>
      <input type="text" class='inputBox' onkeyup="value=value.replace(/[^\d]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" maxlength="7" value="" placeholder="请输入您的贷款金额">
      <i>元</i>
    </div>
    <div class='slectDate '>
      <input type="button" class='inputBox' value="请选择贷款周期" dateType="3">
      <i class="icon iconfont icon-daosanjiao"></i>
    </div>
    <input type="button" value="计算还款金额" class='blackBtn countBtn'>
    <div class="perMonthInt">
      <div class='perMonthIntTitle'>
        每月还款
        <i class='perMonthIntAmount'>0.00</i> 元
      </div>
      <p>优质客户享受8.8折</p>
      <div class='perMonthIntDetai'>
        <div class='loanMoney'>
          贷款金额 <i>0</i>元
        </div>
        <div class='costTotal'>
          本费合计 <i>0</i>元
        </div>
        <div class='loanCycDate'>
          贷款周期 <i>0</i>期
        </div>
      </div>
    </div>
  </div>
  <div class="loanSignal"></div>
  <div class="Loanexplain">
    <h3>*申请装修贷需要要符合哪些条件？</h3>
    <p>1.月收入5000元以上</p>
    <p>2.在广州市缴纳社保</p>
    <p class='m_t_60'>3.个人征信良好的客户</p>
    <h3>*贷款金额, 本费合计, 贷款周期如何计算？</h3>
    <p>最高30万,按实际天数计息</p>
    <p class='m_t_60'>最长五年, 按月等额本息还款</p>
    <h3>*最快几天完成审核？</h3>
    <p class='m_t_60'>1天完成审核3天放款</p>
    <h3>*最高可贷多少万？</h3>
    <p class='m_t_60'>30万</p>
  </div>
</div>
</template>
<script>
import { PopupPicker } from 'vux'
import { Group, XAddress, ChinaAddressData, XButton, Cell } from 'vux'
import value2name from 'vux/src/filters/value2name'
export default {
  components: {
    Group,
    XAddress,
    XButton,
    Cell,
    PopupPicker
  },
  data () {
    return {
      title: '默认为空',
      value: [],
      title2: '设置值',
      value2: ['广东省', '深圳市', '南山区'],
      value3: ['广东省', '中山市', '--'],
      addressData: ChinaAddressData,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区']
    }
  },
  methods: {
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    getName (value) {
      return value2name(value, ChinaAddressData)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    }
  }
}
</script>
<style media="screen">
.loanPeriodBanner {
  width: 100%;
  height: 2.94rem;
  background: url('./images/banner_highGrade_03.png');
  background-size: 100% 2.94rem;
}

.loanPeriodBanner div {
  color: #fff;
  text-align: center;
  line-height: 2.94rem;
  font-size: 0.46rem;
  color: rgba(255, 255, 255, 0.8);
}

.loanPeriodBanner div i {
  font-size: 0.6rem;
  color: #fff;
}

.loanPeriodLog {
  padding: 0.44rem 0 0 0.24rem;
  height: 1.3rem;
}

.loanPeriodLog .loanPeriodLxj,
.loanPeriodBank {
  float: left;
  width: 1.45rem;
  height: 0.4rem;
  background: url('./images/lxj_log_03.png') no-repeat;
  border-right: 1px solid #ccc;
  background-size: 1.18rem 0.34rem
}

.loanPeriodBank {
  margin-left: 0.2rem;
  background: url('./images/Guangzhou_nl_.png') no-repeat;
  background-size: contain;
  border: none;
}

.applicationLoan {
  text-align: center;
}

.applicationLoan .inputBox {
  color: #333;
  text-align: left;
  background: #fff;
}

.applicationQualification {
  height: 3.62rem;
  background: url('./images/loanPeriod_010.png');
  background-size: contain;
}

.applicationStep {
  height: 4.38rem;
  background: url('./images/loanPeriod_014.png');
  background-size: contain;
}

.loanCompute {
  margin-top: 0.67rem;
  text-align: center;
}

.loanCompute h3 {
  font-size: 0.31rem;
}

.loanCompute .computeAmount {
  position: relative;
}

.loanCompute .slectDate {
  position: relative;
}

.computeAmount input,
.slectDate input {
  text-align: left;
  background: #fff;
  color: #333;
}

.loanCompute .computeAmount i {
  position: absolute;
  font-size: 0.22rem;
  margin-top: 0.6rem;
  right: 0.5rem;
}

.loanCompute .slectDate i {
  position: absolute;
  font-size: 0.22rem;
  margin-top: 0.6rem;
  right: 0.5rem;
}

.perMonthInt {
  background: #fff;
  text-align: center;
  width: 7.02rem;
  height: 3.5rem;
  color: #666;
  overflow: hidden;
  margin: 0 auto;
  -moz-box-shadow: 0.02rem 0.02rem 0.06rem #B0B0B0;
  -webkit-box-shadow: 0.02rem 0.02rem 0.06rem #B0B0B0;
  box-shadow: 0.02rem 0.02rem 0.06rem #B0B0B0;
}

.perMonthIntTitle {
  font-size: 0.28rem;
}

.perMonthIntAmount {
  font-size: 0.31rem;
}

.perMonthInt p {
  margin-top: 0.15rem;
  color: #999;
  font-size: 0.18rem;
}

.perMonthIntTitle {
  margin-top: 0.47rem;
}

.perMonthIntDetai {
  margin-top: 0.93rem;
}

.blackBtn.applicationBtn {
  color: #fff
}

.loanMoney,
.costTotal,
.loanCycDate {
  float: left;
  font-size: 0.2rem;
  width: 33.33%;
}

.loanMoney i,
.costTotal i,
.loanCycDate i {
  margin-left: 0.15rem;
}

.loanSignal {
  height: 2.26rem;
  margin-top: 0.6rem;
  background: url('./images/loanStep_021.png') no-repeat;
  margin-left: 0.5rem;
  background-size: contain;
}

.Loanexplain {
  margin-left: 0.27rem;
  margin-top: 0.75rem;
}

.Loanexplain h3 {
  font-size: 0.22rem;
  color: #999;
  font-weight: 100;
  margin-bottom: 0.05rem;
}

.Loanexplain p {
  font-size: 0.2rem;
  height: 0.38rem;
}

.Loanexplain .m_t_60 {
  margin-bottom: 0.6rem;
}

.inputBox {
  width: 7.03rem;
  height: 1.02rem;
  font-size: 0.24rem;
  padding-left: 0.2rem;
  margin-top: 0.22rem;
  color: #ccc;
  -moz-box-shadow: 0.02rem 0.02rem 0.06rem #B0B0B0;
  -webkit-box-shadow: 0.02rem 0.02rem 0.06rem #B0B0B0;
  box-shadow: 0.02rem 0.02rem 0.06rem #B0B0B0;
}

.slectLoanCycle ul li {
  padding-left: 0.4rem;
  height: 0.86rem;
  line-height: 0.86rem;
  border-top: 1px solid #ccc;
  position: relative;
}

.slectLoanCycle ul li i {
  position: absolute;
  right: 0;
  margin-right: 0.15rem;
  font-size: 0.44rem;
}
</style>
