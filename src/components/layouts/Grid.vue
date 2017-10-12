<template>
	<router-link
		:to="{name: 'detail' , params:{id:item.id}}"
	>
		<Card
			:shadow="false" 
			class="card"
		>
			<div>
				<h1>{{ item.title }}</h1>
				<img :src=" item.thumb " alt="" class="box-image">
				<h3 class="title">
					{{ item.description }}
				</h3>
			</div>
		</Card>
	</router-link>
</template>

<script>
	export default {
		props : {
			item : {
				type: Object ,
			}
		}
	}
</script>

<style scoped>
    h1{
        padding: 20px 0px ;
        color:#111 !important;
    }
    .box-image{
        width:100%;
    }
    .title{
        font-size: 16px  ;
        padding: 5px ;
        overflow-x: hidden;
        color:#333;
		text-overflow:ellipsis;  
        overflow:hidden;  
        white-space: nowrap;  
    }
    .box{
        background:#333;
        padding: 20px;
        border:none;
    }
    .card:hover{
        box-shadow:2px 1px 18px rgba(999,999,999,.8);
    }
</style>