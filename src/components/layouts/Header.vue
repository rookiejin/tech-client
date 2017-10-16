<template>
    <Row class="row">
		<Col :span="4" :push="1">
			<img class="logo" src="../../images/logo.png?v=1" alt="">
		</Col>
		<Col :span="4" :push="16">
			<Menu mode="horizontal" :theme="theme1" active-name="1" class="menu">
				<MenuItem name="2" class="menu-item">
					<Icon type="person"></Icon>
					登录
				</MenuItem>
				<MenuItem name="4" class="menu-item">
					<Icon type="settings"></Icon>
					注册
				</MenuItem>
			</Menu>
		</Col>
	</Row>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'dark'
            }
        }
    }
</script>
<style lang="scss" scoped>
	.menu,.row{
		background:#fff;
		padding:0;
		.menu-item{
			color:#000 !important;
		}
	}
	.logo{
		display:inline-block;
		height: 60px;
		padding: 4px 0;
	}
</style>

