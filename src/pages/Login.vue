<template>
<div class="login">
	<section class="form_container" :style="{display: n}">
		<header class="form_header">
			<h2 class="login-title">登录拉勾</h2>
			<router-link  class="brother_link" to='/register'>注册</router-link>
		</header>
		<form class="form_body form_password" method="post">
			<div class="input_label account-wrap">
				<input type="text" placeholder="请输入已验证的手机号或邮箱" class="input_text user_input" @input="userphone">
			</div>
			<div class="input_label code-wrap">
				<input type="password" class="input_text password_input" placeholder="请输入密码" @input="userpassword">
			</div>
			<div class="input_label btn_group">
				<input type="submit" class="submit_btn" value="登录" @click="submit">
			</div>
		</form>
		<footer class="form_footer">
			<span class="signin_type_btn" @click="gotohpone">{{shoujihao}}</span>
		</footer>
	</section> 
	<section class="form_container active" :style="{display: n1}">
		<header class="form_header">
			<h2 class="login-title">登录拉勾</h2>
			<router-link  class="brother_link" to='/register'>注册</router-link>
		</header>
		<form class="form_body form_code" method="post">
			<div class="input_label phone_wrapper account-wrap">			
			<span class="area_code" @click="city">{{ph}}</span>
			<div class="area_code_list" :style="{display: phones?'block':'none'}">
			    <dl class="code_list_main">
			    	<dt>常用</dt>
			    	<dd data-code="0086" @click="phone">中国</dd>
			    	<dd data-code="00852" @click="phone">中国香港</dd>
			    	<dd data-code="00886" @click="phone">中国台湾</dd>
			    	<dd data-code="00853" @click="phone">中国澳门</dd>
			    	<dd data-code="001" @click="phone">美国</dd>
			    	<dt>A</dt>
			    	<dd data-code="0061" @click="phone">澳大利亚</dd>
			    	<dd data-code="00853" @click="phone">中国澳门</dd>
			    	<dd data-code="00353" @click="phone">爱尔兰</dd>
			    	<dt>B</dt>
			    	<dd data-code="0055" @click="phone">巴西</dd>
			    	<dt>D</dt>
			    	<dd data-code="0049" @click="phone">德国</dd>
			    	<dt>E</dt>
			    	<dd data-code="007" @click="phone">俄罗斯</dd>
			    	<dt>F</dt>
			    	<dd data-code="0033" @click="phone">法国</dd>
			    	<dt>H</dt>
			    	<dd data-code="0082" @click="phone">韩国</dd>
			    	<dt>J</dt>
			    	<dd data-code="001" @click="phone">加拿大</dd>
			    	<dt>M</dt>
			    	<dd data-code="0060" @click="phone">马来西亚</dd>
			    	<dd data-code="001" @click="phone">美国</dd>
			    	<dt>R</dt>
			    	<dd data-code="0081" @click="phone">日本</dd>
			    	<dt>T</dt>
			    	<dd data-code="00886" @click="phone">中国台湾</dd>
			    	<dd data-code="0066" @click="phone">泰国</dd>
			    	<dt>X</dt>
			    	<dd data-code="00852" @click="phone">中国香港</dd>
			    	<dd data-code="0065" @click="phone">新加坡</dd>
			    	<dd data-code="0064" @click="phone">新西兰</dd>
			    	<dt>Y</dt>
			    	<dd data-code="0091" @click="phone">印度</dd>
			    	<dd data-code="0044" @click="phone">英国</dd>
			    	<dt>Z</dt>
			    	<dd data-code="0086" @click="phone">中国</dd>
			    </dl>
			    <p class="tips">如果没有找到你所在的归属地，<br>请拨打客服电话<a href="tel:4006282835">4006282835</a> 解决。</p>
			</div>
			<input type="text" placeholder="请输入常用手机号" class="input_text phone_input" @input="userphone1" :class="{hong:hong}" @focus="focus" @blur="blur">
			</div>
			<div class="input_label code-wrap">
				<input type="text" class="input_text vcode_input" maxlength="6" placeholder="请输入收到的验证码">
				<input type="button" class="input_text vcode_link" value="获取验证码" placeholder="获取验证码" @click="yanzhengma">
			</div>
			<div class="input_label btn_group">
				<input type="submit" class="submit_btn" value="登录">
			</div>
		</form>
		<footer class="form_footer">
			<span class="signin_type_btn" @click="goutopassword">{{shoujihao}}</span>
		</footer>
	</section>
</div>
</template>

