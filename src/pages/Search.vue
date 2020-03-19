<template>
  <div class="search">
		<div class="linputer">
      <div class="lbutton" @click="fulldialogshow">
        <span class="city">{{full}}</span>
        <span class="cityicon"></span>
      </div>
	    <div class="rinput">
	      <input class="inputer" type="text" placeholder="搜索职位或公司" @input="inputvalue"/>
	      <span class="search" @click="searchlist"><em class="searchicon"></em></span>
	    </div>
    </div>
    <div class="listcon" :style="{ display: show}">
    	<div class="custominfo">
       	 将搜索地区和关键词设为定制条件
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
    </div>
    <div id="fulldialog-conid-1" class="fdialog-content" :style="{display:fulldialog}">
    	<div class="fdialog-rcon">
    		<div class="cities-header">热门城市</div>
    		<table class="cities-list">
    			<template v-for="rm in remen">
	    			<tr class="cities-list-item">
	    				<td class="activeable cities-item" :data-item="rm.a" @click="handleclick">{{rm.a}}</td>
	    				<td class="activeable cities-item" :data-item="rm.b" @click="handleclick">{{rm.b}}</td>
	    				<td class="activeable cities-item" :data-item="rm.c" @click="handleclick">{{rm.c}}</td>
	    			</tr>
    			</template>
    		</table>
    		<div class="cities-header">ABCDEF</div>
    		<table class="cities-list">
    			<template v-for="af in atof">
	    			<tr class="cities-list-item">
	    				<td class="activeable cities-item" :data-item="af.a" @click="handleclick">{{af.a}}</td>
	    				<td class="activeable cities-item" :data-item="af.b" @click="handleclick">{{af.b}}</td>
	    				<td class="activeable cities-item" :data-item="af.c" @click="handleclick">{{af.c}}</td>
	    			</tr>
	    		</template>	
    		</table>
    		<div class="cities-header">GHIJ</div>
    		<table class="cities-list">
    			<template v-for="gj in gtoj">
	    			<tr class="cities-list-item">
	    				<td class="activeable cities-item" :data-item="gj.a" @click="handleclick">{{gj.a}}</td>
	    				<td class="activeable cities-item" :data-item="gj.b" @click="handleclick">{{gj.b}}</td>
	    				<td class="activeable cities-item" :data-item="gj.c" @click="handleclick">{{gj.c}}</td>
	    			</tr>
	    		</template>	
    		</table>
    		<div class="cities-header">KLMN</div>
    		<table class="cities-list">
    			<template v-for="kn in kton">
	    			<tr class="cities-list-item">
	    				<td class="activeable cities-item" :data-item="kn.a" @click="handleclick">{{kn.a}}</td>
	    				<td class="activeable cities-item" :data-item="kn.b" @click="handleclick">{{kn.b}}</td>
	    				<td class="activeable cities-item" :data-item="kn.c" @click="handleclick">{{kn.c}}</td>
	    			</tr>
	    		</template>	
    		</table>
    		<div class="cities-header">OPQR</div>
    		<table class="cities-list">
    			<template v-for="or in otor">
	    			<tr class="cities-list-item">
	    				<td class="activeable cities-item" :data-item="or.a" @click="handleclick">{{or.a}}</td>
	    				<td class="activeable cities-item" :data-item="or.b" @click="handleclick">{{or.b}}</td>
	    				<td class="activeable cities-item" :data-item="or.c" @click="handleclick">{{or.c}}</td>
	    			</tr>
	    		</template>	
    		</table>
    		<div class="cities-header">STUV</div>
    		<table class="cities-list">
    			<template v-for="sv in stov">
	    			<tr class="cities-list-item">
	    				<td class="activeable cities-item" :data-item="sv.a" @click="handleclick">{{sv.a}}</td>
	    				<td class="activeable cities-item" :data-item="sv.b" @click="handleclick">{{sv.b}}</td>
	    				<td class="activeable cities-item" :data-item="sv.c" @click="handleclick">{{sv.c}}</td>
	    			</tr>
	    		</template>	
    		</table>
    		<div class="cities-header">WXYZ</div>
    		<table class="cities-list">
    			<template v-for="wz in wtoz">
	    			<tr class="cities-list-item">
	    				<td class="activeable cities-item" :data-item="wz.a" @click="handleclick">{{wz.a}}</td>
	    				<td class="activeable cities-item" :data-item="wz.b" @click="handleclick">{{wz.b}}</td>
	    				<td class="activeable cities-item" :data-item="wz.c" @click="handleclick">{{wz.c}}</td>
	    			</tr>
	    		</template>	
    		</table>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      lists: [],
      show:'none',
      fulldialog:'none',
      full:'全国',
      remen:[{'a':'北京','b':'上海','c':'广州'},{'a':'深圳','b':'成都','c':'杭州'}],
      atof:[{'a':'鞍山','b':'蚌埠','c':'保定'},{'a':'北京','b':'包头','c':'滨州'},{'a':'亳州','b':'长春','c':'成都'},{'a':'常德','b':'赤峰','c':'重庆'},{'a':'长沙','b':'常州','c':'沧州'},{'a':'潮州','b':'郴州','c':'东莞'},{'a':'大连','b':'大庆','c':'德阳'},{'a':'东营','b':'德州','c':'佛山'},{'a':'阜阳','b':'福州','c':''}],
      gtoj:[{'a':'桂林','b':'贵阳','c':'广州'},{'a':'赣州','b':'淮安','c':'邯郸'},{'a':'哈尔滨','b':'合肥','c':'黄冈'},{'a':'呼和浩特','b':'海口','c':'衡水'},{'a':'海外','b':'衡阳','c':'河源'},{'a':'杭州','b':'惠州','c':'菏泽'},{'a':'湖州','b':'金华','c':'九江'},{'a':'吉林','b':'江门','c':'济南'},{'a':'济宁','b':'嘉兴','c':'晋中'},{'a':'焦作','b':'荆州','c':''}],
      kton:[{'a':'开封','b':'昆明','c':'六安'},{'a':'聊城','b':'廊坊','c':'拉萨'},{'a':'丽水','b':'临沂','c':'洛阳'},{'a':'连云港','b':'兰州','c':'柳州'},{'a':'马鞍山','b':'茂名','c':'绵阳'},{'a':'梅州','b':'宁波','c':'南昌'},{'a':'南充','b':'南京','c':'南宁'},{'a':'南通','b':'南阳','c':''}],
      otor:[{'a':'盘锦','b':'莆田','c':'萍乡'},{'a':'濮阳','b':'青岛','c':'秦皇岛'},{'a':'清远','b':'泉州','c':'衢州'},{'a':'日照','b':'','c':''}],
      stov:[{'a':'韶关','b':'上海','c':'石家庄'},{'a':'宿迁','b':'上饶','c':'汕头'},{'a':'绍兴','b':'沈阳','c':'三亚'},{'a':'深圳','b':'苏州','c':'泰安'},{'a':'天津','b':'唐山','c':'太原'},{'a':'台州','b':'泰州','c':''}],
      wtoz:[{'a':'潍坊','b':'武汉','c':'芜湖'},{'a':'威海','b':'乌鲁木齐','c':'无锡'},{'a':'温州','b':'西安','c':'许昌'},{'a':'孝感','b':'香港特别行政区','c':'厦门'},{'a':'西宁','b':'邢台','c':'湘潭'},{'a':'新乡','b':'咸阳','c':'襄阳'},{'a':'徐州','b':'宜宾','c':'银川'},{'a':'盐城','b':'宜昌','c':'宜春'},{'a':'烟台','b':'岳阳','c':'扬州'},{'a':'淄博','b':'珠海','c':'湛江'},{'a':'镇江','b':'张家口','c':'周口'},{'a':'驻马店','b':'肇庆','c':'中山'},{'a':'遵义','b':'郑州','c':'株洲'},{'a':'漳州','b':'','c':''}],
    }
  },
  methods:{
  	searchlist(){
  		this.$http.get('/static/2.json').then((res)=>{
				//console.log(res.body.content.data.page.result)
				this.lists=res.body.content.data.page.result
				
	  	})
  		this.show='block'
  	},
  	inputvalue(e){
  		if(!e.target.value){
  			this.show='none'
  		}
  	},
  	fulldialogshow(){
  		this.fulldialog='block'
  	},
  	handleclick(e){
  		//console.log(e.target.dataset.item)
  		this.fulldialog="none"
  		this.full=e.target.dataset.item
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.search{
		margin-bottom: 45px;
		width: 100%;
		height: 100%;
	}
	.search .linputer{
		position: relative;
    border-bottom: 1px solid #e8e8e8;
    height: 45px;
	}
	.search .linputer .lbutton{
		float: left;
    height: 45px;
    line-height: 45px;
    font-size: 0.98rem;
    text-align: center;
    width: 88px;
    border-right: 1px solid #e8e8e8;
    color: #333;
	}
	.search .linputer .lbutton span{
		display: inline-block;
	}
	.search .linputer .lbutton .cityicon{
		width: 8.5px;
    height: 7px;
    background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon.png) no-repeat -1px -2.5px;
    background-size: 250px 250px;
	}
	.search .linputer .rinput{
		height: 45px;
    margin-left: 89px;
    position: relative;
	}
	.search .linputer .rinput .inputer{
		display: block;
    border: none;
    padding: 10px 0;
    height: 25px;
    line-height: 25px;
    color: #333333;
    width: 75%;
    margin: 0 0 0 5%;
    font-size: 0.98rem;
    float: left;
    outline: none;
	}
	.search .linputer .rinput .search{
		display: inline-block;
    width: 20%;
    height: 45px;
    line-height: 45px;
    float: right;
    position: relative;
	}
	.search .linputer .rinput .search .searchicon{
		display: block;
    margin: 14px auto 0 auto;
    width: 17px;
    height: 17px;
    background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon.png) no-repeat -14px -2.5px;
    background-size: 250px 250px;
	}
	.search .listcon .custominfo{
		height: 35px;
    line-height: 35px;
    font-size: 0.91rem;
    color: #5d897e;
    background-color: #e7f7f3;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 14px;
	}
	.search .listcon .list{
		margin: 0;
    list-style: none;
    -webkit-padding-start: 0;
    -moz-padding-start: 0;
    padding-start: 0;
  
	}
	.search .listcon .list .list-item{
		padding: 14px;
    border-bottom: 1px solid #e8e8e8;
    display: list-item;
    text-align: -webkit-match-parent;
	}
	.search .listcon .list .list-item:after{
		content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
	}
	.search .listcon .list .list-item .item-logo{
		display: inline-block;
    float: left;
    width: 60px;
    height: 60px;
    border: none;
    outline: none;
    padding: 0;
	}
	.search .listcon .list .list-item .item-desc{
		margin-left: 70px;
    height: 62px;
    color: #333;
	}
	.search .listcon .list .list-item .item-desc .item-title{
		font-size: 1.05rem;
    margin-bottom: 6px;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0;
    text-align: left;
	}
	.search .listcon .list .list-item .item-desc .item-info{
		margin-bottom: 6px;
    width: 100%;
    height: 15px;
    line-height: 15px;
    margin-top: 0;
	}
	.search .listcon .list .list-item .item-desc .item-info .item-pos{
		font-size: 0.78rem;
    float: left;
    width: 60%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
	}
	.search .listcon .list .list-item .item-desc .item-info .item-salary{
		font-size: 1.05rem;
    color: #00b38a;
    float: right;
	}
	.search .listcon .list .list-item .item-desc .item-time{
		font-size: 0.65rem;
    color: #888;
    text-align: left;
    margin-bottom: 0;
    margin-top: 0;
	}
	.search .listcon .list .list-more{
		height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 0.98rem;
    background-color: #fafafa;
    color: #333333;
    margin-bottom: 45px;
	}
	.search .fdialog-content {
    height: 100%;
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    -moz-overflow-scrolling: touch;
    overflow-scrolling: touch;
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    overflow: scroll;
  }
  .search .fdialog-container .fdialog-rcon {
    margin-bottom: 45px;
    padding-bottom: 45px;
	}
	.cities-header {
    border-bottom: 1px solid #e8e8e8;
    height: 25px;
    line-height: 25px;
    padding: 0 15px;
    font-size: 0.78rem;
    color: #888;
    text-align: left;
	}
	.cities-list {
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    border-collapse: collapse;
    border-spacing: 0;
	}
	.cities-item {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 0.98rem;
    color: #333;
    min-width: 100px;
    padding: 0;
}
</style>
