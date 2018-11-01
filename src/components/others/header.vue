<template>
    <x-header :left-options="options" @on-click-back="backTo">
        <span style="color:#494949;font-weight:bold;">{{title}}</span>
    </x-header>
</template>
<script>
import { XHeader } from 'vux'

export default {
    name: 'Header',
    components: {
        XHeader
    },
    props: {
        title: {
            type :String,
            required: true
        },
        IsBack: {
            type: Boolean,
            required: true
        },
        pre_name: {
            type :String,
            required: true
        }
    },
    data () {
        return {
            options: {
                showBack: false,
                backText: ''
            }
        }
    },
    methods:{
        backTo() {
            this.$router.push({
                path: "/login"
            });
        }
    },
    created(){
    
    },
    mounted(){
        if(this.IsBack){
            this.options.showBack = true;
        }
    }
}
</script>

<style>

</style>