<script>
export default {
  name: 'Login',
  data(){
  	return {
  		shoujihao:'手机号登录',
  		n:'block',
  		n1:'none',
  		phones:false,
  		ph:'0086',
  		uesrph:'',
  		userpd:'',
  		uesrph1:'',
  		hong:false
  	}
  },
  methods:{
  	gotohpone(){
  		this.shoujihao='密码登录'
  		this.n='none'
  		this.n1='block'
  	},
  	goutopassword(){
  		this.shoujihao='手机号登录'
  		this.n='block'
  		this.n1='none'
  	},
  	city(){
  		this.phones=!this.phones
  	},
  	phone(e){
		this.phones=!this.phones
		this.ph=e.target.dataset.code
  	},
  	userphone(e){
  		this.uesrph=e.target.value
  	},
  	userpassword(e){
  		this.userpd=e.target.value
  	},
  	submit(e){
  		let _e=e
  		let user={'userphone':this.uesrph,'userpassword':this.userpd}
  		//console.log(user)
  		this.$http.get('/static/3.json').then((res)=>{
  			let users=res.body.content.data.page.result
  			let u=users.some(item=>{
				return (item.userphone==user.userphone && item.userpassword==user.userpassword)
			
			})
			if (u) {
					alert("登录成功");
				} else {
					_e.preventDefault()
					alert("账号或者密码密码错误");
				}
				

  		})

  	},
  	userphone1(e){
  		this.uesrph1=e.target.value
  	},
  	yanzhengma(){
  		if (!this.uesrph1) {
  			this.hong=true
  			alert("请输入手机号")
  		}
  	},
  	focus(){
  		this.hong=false
  	},
  	blur(){
  		let uesrph1=this.uesrph1
  		this.$http.get('/static/3.json').then((res)=>{
  			let users=res.body.content.data.page.result
  			let u=users.some(item=>{
				return item.userphone==uesrph1
			
			})
			if (!u) {
					alert("手机号未注册，请去注册");
				}
  		})
  	}
  }
}
</script>

<style>
	.login{
	    height: 100%;
	    box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    max-width: 750px;
	    padding: 1.98rem;
	    margin: 0 auto;
	}
	.form_header {
	    position: relative;
	    line-height: .69rem;
	}
	.form_header .login-title{
		color: #333;
	    font-size: 19px;
	    font-weight: 400;
	    margin: 5px 0 40px;
	    text-align: left;
	}
	.form_header .brother_link {
	    position: absolute;
	    right: 0;
	    top: 0;
	    font-size: 15px;
	    color: #00b38a;
	    text-decoration: none;
	}
	.input_label:first-child {
	    z-index: 2;
	}
	.input_label {
	    position: relative;
	    z-index: 0;
	}
	.input_text {
	    width: 100%;
	    box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    padding: 10px 0;
	    font-size: 17px;
	    color: #333;
	    border: 0;
	    border-bottom: 1px solid #E8E9EB;
	    outline: 0;
    	border-radius: 0;
	}
	.code-wrap{
		margin-top: 5px;
	}
	.btn_group{
		margin-top: 45px;
	}
	.input_label .submit_btn {
	    width: 100%;
	    height: 44px;
	    border-radius: 3px;
	    background-color: #00b38a;
	    color: #fff;
	    font-size: 16px;
	    border: 0;
	}
	.form_container .form_footer {
	    position: absolute;
	    bottom: 1.83rem;
	}
	.signin_type_btn {
	    color: #00b38a;
	    font-size: 16px;
	}
	.area_code {
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    z-index: 2;
	    width: 85px;
	    padding: 10px 15px 10px 0;
	    font-size: 18px;
	    line-height: 19px;
	    text-align: left;
	}
	.area_code:after {
	    transform: translateY(-50%);
	    display: inline-block;
	    content: "";
	    width: 0;
	    height: 0;
	    border-style: solid;
	    border-width: .21rem .2rem 0;
	    margin-left: .33rem;
	    border-color: #ccc transparent transparent;
	}
	.phone_input{
		padding-left: 85px;
	}
	.vcode_link {
	    position: absolute;
	    right: 0;
	    top: 0;
	    z-index: 2;
	    width: initial;
	    height: 40px;
	    padding: 0;
	    font-size: 14px;
	    color: #666;
	    border: 0;
	    background: 0 0;
	}
	.area_code_list {
	    position: fixed;
	    left: 0;
	    top: 0;
	    z-index: 10;
	    width: 100%;
	    height: 100%;
	    overflow-y: scroll;
	    background-color: #fff;
	}
	.area_code_list dl {
	    line-height: 36px;
	    cursor: default;
	    margin-top: 0;
    	margin-bottom: 0;
	}
	.area_code_list dt {
	    padding-left: 16px;
	    line-height: 19px;
	    color: #666;
	    background-color: #F9F9FA;
	    font-size: 12px;
	    text-align: left;
	}
	.area_code_list dd {
	    margin: 0;
	    padding-left: 13.8px;
	    line-height: 45px;
	    color: #333;
	    font-size: 16px;
	    box-shadow: inset 0 -1px 0 0 rgba(232,233,235,.5);
	    text-align: left;
	}
	.area_code_list .tips {
	    color: #999;
	    font-size: 12px;
	    padding: 30px 5px;
	    text-align: center;
	}
	.area_code_list .tips a {
	    color: #00b38a;
	    text-decoration: none;
	}
	.hong{
		border-color: red;
	}
</style>