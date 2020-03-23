<template>
	<div class="detail">
		<header id="header">职位详情
			<div class="left" @click="gotoback">
				<span class="corner"></span>
			</div>
			<div class="right" @click="gotoindex">
				<span class="corner"></span>
			</div>
		</header>
		<div class="content">
			<div>
				欢迎投递ID是
				<br/>
				{{id}}
				<br/>
				的公司
			</div>
			<div class="fix_btn_group">
				<div class="deliver deliver_resume rows_bar" data-lg-tj-id="19v6" data-lg-tj-no="0020" data-lg-tj-cid="6722396" style="display: block;">投递简历</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Detail',
  data(){
  	return {
  		id:''
  	}
  },
  created(){
  	this.id=this.$route.query.id
  },
  methods:{
  	gotoback(){
  		this.$router.go(-1)
  	},
  	gotoindex(){
  		this.$router.push({ path: '/' })
  	}
  }
}
</script>

<style>
#header {
    height: 45px;
    line-height: 45px;
    background-color: #00b38a;
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
    position: relative;
}
#header .left:active {
    background-color: #f0f0f0;
}
#header .left {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 40px;
}
#header .left .corner {
    width: 9px;
    height: 20px;
    margin: 13px auto 0 auto;
    background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon2.png) no-repeat -1.5px -20.5px;
    background-size: 250px 250px;
    display: inline-block;
}
#header .right {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 40px;
}
#header .right .corner {
    width: 17px;
    height: 20px;
    margin: 13px auto 0 auto;
    background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon2.png) no-repeat -60px -46.5px;
    background-size: 250px 250px;
    display: inline-block;
}
.content {
    padding-bottom: 68px;
}
.content .fix_btn_group {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 44px;
    width: 92%;
    padding: 12px 4%;
    line-height: 44px;
    background-color: rgba(255,255,255,0.8);
}
.content .deliver {
    width: 100%;
    background-color: #00b38a;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    border-radius: 3px;
    display: none;
}
</style>