<template>
  <div class="custom">
		<div class="custom-info">
      <span class="info">
        10秒钟定制职位
      </span>
      <a class="go" href="#" target="_self">
        <em class="icon"></em>
        <em class="text">去登录</em>
      </a>
    </div>
    <ul class="list">
    	<!--模板编译，遍历json数据-->
    	<template v-for="list in lists">
	    	<li class="list-item" :data-positionid="list.positionId" :data-companyid="list.companyId">
	        <img :src="list.companyLogo" class="item-logo">
	        <div class="item-desc">
	        	<h2 class="item-title">{{list.companyName}}</h2>
	          <p class="item-info">
		          <span class="item-pos">
		            {{list.positionName}} [ {{list.city}} ]
		          </span>
	            <span class="item-salary">{{list.salary}}</span>
	          </p>
	          <p class="item-time">{{list.createTime}}</p>
	        </div>
	      </li>
	    </template>
	    <li class="list-more">加载更多</li>
    </ul>
    <div class="copyright">
    	<p>©2015 lagou.com, all right reserved </p>
    	<div class="copyright-item">
    		<span class="phone active">移动版&nbsp;·&nbsp;</span>
    		<span class="computer">电脑版&nbsp;·&nbsp;</span>
    		<a href="#">回顶部</a>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Custom',
  data () {
    return {
      lists: []
    }
  },
  created(){
  	this.$http.get('/static/1.json').then((res)=>{
//		console.log(res.body.content.data.page.result)
			this.lists=res.body.content.data.page.result
			
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.custom{

		width: 100%;
		height: 100%;
	}
	.custom .custom-info{
		border-bottom: 1px solid #e8e8e8;
    height: 43px;
    line-height: 43px;
    padding: 0 15px;
    color: #555;
    font-size: 0.95rem;
    position: relative;
	}
	.custom .custom-info .info{
		overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-right: 100px;
    height: 100%;
    position: relative;
    text-align: left;
	}
	.custom .custom-info .go{
		position: absolute;
    right: 15px;
    top: 0;
    display: block;
    float: right;
    background-color: #f5f5f5;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    margin-top: 6px;
    color: #00b38a;
    border-radius: 15px
	}
	a{
		outline: none;
    text-decoration: none;
	}
	.custom .custom-info .go .icon{
		width: 10px;
    height: 20px;
    background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon.png) no-repeat -88px 7px;
    background-size: 250px 250px;
    font-style: italic;
	}
	.custom .custom-info .go .text{
		font-style: normal;
	}
	.custom .list{
		margin: 0;
    list-style: none;
    -webkit-padding-start: 0;
    -moz-padding-start: 0;
    padding-start: 0;
  
	}
	.custom .list .list-item{
		padding: 14px;
    border-bottom: 1px solid #e8e8e8;
    display: list-item;
    text-align: -webkit-match-parent;
	}
	.custom .list .list-item:after{
		content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
	}
	.custom .list .list-item .item-logo{
		display: inline-block;
    float: left;
    width: 60px;
    height: 60px;
    border: none;
    outline: none;
    padding: 0;
	}
	.custom .list .list-item .item-desc{
		margin-left: 70px;
    height: 62px;
    color: #333;
	}
	.custom .list .list-item .item-desc .item-title{
		font-size: 1.05rem;
    margin-bottom: 6px;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0;
    text-align: left;
	}
	.custom .list .list-item .item-desc .item-info{
		margin-bottom: 6px;
    width: 100%;
    height: 15px;
    line-height: 15px;
    margin-top: 0;
	}
	.custom .list .list-item .item-desc .item-info .item-pos{
		font-size: 0.78rem;
    float: left;
    width: 60%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
	}
	.custom .list .list-item .item-desc .item-info .item-salary{
		font-size: 1.05rem;
    color: #00b38a;
    float: right;
	}
	.custom .list .list-item .item-desc .item-time{
		font-size: 0.65rem;
    color: #888;
    text-align: left;
    margin-bottom: 0;
    margin-top: 0;
	}
	.custom .list .list-more{
		height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 0.98rem;
    background-color: #fafafa;
    color: #333333;
	}
	.custom .copyright{
		text-align: center;
    font-size: 0.65rem;
    margin-top: 30px;
    padding-bottom: 85px;
    color: #333333;
	}
	.custom .copyright .copyright-item{
		height: 32px;
    line-height: 32px;
	}
	.custom .copyright .copyright-item .phone{
		color: #999;
	}
	.custom .copyright .copyright-item a{
		    color: #333;
	}
	p{
		margin-bottom: 0;
		margin-top: 0;
	}
</style>
