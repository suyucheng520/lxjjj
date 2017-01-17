import Vue from 'vue'
import Headers from 'components/common/Headers'
import Navbar from 'components/common/Navbar'
import Swiper from './Swiper'
import Menucolumn from './Menucolumn'


import 'common/css/common.css';
import 'common/js/common.js';
// import 'common/css/iconfont.css';

// import MintUI from 'mint-ui'
// import Swiper from 'vux/src/plugins/Swiper'
// console.log(Swiper)
// Vue.use(MintUI)

// console.log(Swiper);


new Vue({
	el: '#container',
	components: {
		Headers,Navbar,Swiper,Menucolumn
	}
});
