<template>
  <main class="home">
    <pull-to class="scroller-view" :top-load-method="refresh" :bottom-load-method="pullUp">
      <ul v-for="note in notes">
        <li>
          {{ note.title }}<br>
          <small>
            <span class="create-time">{{ note.time }}</span>
            <span class="summarize">{{ note.message }}</span>
          </small>
        </li>
      </ul>
      <div>{{ message }}</div>
    </pull-to>
    <button class="insert">＋</button>
    <Editor></Editor>
  </main>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Editor from '@/components/Editor.vue'

  import { mapState } from 'vuex'

  import PullTo from 'vue-pull-to'

  const TOP_DEFAULT_CONFIG = {
    pullText: "下拉刷新",//文本显示，当你拉下来
    triggerText: "释放更新",//当触发距离被拉低出现的文本
    loadingText: "加载中... ",//该文字负载
    doneText: '加载完成',//加载完成的文本
    failText: '加载失败',//加载失败文本 
    loadedStayTime: 400,//加载后留下的时间ms
    stayDistance: 50,//触发刷新后的距离
    triggerDistance: 70  //下拉触发器触发距离
  }

  export default {
    name: 'home',
    components: {
      Header,
      Editor,
      PullTo
    },
    data() {
      return {
        showSearchBox: false,
        message: '111'
      }
    },
    computed: {
      ...mapState({
        notes: state=>state.notes.notes
      })
    },
    methods: {
      refresh(loaded) {
        this.showSearchBox = true;
        this.message = '222';
        loaded('done')
      },
      pullUp(loaded) {
        this.showSearchBox = false;
        this.message = '111';
        loaded('done')
      }
    },
    mounted() {

    }
  }


</script>

<style scoped lang="less">
  @import "../assets/less/variables";
  @import "../assets/less/mixins.less";

  .home {
    position: relative;
    height: 100vh;
  }

  main {
    ul {
      .clear-ul;

      > li {
        margin-left: 10px;
        padding: 10px 10px 10px 0;
        border-bottom: 1px solid #f1f1f1;
        font-size: 1rem;

        small {
          font-size: @font-size-12;
          color: #666;
        }

        .create-time {
          margin-right: 1.2rem;
        }
      }
    }
  }

  .insert {
    position: absolute;
    right: 0;
    bottom: 2rem;
    left: 0;
    margin: auto;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    background-color: green;

    line-height: 3rem;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    outline: none;
  }

  .action-block {
    height: 40px !important;
  }
</style>
