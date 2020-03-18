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
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="开封">开封</td>
    				<td class="activeable cities-item" data-item="昆明">昆明</td>
    				<td class="activeable cities-item" data-item="六安">六安</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="聊城">聊城</td>
    				<td class="activeable cities-item" data-item="廊坊">廊坊</td>
    				<td class="activeable cities-item" data-item="拉萨">拉萨</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="丽水">丽水</td>
    				<td class="activeable cities-item" data-item="临沂">临沂</td>
    				<td class="activeable cities-item" data-item="洛阳">洛阳</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="连云港">连云港</td>
    				<td class="activeable cities-item" data-item="兰州">兰州</td>
    				<td class="activeable cities-item" data-item="柳州">柳州</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="马鞍山">马鞍山</td>
    				<td class="activeable cities-item" data-item="茂名">茂名</td>
    				<td class="activeable cities-item" data-item="绵阳">绵阳</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="梅州">梅州</td>
    				<td class="activeable cities-item" data-item="宁波">宁波</td>
    				<td class="activeable cities-item" data-item="南昌">南昌</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="南充">南充</td>
    				<td class="activeable cities-item" data-item="南京">南京</td>
    				<td class="activeable cities-item" data-item="南宁">南宁</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="南通">南通</td>
    				<td class="activeable cities-item" data-item="南阳">南阳</td>
    				<td class="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
    			</tr>
    		</table>
    		<div class="cities-header">OPQR</div>
    		<table class="cities-list">
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="盘锦">盘锦</td>
    				<td class="activeable cities-item" data-item="莆田">莆田</td>
    				<td class="activeable cities-item" data-item="萍乡">萍乡</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="濮阳">濮阳</td>
    				<td class="activeable cities-item" data-item="青岛">青岛</td>
    				<td class="activeable cities-item" data-item="秦皇岛">秦皇岛</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="清远">清远</td>
    				<td class="activeable cities-item" data-item="泉州">泉州</td>
    				<td class="activeable cities-item" data-item="衢州">衢州</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="日照">日照</td>
    				<td class="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
    				<td class="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
    			</tr>	
    		</table>
    		<div class="cities-header">STUV</div>
    		<table class="cities-list">
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="韶关">韶关</td>
    				<td class="activeable cities-item" data-item="上海">上海</td>
    				<td class="activeable cities-item" data-item="石家庄">石家庄</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="宿迁">宿迁</td>
    				<td class="activeable cities-item" data-item="上饶">上饶</td>
    				<td class="activeable cities-item" data-item="汕头">汕头</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="绍兴">绍兴</td>
    				<td class="activeable cities-item" data-item="沈阳">沈阳</td>
    				<td class="activeable cities-item" data-item="三亚">三亚</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="深圳">深圳</td>
    				<td class="activeable cities-item" data-item="苏州">苏州</td>
    				<td class="activeable cities-item" data-item="泰安">泰安</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="天津">天津</td>
    				<td class="activeable cities-item" data-item="唐山">唐山</td>
    				<td class="activeable cities-item" data-item="太原">太原</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="台州">台州</td>
    				<td class="activeable cities-item" data-item="泰州">泰州</td>
    				<td class="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
    			</tr>
    		</table>
    		<div class="cities-header">WXYZ</div>
    		<table class="cities-list">
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="潍坊">潍坊</td>
    				<td class="activeable cities-item" data-item="武汉">武汉</td>
    				<td class="activeable cities-item" data-item="芜湖">芜湖</td>
    			</tr>
    			<tr class="cities-list-item">
    				<td class="activeable cities-item" data-item="威海">威海</td>
    				<td class="activeable cities-item" data-item="乌鲁木齐">乌鲁木齐</td>
    				<td class="activeable cities-item" data-item="无锡">无锡</td>
    			</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="温州">温州</td>
    					<td class="activeable cities-item" data-item="西安">西安</td>
    					<td class="activeable cities-item" data-item="许昌">许昌</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="孝感">孝感</td>
    					<td class="activeable cities-item" data-item="香港特别行政区">香港特别行政区</td>
    					<td class="activeable cities-item" data-item="厦门">厦门</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="西宁">西宁</td>
    					<td class="activeable cities-item" data-item="邢台">邢台</td>
    					<td class="activeable cities-item" data-item="湘潭">湘潭</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="新乡">新乡</td>
    					<td class="activeable cities-item" data-item="咸阳">咸阳</td>
    					<td class="activeable cities-item" data-item="襄阳">襄阳</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="徐州">徐州</td>
    					<td class="activeable cities-item" data-item="宜宾">宜宾</td>
    					<td class="activeable cities-item" data-item="银川">银川</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="盐城">盐城</td>
    					<td class="activeable cities-item" data-item="宜昌">宜昌</td>
    					<td class="activeable cities-item" data-item="宜春">宜春</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="烟台">烟台</td>
    					<td class="activeable cities-item" data-item="岳阳">岳阳</td>
    					<td class="activeable cities-item" data-item="扬州">扬州</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="淄博">淄博</td>
    					<td class="activeable cities-item" data-item="珠海">珠海</td>
    					<td class="activeable cities-item" data-item="湛江">湛江</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="镇江">镇江</td>
    					<td class="activeable cities-item" data-item="张家口">张家口</td>
    					<td class="activeable cities-item" data-item="周口">周口</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="驻马店">驻马店</td>
    					<td class="activeable cities-item" data-item="肇庆">肇庆</td>
    					<td class="activeable cities-item" data-item="中山">中山</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="遵义">遵义</td>
    					<td class="activeable cities-item" data-item="郑州">郑州</td>
    					<td class="activeable cities-item" data-item="株洲">株洲</td>
    				</tr>
    				<tr class="cities-list-item">
    					<td class="activeable cities-item" data-item="漳州">漳州</td>
    					<td class="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
    					<td class="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
    				</tr>
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
