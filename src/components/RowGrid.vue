<template>
	<Row :gutter="32" class="boxmain">
		<template  v-for="list in lists">
	        <Col :md="8" :sm="8" :lg="8" :xs="24" class="boxbody">
	        	<grid :item="list"></grid>
	        </Col>
		</template>
    </Row>
</template>

<script>
	import Grid from "./Grid.vue"
    export default {
    	props : {
    		lists : {
    			type : Array ,
    			required: true ,
    		}
    	},
    	components: {Grid}
    }
</script>

<style type="text/sass" scoped>
	body{
		background: #efefef;
	}
	.boxmain:not(:first-child){
		margin-top:35px;
	}
	.boxbody{
		cursor: pointer;
	}
	@media screen and (max-width:768px){
	   .boxbody{
			margin-top:40px;
		}
	}
	
</style>