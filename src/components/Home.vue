<template>
	<div class="item-container">
		<div class="container-fluid">
			<div class="top-banner">
				<div class="text">
					<h1>从高质量的视频中学习</h1>
					<h1>WEB技术开发</h1>
				</div>
			</div>
		</div>
		<div class="container-fluid main">
			<template v-for="list in lists">
				<row-grid
					:lists="list"
				></row-grid>
			</template>
		</div>
	</div>
</template>

<script>
	import RowGrid from "./RowGrid.vue"
	export default {
		name : 'home' ,
		data() {
			return {
				lists:null ,
				page:0 ,
			}
		},
		methods:{
			getData : function(){
				this.$http.post(`all`,{page:this.page})
				  .then((e) => {
				  	if(e.length == 0 ) {
				  		return ;
				  	}
				  	var arr = [] ;
					var tmp = [];
					var i = 0 ;
					e.data.forEach((val ,index) => { 
						if( i == 3) {
							arr.push(tmp);
							tmp = [];
							i = 0 ;
						}
						tmp.push(val);
						i ++ ;
					})
					this.lists = arr ;
				  })
			}
		},
		components:{RowGrid},
		mounted:function(){
			this.getData();
		},
		watch : {
			$route(){
				let P = 0 ;
				if(this.$route.query.page) {
					P = this.$route.query.page;
				}
				this.page = P ;
				this.getData()
			}
		},
		computed : {
		}
	}
</script>

<style scoped>
		.top-banner{
		width:100%;
		height:400px;
		text-align: center;
		color:#fff;
		padding-top: 80px;
	} 
	h1{
		font-size: 60px;  
	}
	.main{
		width:90%;
		margin:auto;
	}
	.boxmain{
		margin-top:15px;
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