<template>
<div class="index">
	<Header></Header>
   	<router-view/>
  	<Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Index',
  components:{
  	Header,Footer
  }
}
</script>

<style>
	.index{
		width: 100%;
		height: 100%;
	}
</style>