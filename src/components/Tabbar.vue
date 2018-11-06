<template>
  <mt-tabbar v-model="selected" class='tabbar'>
    <template v-for='tab in tabs'>
      <router-link :class="['mint-tab-item tab-item', {'tab-item-actived': selected == tab.id}]" :id='tab.id' :to='tab.link' replace>
        <div class="mint-tab-item-icon">
          <img v-show='selected !== tab.id' :src="tab.img" class="tab-icon">
          <img v-show='selected === tab.id' :src="tab.selectedImg" class="tab-icon">
        </div>
        <div class="mint-tab-item-label">
          {{tab.title}}
        </div>
      </router-link>
    </template>
  </mt-tabbar>
</template>


<script>
import {mapState} from 'vuex';

export default {
  name: 'Tabbar',
  data() {
    return {
      tabs: [
        { id: '/', title: 'tab1', img: require('@/assets/img/logo.png'), selectedImg: require('@/assets/img/logo.png'), link: '/' },
        { id: '/buy', title: 'tab2', img: require('@/assets/img/logo.png'), selectedImg: require('@/assets/img/logo.png'), link: '/buy' },
        { id: '/order', title: 'tab3', img: require('@/assets/img/logo.png'), selectedImg: require('@/assets/img/logo.png'), link: '/order' },
        { id: '/person', title: 'tab4', img: require('@/assets/img/logo.png'), selectedImg: require('@/assets/img/logo.png'), link: '/person' },
      ],
    }
  },
  computed: {
    selected: {
      get() {
        return this.$route.path;
      },
      set() {}
    },
  },
}

</script>


<style lang='less'>
@import '../assets/css/_variable.less';

.tabbar {
  position: fixed;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 7vh;
  padding-top: 1vh;
  background-color: #c2c2c2;
  font-size: 11px;
  color: @tab-c;
  border-top: none;
  background-image: none;
  .tab-item {
    width: 25%;
    display: inline-block;
    text-align: center;
    color: #fff;
    padding: 4px 0;
    outline: none;
    &.tab-item-actived {
      color: @primary;
      .mint-tab-item-label {
        color: @primary;
      }
    }
  }
  .mint-tab-item-icon {
    position: relative;
  }
  .tab-icon {
    width: 22px;
    height: 22px;
    /* font-size: 24px; */
  }
  &.mint-tabbar>.mint-tab-item.is-selected {
    background-color: @tab-bgc;
    background-color: transparent;
    color: @tab-c;
  }
  .mint-tab-item-label {
    color: #FFF;
  }
}
</style>
