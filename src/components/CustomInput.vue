<template>
    <div class="wrap-input">
        <input class="input" :type="type" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
        <span class="focus-input"/>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props:['type','placeholder'],
    model:{
        prop:'value',
        event:'input'
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
</style>