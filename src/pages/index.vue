<template>
  <div class="page">
    <div class="bar">
      <router-link class="button" :to="{name:'create-project'}">Add</router-link>
    </div>
    <div class="project-list">
      <project v-for="project in projects" v-bind:key="project.id" :project="project" @deleted="getProjects"></project>
    </div>
  </div>
</template>

<script>
    import {getProjects} from "../apis/project";
    import Project from '../pages/atoms/project';

    export default {
        components: {
            'project':Project
        },
        name: "index",
        data() {
            return {
                projects: []
            }
        },
        methods: {
            getProjects()
            {
                let that = this;
                getProjects().then(res => {
                    that.projects = res.data;
                })
            },
        },
        mounted() {
            this.getProjects();
        }
    }
</script>

<style scoped>
  .index {

  }

  .bar {
    padding: 10px;
  }
</style>
