<template>
  <div class="page">
    <pre>
      {{data}}
    </pre>
  </div>
</template>

<script>
    import {getProjects} from "../apis/project";

    export default {
        name: "index",
        data() {
            return {
                data: {}
            }
        },
        methods: {
            getProjects()
            {
                getProjects().then(res => {
                    console.log(res);
                })
            }
        },
        mounted() {
            this.getProjects();
        }
    }
</script>

<style scoped>
  .index {

  }
</style>
