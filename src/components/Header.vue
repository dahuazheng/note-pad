<template>
  <div class="header">
    <title>{{ title }}</title>
    <button class="left-btn">{{ leftBtnMsg }}</button>
    <button class="right-btn">{{ rightBtnMsg }}</button>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        leftBtnMsg: '',
        rightBtnMsg: '编辑'
      }
    },
    computed: {
      title() {
        return this.$store.state.header.title
      }
    },
    mounted() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #ddd;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #f1f1f1;

    title {
      display: block;
    }

    > button {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      border: none;
      outline: none;
      background: transparent;
      font-size: 1rem;
      color: #666;
    }
    .left-btn {
      left: 10px;
    }
    .right-btn {
      right: 10px;
    }
  }
</style>
