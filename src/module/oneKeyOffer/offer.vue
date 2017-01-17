<template>
<div id="app" class="jy_layout">
  <div class="jy_banner">
    <img src="./images/index_zxgl_img2-3.jpg" alt="">
  </div>
  <div class="main">
    <div class="room">
      <div class="roomArea">
        <!-- <input  type="number" > -->
        <input class='introduceArea' v-model="roomArea" type="tel" @blur="getRoomConfiguration" onkeyup="value=value.replace(/[^\d]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" placeholder="请输入你的房屋面积"
            maxlength="5" />
        <i>㎡</i>
      </div>
      <div class="selectDoule">
        <div class="SelectRoom" v-on:click=" setType( 'room')" v-bind:roomIndex="modal.index.room">
          <i class="chooseRoom">{{modal.initialise.room}}</i>
          <i class="icon iconfont icon-sanjiao "></i>
        </div>
        <div class="SelectHall" v-on:click="setType( 'hall')" v-bind:HallIndex="modal.index.hall">
          <i class='chooseHall'>{{modal.initialise.hall}}</i>
          <i class="icon iconfont icon-sanjiao "></i></div>
      </div>
      <div class="selectThree ">
        <div class="selectKitchen " v-on:click="setType( 'kitchen')" v-bind:kitchenIndex="modal.index.kitchen">
          <i class="chooseCF">{{modal.initialise.kitchen}}</i>
          <i class="icon iconfont icon-sanjiao"></i></div>
        <div class="selectToilet" v-on:click="setType('toilet')" v-bind:toiletIndex="modal.index.toilet">
          <i class=" chooseWc ">{{modal.initialise.toilet}}</i>
          <i class="icon iconfont icon-sanjiao "></i></div>
        <div class="selectBalcony " v-on:click="setType( 'balcony')" v-bind:balconyIndex="modal.index.balcony">

          <i class="chooseYd">{{modal.initialise.balcony}}</i>
          <i class="icon iconfont icon-sanjiao"></i></div>
      </div>
      <input type="text" placeholder="请输入号码，稍后设计师将会给您回电" class="sendIphone">
    </div>
    <div class='mainBotton'>
      <input type="button" class="Selectcount" value="立即计算" @click="getKeyOffer">
    </div>
  </div>
  <div class="showPic">
    <div class="decoratePrice clearfix">
      <div class="circle">
        <p>装修报价</p>
        <i class='circlePrice'>{{modal.offer.totalPrice}} 元</i>
      </div>
      <div class="classify">
        <div class="classify_1">
          <div class="artificial">
            <p>人工费</p>
            <i class='artificialPrice'>{{modal.offer.labour_fee}}元</i>
          </div>
          <div class="material">
            <p>材料费</p>
            <i class='materialPrice'>{{modal.offer.material_fee}}元</i>
          </div>
        </div>
        <div class="classify_2">
          <div class="design">
            <p>设计费</p>
            <i class='designPrice'>{{modal.offer.design_fee}}元</i>
          </div>
          <div class="quality">
            <p>质检费</p>
            <p class='qualityPrice'>{{modal.offer.qc_fee}}元</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="jy_footer">
    <p>*稍后关键将回电您, 免费提供装修咨询服务</p>
    <p class='footer_t1'>*因材料品牌以及工程量不同, 具体报价以量房实测为准</p>
  </div>

  <div v-on:click="modalSwitch" class="overlay" v-show="!modal.show">

    <div class="elasticLayer">
      <div class="title">
        <div class="pic"></div>
        <span></span>
        <div class="mask"></div>
      </div>
      <div class="elasticLayerContent housingAllocation">
        <ul>
          <li v-if="'room' === modal.type" v-for="(item, index) in modal.initialise.roomList" v-on:click="selctRoom(item, index)">
            <span>{{item}}</span>
            <i class="icon iconfont" :class="{'icon-checked': modal.activeName == item}"></i>
          </li>
          <li v-if="'hall' === modal.type" v-for="(item, index) in modal.initialise.hallList" v-on:click="selctHall(item, index)">
            <span>{{item}}</span>
            <i class="icon iconfont" :class="{'icon-checked': modal.activeName == item}"></i>
          </li>
          <li v-if="'kitchen' === modal.type" v-for="(item, index) in  modal.initialise.kitchenList" v-on:click="selctKitchen(item, index)">
            <span>{{item}}</span>
            <i class="icon iconfont" :class="{'icon-checked': modal.activeName == item}"></i>
          </li>
          <li v-if="'toilet' === modal.type" v-for="(item, index) in modal.initialise.toiletList" v-on:click="selctToilet(item, index)">
            <span>{{item}}</span>
            <i class="icon iconfont" :class="{'icon-checked': modal.activeName == item}"></i>
          </li>
          <li v-if="'balcony' === modal.type" v-for="(item, index) in modal.initialise.balconyList" v-on:click="selctBalcony(item, index)">
            <span>{{item}}</span>
            <i class="icon iconfont" :class="{'icon-checked': modal.activeName == item}"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import Toast from 'mint-ui/lib/toast';
