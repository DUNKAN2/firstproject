<template>
    <div class="wrap-input">
        <span class="btn-show-pass"><i :class="passwordControl" @click="switwchVisibility"/></span>
        <input class="input" :type="passwordFieldType" placeholder="password" @input="$emit('input', $event.target.value)"/>
        <span class="focus-input"/>            
    </div>
</template>

<script>

export default {
    name:'PasswordInput',
    model:{
        prop:'value',
        event:'input'
    },
    data() {
        return {
            passwordFieldType: 'password',
            passwordControl: 'password-control',   
        };
    },
    methods: {
        async switwchVisibility(){
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
            this.passwordControl = this.passwordControl === 'password-control' ? 'password-control view' : 'password-control'
        },
    }
}
</script>

<style scoped>
    .wrap-input {
        width: 100%;
        position: relative;
        border-bottom: 2px solid #adadad;
        margin-bottom: 37px;
    }
    .input {
        font-family: sans-serif;
        font-size: 15px;
        color: #555;
        line-height: 1.2;
        display: block;
        width: 100%;
        height: 45px;
        background: 0 0;
        padding: 0 5px;
        outline: none;
        border: none;
        overflow: visible;
    }
    .focus-input {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
    }
    /* password switch-visibility */
    .btn-show-pass {
        display: flex;
        align-items: center;
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        padding-right: 5px;
        cursor: pointer;
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        -moz-transition: all .4s;
        transition: all .4s;
    }
    .password-control {
        position: relative;
        top: 4px;
        right: 5px;
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url(./localAssets/view.svg) 0 0 no-repeat;
    }
    .password-control.view {
        background: url(./localAssets/no-view.svg) 0 0 no-repeat;
    }
</style>