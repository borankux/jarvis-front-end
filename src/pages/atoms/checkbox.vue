<template>
    <i class="icon" @click="onClick"  :class="{'ic-checkbox-empty color-default':!isChecked, 'ic-checkbox-checked color-success': isChecked}"></i>
</template>

<script>
    export default {
        name: "checkbox",
        props:{
            checked: {
                type: Boolean,
                default:false
            },
        },
        data() {
            return {
                isChecked: this.checked
            }
        },
        methods: {
            onClick(){
                this.isChecked = !this.isChecked;
                this.$emit('onValueChanged', this.isChecked)
            }
        }
    }
</script>

<style scoped>

</style>
