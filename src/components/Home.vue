<template>
<div class="item-container">
	<div class="container-fluid search-box">
		<transition name="fade">
			<Row>
				<Col :span="16" :push="4">
				<div class="search-box-inner">
					<div class="search-box-inner-item">
						<h3>搜寻要学习的课程</h3>
						<div>
							<span>
											Laravel 
										</span>

							<span>
											Yii
										</span>

							<span>
											Vue 
										</span>

							<span>
											Golang
										</span>

							<span>
											...
										</span>
						</div>
					</div>
					<div class="search-form">
						<div class="search-wrap">
							<input type="text" class="search-input" placeholder="输入你想搜寻的...">
							<Icon type="android-search" class="search-icon"></Icon>
						</div>
					</div>

					<div class="tools">
						<Row>
							<Col :span="8">
							<Icon type="arrow-graph-up-right" class="tools-icon">
							</Icon>
							<h4>
								HighQuality
							</h4>
							</Col>
							<Col :span="8">
							<Icon type="android-bulb" class="tools-icon"></Icon>
							<h4>Clear</h4>
							</Col>
							<Col :span="8">
							<Icon type="help" class="tools-icon"></Icon>
							<h4>
								Helperful
							</h4>
							</Col>
						</Row>
					</div>
				</div>
				</Col>
			</Row>
		</transition>
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
import RowGrid from "@/components/layouts/RowGrid.vue"
export default {
	name: 'home',
	data() {
		return {
			lists: null,
			page: 0,
			inputClass: 'search-input'
		}
	},
	methods: {
		getData: function() {
			this.$http.post(`all`, {
					page: this.page
				})
				.then((e) => {
					if (e.length == 0) {
						return;
					}
					var arr = [];
					var tmp = [];
					var i = 0;
					e.data.data.forEach((val, index) => {
						if (i == 3) {
							arr.push(tmp);
							tmp = [];
							i = 0;
						}
						tmp.push(val);
						i++;
					})
					this.lists = arr;
				})
		}
	},
	components: {
		RowGrid
	},
	mounted: function() {
		this.getData();
	},
	watch: {
		$route() {
			let P = 0;
			if (this.$route.query.page) {
				P = this.$route.query.page;
			}
			this.page = P;
			this.getData()
		}
	},
	computed: {}
}
</script>

<style lang="scss" scoped>
.container-fluid {
	width: 100%;
}

.search-box {
	height: 890px;
	background: url("../images/bg.jpg") no-repeat;
	padding-top: 170px;
	background-size: 100% 100%;
}

.search-box-inner {
	height: 400px;
	background: #000;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 50px;
	.search-box-inner-item {
		margin: auto;
		padding: 50px 0;
		text-align: center;
		span {
			font-size: 20px;
			color: #aeaeae;
			display: inline-block;
			margin: 5px 10px;
			padding-bottom: 1px;
		}
		span:hover {
			cursor: pointer;
			border-bottom: 1px dashed #aeaeae;
			padding-bottom: 0;
		}
	}
	h3 {
		text-align: center;
		color: #fff;
		font-size: 34px;
	}
	.search-form {
		text-align: center;
		.search-input-wrap {
			width: 60%;
		}
	}
}

.search-input {
	display: inline-block;
	width: 400px;
	height: 40px;
	outline: none;
	border: none;
	line-height: 40px;
	font-size: 20px;
	padding-left: 20px;
	padding-right: 30px;
	border: 1px solid #000;
	border-radius: 20px;
}

.search-icon {
	line-height: 40px;
	font-size: 20px;
	color: #fff;
	position: relative;
	left: -43px;
	display:inline-block;
	width:40px;
	background:#006633;
	border-radius: 20px;
	cursor: pointer;
	transition:background 0.5s ease-out; 
	&:hover{
		background: #009900
	}
}

.tools {
	width: 60%;
	margin: auto;
	text-align: center;
	margin-top: 60px;
	color: #ccc;
	font-size: 20px;
	.tools-icon {
		font-size: 40px;
	}
}

.top-banner {
	width: 100%;
	height: 400px;
	text-align: center;
	color: #fff;
	padding-top: 80px;
}

h1 {
	font-size: 60px;
}

.main {
	width: 90%;
	margin: auto;
}

.boxmain {
	margin-top: 15px;
}

.boxbody {
	cursor: pointer;
}

@media screen and (max-width:768px) {
	.boxbody {
		margin-top: 40px;
	}
}
</style>