<template>
	<div class="footer">
		<div data-name="职位" data-index="0" data-type="custom" class="footer-tab-custom" @click="handlecustom" :class="selected=='custom'?'selected':''">
			<span class="icon" data-type="custom" :class="selected=='custom'?'selected':''"></span>
			<span class="text" data-type="custom">职位</span>
		</div>
		<div data-name="搜索" data-index="1" data-type="search" class="footer-tab-search" :class="selected=='search'?'selected':''" @click="handlecustom">
			<span class="icon" :class="selected=='search'?'selected':''" data-type="search"></span>
			<span class="text" data-type="search">搜索</span>
		</div>
		<div data-name="我的" data-index="2" data-type="mine" class="footer-tab-mine" :class="selected=='mine'?'selected':''" @click="handlecustom">
			<span class="icon" :class="selected=='mine'?'selected':''" data-type="mine"></span>
			<span class="text" data-type="mine">我的</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      selected: 'custom'
    }
  },
  methods:{
  	handlecustom(e){	
//		console.log(e.target.dataset.type)
		this.selected=e.target.dataset.type;
  	}
  }
}
</script>

<style>
	.footer{
		width: 100%;
	    height: 45px;
	    line-height: 45px;
	    border-top: 1px solid #e8e8e8;
	    background-color: #f6f6f6;
	    color: #c2cfcc;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    z-index: 999;
	    display: -moz-box;
    	display: -webkit-box;
    	display: box;
	    font-size: 1rem;
	}
	.footer div{
		height: 100%;
		-moz-box-flex: 1;
    	-webkit-box-flex: 1;
	    box-flex: 1;
	    text-align: center;

	}
	.footer .icon{
		display: inline-block;
    	width: 18px;
    	height: 17px;
    	margin-bottom: -2px;
	}
	.footer .selected{
		color: #00b38a;
    	background-color: #e7f3f0;
	}
	.footer .footer-tab-custom .icon{
		background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon2.png) no-repeat -32px -2.5px;
    	background-size: 250px 250px;
	}
	.footer .footer-tab-search .icon{
		background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon2.png) no-repeat -14px -2.5px;
    	background-size: 250px 250px;
	}
	.footer .footer-tab-mine .icon{
		background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon2.png) no-repeat -52.5px -2px;
    	background-size: 250px 250px;
	}
	.footer .footer-tab-custom .selected{
		background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon2.png) no-repeat -32px -20.5px;
    	background-size: 250px 250px;
	}
	.footer .footer-tab-search .selected{
		background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon2.png) no-repeat -14px -20.5px;
    	background-size: 250px 250px;
	}
	.footer .footer-tab-mine .selected{
		background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon2.png) no-repeat -52.5px -20px;
    	background-size: 250px 250px;
	}
</style>