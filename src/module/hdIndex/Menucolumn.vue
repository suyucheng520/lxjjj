<template >
<div class="content">
  <div class="left">
    <a class="" href="/do?g=home&amp;m=product&amp;a=index">
      <img src="./images/index_img_01@2x.png">
      <span class="left-fs">建材甄选</span>
    </a>
  </div>
  <div class="right">
    <div class="top">
      <a class="top-des" href="./designer.html">
        <span class="top-fs">设计案例</span>
      </a>
      <a class="top-offer" href="./oneKeyOffer.html">
        <img src="./images/index_img_03@2x.png">
        <span class="top-fs">智能报价</span>
      </a>
    </div>
    <div class="bottom">
      <a class="bom-zxgl" href="/do?g=home&amp;m=article&amp;a=zxgl">
        <img src="./images/index_img_02@2x.png">
        <span class="bom-zxgl-fs">装修攻略</span>
      </a>
      <a class="bom-loan" href="./load.html">
        <span class="bom-loan-fs">装修贷</span>
      </a>
    </div>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style >
/*装修内容*/
.content{
	width: 100%;
	height: 3.4rem;
	display: -webkit-flex;
	display: flex;
}
.content .left{
	width: 25%;
	height: 100%;
}
.content .left a{
	position: relative;
    width: 100%;
    height: 100%;
}
.content .left a img,.content .right a img{
    width: 100%;
    height: 100%;
}
.content .left a .left-fs{
    position: absolute;
    bottom: 0.73rem;
    font-size: 0.28rem;
    color: #666;
    padding: 0 0.36rem;
}
.content .right{
	width: 75%;
	height: 100%;
}
.content .right .top,.content .right .bottom{
	height: 50%;
	display: flex;
}
.content .right .top .top-des,.content .right .bottom .bom-loan{
    width: 33.33%;
    height: 100%;
    background: #f2f2f2;
    position: relative;
}
.content .right .top-fs,
.right .bom-loan .bom-loan-fs,
.right .bom-zxgl .bom-zxgl-fs{
	position: absolute;
	font-size:0.28rem ;
	color: #666;
	bottom: 0.73rem;
	left: 0.38rem;
}
.content .right .top-offer,.content .right .bom-zxgl{
	width: 66.67%;
	height: 100%;
	position: relative;
}
.right .bom-zxgl .bom-zxgl-fs{
	right: 0.5rem;
	text-align: right;
}
.right .bom-loan .bom-loan-fs{
	left: 0.5rem;
}
</style>
