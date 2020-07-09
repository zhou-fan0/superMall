<template>
  <div class="tabbarItem" @click="itemClick">     
    <div v-show="isActive"><slot name="item-icon">图标</slot></div>
    <div v-show="!isActive"><slot name="item-icon-active">图标</slot></div>
    <div :style="activeStyle"><slot name="item-name">名称</slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem', 
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) == -1
    },
    activeStyle() {
      return this.isActive? {color: "#2c2c2c"} : {color: this.activeColor}
    }
  }, 
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#d81e06'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)      
    }
  }
}
</script>
<style >

</style>