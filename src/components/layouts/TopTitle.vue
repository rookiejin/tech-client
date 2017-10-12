<template>
  <div class="top-title">
      <div class="title">
         <h3>
          {{ viTitle }}
         </h3>
         <p>
              {{ viDescription }}
          </p>
      </div>
  </div>
</template>

<script>
export default {
  name : "top-title",
  props :{
      viTitle : {
          type : String  ,
          required: true 
      },
      viDescription:{
          type: String ,
          required : true 
      }
  },
  mounted(){
      console.log(this)
  }
}
</script>
<style lang="scss" scoped>
    .top-title{
        width:100%;
        height:200px; 
        background: #000 ;
    }
    h3{
        display: block;
        text-align: left;
        height: 80px;
        width:60%;
        padding-top: 60px;
        margin-left: auto;
        color:#eee;
        font-size:28px;
        margin: auto;
    }
    p{
        padding-top:40px;
        display: block;
        width:60%;
        margin-left: 20%;
        font-size: 16px;
        color:#eee;
    }
</style>


