<template >
   <div >
       <swiper>
           <swiper-item class="swiper-demo-img" ><img class="bannerPic" src="./images/index_banner_01@2x.png" ></swiper-item>
          <swiper-item class="swiper-demo-img" ><img class="bannerPic" src="./images/index_banner_02@2x.png" ></swiper-item>
          <swiper-item class="swiper-demo-img" ><img class="bannerPic" src="./images/index_banner_03@2x.png" ></swiper-item>
       </swiper>
   </div>
</template>
<script>
import Vue from 'vue'
import 'common/js/common.js';
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

export default{
    components: {
        Swiper,
        SwiperItem,
        GroupTitle,
        XButton,
        Divider
 }
}

</script>
<style >
.vux-swiper {
  height:3.82rem!important;
}
.bannerPic {
  width: 100%;
  height: 100%;
}
</style>
