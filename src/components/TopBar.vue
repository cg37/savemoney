<template>
  <div class="topBar">
    <h1>
      Craig的每日开销记录
    </h1>
    <span>
      Es gibt keinen Menschen ohne Schuld.
    </span>
    <span>
      Keiner von ihnen hat einen Platz verdient in deinem Paradies
    </span>
  </div>
</template>
<script setup lang="ts" name="TopBar">

defineProps<{ msg?: string }>()
</script>



<style scoped lang="scss">
.topBar{
  user-select: none;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding-bottom: 8px;
  h1{
    margin: 0 0 12px 0;
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
