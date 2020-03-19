<template>
	<div class="detail">
		欢迎来到{{id}}
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
  }
}
</script>

<style>
</style>