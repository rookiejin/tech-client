<template>
<div class="container">
	<top-title :vi-title="title" :vi-description="description" />
	<div class="wrap">
		<template v-for="list in lists">
				<Row>
					<router-link
						:to="{name: 'video' , params:{id:list.id}}"
					>
							<Col :push="6" :span="12" class="row">
								<div class="col">
									<Icon  :color="startColor" type="ios-star-outline"></Icon>
									<span class="title">{{ list.title }}</span>
									<span class="time">{{ list.total_time }}</span>
								</div>
							</Col>
					</router-link>
				</Row>
		</template>
		</div>
		<div class="knowledge">
			
				<Row>
					<Col :push="2" span="6">
							<Card style="width:320px" class="card">
								<div style="text-align:center">
									<img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png">
									<h3>一套基于 Vue.js 的高质量UI组件库</h3>
								</div>
							</Card>
					</Col>
					<Col :push="2" span="6">
							<Card style="width:320px" class="card">
								<div style="text-align:center">
									<img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png">
									<h3>一套基于 Vue.js 的高质量UI组件库</h3>
								</div>
							</Card>
					</Col>
					<Col :push="2" span="6">
							<Card style="width:320px" class="card">
								<div style="text-align:center">
									<img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png">
									<h3>一套基于 Vue.js 的高质量UI组件库</h3>
								</div>
							</Card>
					</Col>
				</Row>
		</div>
	</div>	
</template>

<script>
import TopTitle from "@/components/layouts/TopTitle.vue"

export default {
	name: 'detail',
	data() {
		return {
			title: "",
			description: "",
			startColor: "#009966",
			lists: null
		}
	},
	methods: {
		getData: function() {
			this.$http.form("detail", {
					id: this.$route.params.id
				})
				.then((e) => {
					this.title = e.data.data.series.title
					this.description = e.data.data.series.description
					this.lists = e.data.data.videos
				})
		}
	},
	mounted() {
		this.getData()
	},
	components: {
		TopTitle,
	}
}
</script>

<style lang="scss" scoped>
.wrap {
	margin: auto;
	min-height: 200px;
	margin-top: 40px;
	padding-bottom:200px;
	background:#111 ;
}

.row {
	height: 80px;
	line-height: 80px;
	color: #000;
	font-size: 24px;
	background: #fff;
	margin-bottom: 10px;
	border-bottom: 1px solid #eee;
	box-shadow: 1px 3px 5px #eee;
}

.col {
	padding-left: 40px;
	span {
		display: inline-block;
	}
	.title {
		margin-left: 40px;
	}
	.time {
		position: absolute;
		right: 40px;
		font-size: 16px;
		line-height: 100px;
	}
}

.knowledge{
	background:#fff;
}
.card{
	margin:auto;
}
</style>
