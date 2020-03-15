<template>
    <div class="page">
      <h3>CreateProjectPage</h3>
      <div class="line">
        <label for="name"> Project Name</label>
        <input type="text" name="name" id="name" v-model="project.title">
      </div>

      <div>
        <button @click="createProject">Save</button>
      </div>
    </div>
</template>

<script>

    import {createProject} from "../apis/project";

    export default {
        name: "project-create",
        data() {
            return {
                project: {
                    title:''
                }
            }
        },
        methods: {
            createProject() {
                let that = this;
                let data = this.project;
                createProject(data).then(res => {
                    console.log(res);
                    if(res.code !== 20000) {
                        alert('failed !')
                    }
                    that.$router.push({
                        name:'index'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>
