<template>
    <x-header :left-options="options" @on-click-back="backTo()">
        <span :style="styleObject">{{title}}</span> 
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
        pre_path: {
            type :String,
            required: true
        }
    },
    data () {
        return {
            options: {
                showBack: false,
                backText: '',
                preventGoBack: true
            },
            styleObject: {
                height: "90px",
                width: "180px",
                textAlign: "center",
                color: "#494949",
                fontWeight: "bold"
            }
        }
    },
    methods:{
        backTo() {
            this.$router.push({
                path: this.pre_path
            });
        }
    },
    created(){
    
    },
    mounted(){
        if(this.IsBack){
            this.options.showBack = true;
        }
        if(this.title == "注册") {
            this.styleObject.color = "#E56F42";
        }else if(this.title == "登录") {
            this.styleObject.color = "#E56F42";
        }
    }
}
</script>

<style>

</style>
