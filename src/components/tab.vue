<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/all">
      <span class="tab-link">全部</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>
  .tab
    display flex
    height 44px
    line-height 44px
    font-size 14px
    background rgba(30, 30, 30, 0.5)
    .tab-item
      flex 1
      text-align center
      .tab-link
        padding-bottom 5px
        color black
      &.router-link-active
        .tab-link
          color red
          border-bottom 2px solid red
</style>


