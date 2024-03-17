<template>
  <div class="topBar">
    <h1>
      Craig的每日开销记录
    </h1>
    <span>
      无罪之人并不存在，他们不配来到你的天堂
    </span>
  </div>
</template>
<script setup lang="ts">

defineProps<{ msg: string }>()
</script>



<style scoped lang="scss">
.topBar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  user-select: none;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: left;
  flex-direction: column;
  h1{
    margin: 0;
    text-align: left;
  }
  span{
    margin: 0;
    text-align: left;
  }

}
.read-the-docs {
  color: #888;
}
</style>
