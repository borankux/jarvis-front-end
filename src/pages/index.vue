<template>
  <div class="page index">
    <div class="bar">
      <router-link class="button" :to="{name:'create-project'}">Add</router-link>
    </div>
    <div class="main">
      <div class="project-list">
        <project v-for="project in projects" v-bind:key="project.id" :project="project" @deleted="getProjects"></project>
      </div>
      <div class="big-list-holder">
        <div class="big-list-holder">
          <list v-for="list in kanban" v-bind:key="list.id" :data="list"></list>
        </div>
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>

<script>
    import {getProjects} from "../apis/project";
    import Project from '../pages/atoms/project';
    import List from '../pages/atoms/list';

    export default {
        components: {
            'project':Project,
            'list': List
        },
        name: "index",
        data() {
            return {
                projects: [],
                kanban: [
                    {
                        id:0,
                        title:"默认列表",
                        tasks:[
                            {
                                id:0,
                                title:'Default task in list',
                                status:0
                            }
                        ]
                    }
                ]
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
    background-color: teal;
    width: 100%;
    height: 100vh;
  }

  .bar {
    padding: 10px;
    background-color: white;
    margin-bottom: 5px;
    box-sizing: border-box;
    height: 40px;
  }

  .project-list {
    float: left;
    width: 320px;
    background-color: white;
    box-sizing: border-box;
    height: calc(100vh - 45px);
    overflow: scroll;
    padding: 20px 5px 50px;
  }


  .big-list-holder {
    float: left;
    width: calc(100% - 320px);
    background-color: #ccc;
    min-height: 400px;
    padding: 10px;
    box-sizing: border-box;
    height: calc(100vh - 45px);
    overflow: scroll;
    display: flex;
  }
</style>
