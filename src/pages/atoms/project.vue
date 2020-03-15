<template>
  <div class="project">
    <h3>{{project.title}}</h3>
  </div>
</template>

<script>
    export default {
        name: "project",
        props: {
            project: {
                type: Object,
                default: {
                    title: 'Untitled',
                    status: true
                }
            }
        }
    }
</script>

<style scoped>
  .project {

  }
</style>
