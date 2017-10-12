<template>
  <div class="wrap">
        <div class="video">
            <Row>
                <Col :push="3" span="18">
                    <video
                        id="player"
                        class="video-js  vjs-default-skin vjs-big-play-centered"
                        controls
                        preload="auto"
                        poster="//vjs.zencdn.net/v/oceans.png"
                        data-setup='{}'>
                        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
                        <p class="vjs-no-js">
                            您的浏览器不支持播放本视频
                        </p>
                    </video>
                
                </Col>
            </Row>
        </div>  
  </div>
</template>

<script>
import TopTitle from "@/components/layouts/TopTitle.vue"
import "video.js"
import "video.js/dist/video-js.min.css"

export default {
  name:"video",
  data: function(){
      return {
          title: "xxxxxxxx", 
          description: "xxxxxxxxxxxx",
      }
  },
  mounted(){
        var options = {};

        var player = videojs('player', options, function onPlayerReady() {
        videojs.log('Your player is ready!');

        // In this context, `this` is the player that was created by Video.js.
        this.play();

        // How about an event listener?
        this.on('ended', function() {
            videojs.log('Awww...over so soon?!');
        });
    });
  },
  components:{
      TopTitle
  },
}
</script>

<style lang="scss">
    .wrap{
        min-height: 600px;
    }
    #player{
        width:100%;
    }
    body{
        background:#000 !important;
    }
    .vjs-default-skin.vjs-big-play-centered .vjs-big-play-button {
        /* Center it horizontally */
        left: 50%;
        margin-left: -2.1em;
        /* Center it vertically */
        top: 50%;
        margin-top: -1.4000000000000001em;
    }
    .vjs-control{
        outline: none
    }
</style>


