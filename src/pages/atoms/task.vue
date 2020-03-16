<template>
  <div class="page">
    <div class="check-box">
      <input type="checkbox" checked="checked">
    </div>
    <div class="title">
      {{task.title}}
    </div>
  </div>
s</template>

<script>
    export default {
        name: "task",
        props: {
            task: {
                type:Object,
                default: {
                    title: "untitled",
                    status:0
                }
            }
        },
        data (){
            return {

            }
        }
    }
</script>

<style scoped>

</style>
