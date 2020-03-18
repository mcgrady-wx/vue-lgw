<template>
  <div class="mine">
		<div class="logininfo">                     
      <div class="center">
      	<router-link to='/login' class="loginbut">登录 / 注册</router-link>
      </div>       
  	</div>
	  <div class="buttons"> 
	    <a class="button deliver" href="#">
	      <span>投递</span>
	    </a>
	    <a class="button interview" href="#">面试</a>
	    <a class="button invitation" href="#">
	      <span>邀约</span>
	    </a>
	    <a class="button collect" href="#">收藏</a>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.mine{

		margin-bottom: 45px;
    padding: 0 15px;
	}
	.mine .logininfo{
		margin: 10px 0;
	}
	.mine .logininfo .center{
		height: 111px;
		text-align: center;
    width: 125px;
    margin: 0 auto;
	}
	.mine .logininfo .center .loginbut{
		font-size: 0.91rem;
    color: #fff;
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    margin: 0 auto;
    background-color: #1fc8a1;
    position: relative;
    top: 33px;
	}
	a{
		outline: none;
    text-decoration: none;
	}
	.mine .buttons{
		margin-bottom: 10px;
	}
	.mine .buttons .button{
		display: block;
    width: 48%;
    height: 86px;
    line-height: 86px;
    background-color: #1fc8a1;
    text-align: center;
    color: #fff;
    font-size: 1rem;
    margin-top: 10px;
    position: relative;
	}
	.mine .buttons .deliver{
		float: left;
	}
	.mine .buttons .interview {
    float: right;
	}
	.mine .buttons .invitation {
    float: left;
	}
	.mine .buttons .collect {
    float: right;
	}
</style>
