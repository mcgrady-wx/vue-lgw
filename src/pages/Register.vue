<template>
<div class="register">
		<section class="form_container active">
		<header class="form_header">
			<h2 class="register-title">注册拉勾</h2>
			<router-link  class="brother_link" to='/login'>登录</router-link>
		</header>
		<form class="form_body form_code" method="post">
			<div class="input_label phone_wrapper account-wrap">			
			<span class="area_code" @click="city">{{hao}}</span>
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
			<input type="text" placeholder="请输入常用手机号" class="input_text phone_input">
			</div>
			<div class="input_label code-wrap">
				<input type="text" class="input_text vcode_input" maxlength="6" placeholder="请输入收到的验证码">
				<input type="button" class="input_text vcode_link" value="获取验证码" placeholder="获取验证码">
			</div>
			<div class="input_label btn_group">
				<input type="submit" class="submit_btn" value="注册">
			</div>
			<div class="register_agreement">注册拉勾代表你已同意<a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a></div>
		</form>
	</section>
</div>
</template>

<script>
export default {
  name: 'Register',
  data(){
  	return {
  		hao:'0086',
  		phones:false
  	}
  },
  methods:{
  	city(){
  		this.phones=!this.phones
  	},
  	phone(e){
		this.phones=!this.phones
		this.hao=e.target.dataset.code
  	}
  }
}
</script>

<style>
	.register{
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
	.form_header .register-title{
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
	.register_agreement {
	    color: #999;
	    font-size: 14px;
	    margin-top: 20px;
	    text-align: left;
	}
	.register_agreement a {
	    color: #666;
	    text-decoration: none;
	}
</style>