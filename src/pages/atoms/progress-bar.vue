<template>
    <div class="progress-bar">
      <div class="progress-holder">
        <div class="progress-buffer"></div>
        <div class="progress" :style="progressStyle"></div>
      </div>
      <div class="progress-value">
        {{progress}}%
      </div>

      <div style="clear: both;"></div>
    </div>
</template>

<script>
    export default {
        name: "progress-bar",
        props: {
            progress: {
                type: Number,
                default:0
            }
        },
        computed: {
            progressStyle() {
                return {
                    width: this.progress + '%'
                }
            }
        }
    }
</script>

<style scoped>
  .progress-bar {
    position: relative;
    width: 80%;
    margin: 0 auto;
  }

  .progress-holder {
    position: relative;
    float: left;
    height: 10px;
    width: calc(100% - 35px);
    margin-top: 5px;
    border-radius: 5px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .progress-buffer {
    position: absolute;
    width: 100%;
    height: 10px;
    box-sizing: border-box;
    border: 1px dotted #ccc;
    border-radius: 5px;
  }

  .progress {
    position: absolute;
    width: 20%;
    background-color: #000000;
    background-image: -webkit-linear-gradient(left, #7f8035, #10ff3d);
    left: 0;
    top: 0;
    height: 10px;
    border-radius: 5px 0 0 5px ;
    transition: width 0.5s;
    transition-timing-function: ease-out;
  }

  .progress-value {
    float: left;
    height: 20px;
    width: 30px;
    line-height: 20px;
    padding-left: 5px;
    text-align: center;
    font-size: 0.6em;
  }
</style>
