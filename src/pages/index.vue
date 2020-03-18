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
          <list class="list" v-for="list in kanban" v-bind:key="list.id" :data="list"></list>
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
                                title:'完成界面配色。基础颜色的设置，最好引用一个框架吧，自己写太费劲儿了。我也不知道怎么解决，就先这样吧',
                                status:0
                            },
                            {
                                id:1,
                                title: '减脂操',
                                status:1
                            },
                            {
                                id:2,
                                title:'一天不抽烟',
                                status:0
                            }
                        ]
                    },
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
    background-color: rgba(165, 165, 165, 0.87);
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
    overflow-x: auto;

    display: inline-flex;
    align-items: flex-start;
    flex-flow: row;
  }

  .big-list-holder> .list {
    margin: 0 10px;
    flex-shrink: 0;
  }
</style>
