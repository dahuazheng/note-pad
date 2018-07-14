<template>
  <main class="home"
        :style="{ transform: 'translateY(' + touch.moveY + 'px)'}"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend">
    <div class="search-box"
         v-show="showSearchBtn"
    >
      <i></i><span>搜索</span>
    </div>
    <ul v-for="note in notes">
      <li @click="test1">
        {{ note.title }}<br>
        <small>
          <span class="create-time">{{ note.time }}</span>
          <span class="summarize">{{ note.message }}</span>
        </small>
      </li>
    </ul>
    <button class="insert" @click="openSearchBox(true)">＋</button>
    <Editor></Editor>
  </main>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Editor from '@/components/Editor.vue'

  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'home',
    components: {
      Header,
      Editor
    },
    data() {
      return {
        showSearchBtn: false,
        touch: {
          startY: 0,
          moveY: 0,
          endY: 0,
          distance: 90
        }
      }
    },
    computed: {
      ...mapState({
        notes: state=>state.notes.notes
      })
    },
    methods: {
      ...mapMutations({
        openSearchBox: 'openSearchBox'
      }),
      touchstart(event) {
        let touch = event.touches[0];
        this.touch.startY = Math.floor(touch.pageY);
      },
      touchmove(event) {
        let touch = event.touches[0];
        let movey = Math.floor(touch.pageY);
        let Y = movey - this.touch.startY;

        if (Y < -this.touch.distance) {
          this.touch.moveY = -this.touch.distance
        } else if (Y < this.touch.distance && Y > -this.touch.distance) {
          this.touch.moveY = Y
        } else {
          this.touch.moveY = this.touch.distance
        }
      },
      touchend(event) {
        this.touch.endY = Math.floor(event.changedTouches[0].pageY);
        let ny = this.touch.endY - this.touch.startY;
        if (ny > this.touch.distance) {
          this.showSearchBtn = true
        }
        if (ny < -this.touch.distance) {
          this.showSearchBtn = false
        }
        this.touch.moveY = 0
      },
      //$store.commit('openSearchBox', true),
      test1() {
        console.log(222);
        console.log(this.$store.state.header.title)
      }

    },
    mounted() {
      console.log(222);
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
    .search-box {
      margin-left: 10px;
      padding: 5px 0;
      line-height: 36px;
      color: #999;
      text-align: center;
      border-bottom: 1px solid #f1f1f1;

      i {
        vertical-align: middle;
        font-size: 1rem;
      }
      span {
        vertical-align: middle;
      }
    }

    ul {
      .clear-ul;

      > li {
        margin-left: 10px;
        padding: 10px 10px 10px 0;
        border-bottom: 1px solid #f1f1f1;
        line-height: 1.4;
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