import 'mint-ui/lib/style.css'

export default {
  data: function() {
    return {
      roomArea: '',
      modal: {
        show: true,
        type: 'room',
        activeName: '',
        offer : {
            totalPrice : 0 , //总价
            labour_fee : 0 , // 人工费
            material_fee : 0 , // 材料费
            design_fee : 0 , // 设计费
            qc_fee : 0 , // 质检费
        },
        index: {
          room: 0,
          hall: 0,
          kitchen: 0,
          toilet: 0,
          balcony: 0
        },
        initialise: {
          room: '一室',
          roomList: '',
          hall: '零厅',
          hallList: '',
          kitchen: '一厨',
          kitchenList: '',
          toilet: '一卫',
          toiletList: '',
          balcony: '零阳台',
          balconyList: ''
        }
      },
      items: {
        room: ["一室", "二室", "三室", "四室", "五室", "六室", "七室"],

        hall: [
          "零厅", "一厅", "二厅", "三厅", "四厅", "五厅", "六厅"
        ],
        kitchen: [
          "一厨", "二厨", "三厨", "四厨", "五厨", "六厨", "七厨"
        ],
        toilet: [
          "一卫", "二卫", "三卫", "四卫", "五卫", "六卫", "七卫"
        ],
        balcony: [
          "零阳台", "一阳台", "二阳台", "三阳台", "四阳台", "五阳台", "六阳台"
        ]
      }
    }
  },
  methods: {
    modalSwitch: function(event) {
      this.modal.show = !this.modal.show;
    },
    getRoomConfiguration: function() {
      this.modal.initialise.room = '一室';
      this.modal.index.room = 0;
      this.modal.initialise.kitchen = '一厨';
      this.modal.index.kitchen = 0;
      this.modal.initialise.toilet = '一卫';
      this.modal.index.toilet = 0;

      if (this.roomArea >= 50) {
        this.modal.index.hall = 1
        this.modal.initialise.hall = '一厅'
      } else {
        this.modal.index.hall = 0
        this.modal.initialise.hall = '零厅'
      }

      if (this.roomArea >= 70) {
        this.modal.index.balcony = 1
        this.modal.initialise.balcony = '一阳台'
      } else {
        this.modal.index.balcony = 0
        this.modal.initialise.balcony = '零阳台'
      }


    },
    setActiveName: function(item) {
      this.modal.activeName = item;
    },
    selctRoom: function(item, index) {
      this.setActiveName(item);
      this.modal.index.room = index;
      this.modal.initialise.room = item;
    },
    selctHall: function(item, index) {
      this.setActiveName(item);
        if (this.roomArea >= 50) {
          index++
      }

      this.modal.index.hall = index;
      this.modal.initialise.hall = item;
    },
    selctKitchen: function(item, index) {
      this.setActiveName(item);
      this.modal.index.kitchen = index;
      this.modal.initialise.kitchen = item;
    },
    selctToilet: function(item, index) {
      this.setActiveName(item);
      this.modal.index.toilet = index;
      this.modal.initialise.toilet = item;
    },
    selctBalcony: function(item, index) {
      this.setActiveName(item);
      if (this.roomArea >= 70) {
        index++
    }
      this.modal.index.balcony = index;
      this.modal.initialise.balcony = item;
    },
    setType: function(type) {
      var AreaVal = this.roomArea;

        if (AreaVal.length == 0 || AreaVal <= 30) {
          Toast('请输入大于30㎡面积');
          return;
        }

      if (AreaVal <= 40 && type == "balcony") {
        Toast('没有更多阳台');
        return;
      }

      if (30 <= AreaVal && AreaVal < 40) {
        //室,厅,厨,卫,,阳
        this.gather(2, 2, 1, 1, 0)
      } else if (40 <= AreaVal && AreaVal < 50) {

        this.gather(2, 2, 1, 1, 2)
      } else if (50 <= AreaVal && AreaVal < 60) {

        this.gather(2, 3, 1, 1, 2)
      } else if (60 <= AreaVal && AreaVal < 70) {

        this.gather(3, 3, 1, 1, 3)
      } else if (70 <= AreaVal && AreaVal < 90) {

        this.gather(4, 3, 1, 2, 3)
      } else if (90 <= AreaVal && AreaVal < 110) {

        this.gather(4, 4, 1, 2, 4)

      } else if (110 <= AreaVal && AreaVal < 120) {

        this.gather(4, 4, 2, 3, 4)
      } else if (120 <= AreaVal && AreaVal < 130) {

        this.gather(5, 4, 2, 3, 5)
      } else if (130 <= AreaVal && AreaVal < 150) {

        this.gather(6, 4, 2, 4, 5)
      } else if (150 <= AreaVal) {

        this.gather(7, 5, 3, 5, 6)
      }

      this.modal.type = type
      this.modalSwitch();
    },
    gather: function(room, hall, kitchen, toilet, balcony) {
      var hallStrat = 0;
      var balconyStrat = 0;
      var hallEnd = hallStrat + hall;
      var balconyEnd = balconyStrat + balcony;
      var AreaVal = this.roomArea;

      if (AreaVal >= 50) {
        hallStrat++
      }

      if (AreaVal >= 70) {
        balconyStrat++
      }
      this.modal.initialise.roomList = this.items.room.slice(0, room)
      this.modal.initialise.hallList = this.items.hall.slice(hallStrat, hallEnd)
      this.modal.initialise.kitchenList = this.items.kitchen.slice(0, kitchen)
      this.modal.initialise.toiletList = this.items.toilet.slice(0, toilet)
      this.modal.initialise.balconyList = this.items.balcony.slice(balconyStrat, balconyEnd)
    },

    /*一键报价*/
    getKeyOffer: function() {

      //   if ( this.roomArea<30 ) {
      //       Toast("请输入大于30㎡面积")
      //       return;
      //   }
     //Math.round


      var reduceRatio = 0 ; // 总价增加率
      var labourRatio = 0.42 //人工比率
      var materialRatio = 0.52 //材料比率
      var roomTypeCount = this.modal.index.kitchen +  this.modal.index.toilet ; //卫生间和厨房
      console.log(roomTypeCount);

      if ( roomTypeCount > 0 ) {
         reduceRatio =  roomTypeCount * 0.0625;
         labourRatio =labourRatio + (roomTypeCount  * 0.01) ;
         materialRatio =materialRatio - (roomTypeCount  * 0.01) ;
      }

      var totalPrice = ( 480 * (reduceRatio + 1) ) * this.roomArea; // 总价
      var labour_fee = labourRatio * totalPrice;   // 人工费
      var material_fee = materialRatio *  totalPrice // 材料费
      var design_fee = 0.04 * totalPrice// 设计费
      var qc_fee = 0.02 * totalPrice// 质检费

      this.modal.offer.totalPrice = Math.round(totalPrice)
      this.modal.offer.labour_fee =  Math.round(labour_fee)
      this.modal.offer.material_fee = Math.round(material_fee)
      this.modal.offer.design_fee = Math.round(design_fee)
      this.modal.offer.qc_fee =  Math.round(qc_fee)

      console.log( '总价=='+ Math.round(totalPrice) + " , " ,
      '人工费='+ Math.round(labour_fee) + " , " ,
      '材料费='+ Math.round(material_fee) + " , " ,
      '设计费='+ Math.round(design_fee) + " , " ,
      '质检费='+ Math.round(qc_fee) + " , ",
      '室='+ (this.modal.index.room + 1) + " , ",
      '厅='+ this.modal.index.hall + " , ",
      '厨='+ (this.modal.index.kitchen + 1) + " , ",
      '卫='+ (this.modal.index.toilet + 1) + " , ",
      '阳='+ this.modal.index.balcony + " , ",
       );
    }
  }
}
</script>

<style>
.overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.41);
  z-index: 100;
}


/*弹窗开始*/

.elasticLayer {
  width: 6.33rem;
  border-radius: 0.1rem;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
}

.elasticLayer .title {
  width: 100%;
  height: 100%;
  position: relative;
}

.elasticLayerContent {
  background: #fff;
}

.elasticLayer .title .pic {
  width: 100%;
  height: 1.35rem;
  background: url('/static/images/layerPic_8.png');
  background-size: contain;
}

.elasticLayer .title .mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 11;
}


/*弹窗结束*/

.housingAllocation ul li {
  height: 0.88rem;
  line-height: 0.88rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.22rem;
  margin: 0 0.3rem;
  padding: 0 0.24rem;
  display: flex;
  justify-content: space-between;
}

.housingAllocation ul li span {
  font-size: 0.22rem;
}

.housingAllocation ul li i {
  font-size: 0.45rem;
}
</style>
