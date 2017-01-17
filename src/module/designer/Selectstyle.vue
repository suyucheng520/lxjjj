<template >
    <div>
          <tab :line-width=0 active-color='#131217' v-model="index"  @click="showSwiper">
           <tab-item class="vux-center" :selected="demo2 === item" v-for="item in list2">{{item}}<i class="icon iconfont icon-daosanjiao"></i></tab-item>
         </tab>
         <swiper v-model="index"  :show-dots="false" >
           <swiper-item v-for="item in list2">
             <div class="tab-swiper vux-center" >{{item}} Container</div>
              <checklist :title="$t('中国')" :max="3" :options="asyncList" v-model="asyncListValue" @on-change="change"></checklist>
           </swiper-item>
         </swiper>
       </div>
</template>
<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
import { Group, Checklist, Cell } from 'vux'
const list = () => ['风格', '户型', '面积']

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Group,
    Checklist,
    Cell
  },
  data () {
    return {
      list2: list(),
      index: 0
    }
  },
  methods: {
    showSwiper(){
        console.log('123')
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding: 15px;
}

.tab-swiper {
  background-color: #fff;
  height: 100px;
}
.vux-tab {
  margin-top: 0.4rem;
}
.vux-center {
  font-size: 0.27rem;
}
.vux-center .icon {
  font-size: 0.1rem;
  margin-left: 0.07rem;
}
</style>
