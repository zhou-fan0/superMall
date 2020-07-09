<template>
  <div id="MainTabbar">
    <Tabbar>
      <!-- <router-link to="/home"> -->
        <TabbarItem path="/home" activeColor="red">
          <img src="@assets/img/tabbar/home.svg" alt slot="item-icon" />
          <img src="@assets/img/tabbar/home-active.svg" alt slot="item-icon-active" />
          <div slot="item-name">首页</div>
        </TabbarItem>
      <!--</router-link>-->
      <!--<router-link >-->
        <TabbarItem path="/categories">
          <img src="@assets/img/tabbar/categories.svg" alt slot="item-icon" />
          <img src="@assets/img/tabbar/categories-active.svg" alt slot="item-icon-active" />
          <div slot="item-name">分类</div>
        </TabbarItem>
      <!--</router-link>-->
      <!--<router-link >-->
        <TabbarItem path="/shopcart">
          <img src="@assets/img/tabbar/shopcart.svg" alt slot="item-icon" />
          <img src="@assets/img/tabbar/shopcart-active.svg" alt slot="item-icon-active" />
          <div slot="item-name">购物车</div>
        </TabbarItem>
      <!--</router-link>-->
      <!--<router-link>-->
        <TabbarItem path="/profile">
          <img src="@assets/img/tabbar/profile.svg" alt slot="item-icon" />
          <img src="@assets/img/tabbar/profile-active.svg" alt slot="item-icon-active" />
          <div slot="item-name">我的</div>
        </TabbarItem>
      <!--</router-link>-->   
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "@common/Tabbar.vue";
import TabbarItem from "@common/TabbarItem.vue";

export default {
  name: "MainTabbar",  
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style>
.tabbar {
  display: flex;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
.tabbarItem {
  flex: auto;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbarItem img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
</style>
