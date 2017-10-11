<template>
	
</template>

<script>
	export default {
		name :'detail',
		methods: {
			getData: function() {
				console.log(this.$route.params)
				var d = "";
				var data = {id:this.$route.params.id};
				for(var i in data) {
					d += i + "=" + data[i]
				}

				this.$http.post("detail",JSON.stringify(data))
				  .then((e) => {
					  console.log(e)
				  })
			}
		},
		mounted(){
			this.getData()
		}
	}
</script>