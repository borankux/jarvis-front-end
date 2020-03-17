<template>
  <div class="page">
    <div class="bar">
      <router-link class="button" :to="{name:'create-project'}">Add</router-link>
    </div>
    <div class="project-list">
      <project v-for="project in projects" v-bind:key="project.id" :project="project" @deleted="getProjects"></project>
    </div>
    <div class="big-list-holder">
      Big List
    </div>
    <div style="clear: both;"></div>
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

  .project-list {
    width: 400px;
    background-color: gray;
    float: left;
  }


  .big-list-holder {
    width: calc(100% - 500px);
    background-color: teal;
    min-height: 400px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
