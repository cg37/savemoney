<template>
  <div class="lastMoney">
    <span class="title">兜兜里还有</span>
    <div class="num">
      {{ `${lastMoney}￥` }}
    </div>
    <div class="todayCost">
      <span class="title">今天花了</span>
      <div class="costPanel">
        <input type="number" class="numInput" v-model="itemMoney">

        <input type="text" class="textInput" placeholder="用于">
      </div>
      <button class="confirmButton" onclick="addItem()">添加</button>
    </div>
  </div>
</template>
<script lang="ts" name="MainFrame" setup>
import {computed, ref, ComputedRef} from 'vue';
import debounceWatch from '../utils/hooks/debounceWatch';
const costList:number[] = [];

const lastMoney = computed(()=>{
  return costList.reduce((sum, it) => sum + it, 0)
}) as ComputedRef;
const itemMoney = ref<number>(0);

const addItem = function() {
  costList.push(itemMoney.value);
}
debounceWatch(
  () => costList,
  () => {
    addItem();
  },
  {
    immediate: true,
    deep: true,
  }
)
</script>
<style lang="scss">
.num{
  width: 300px;
  border: 1px solid whitesmoke;
  font-size: 50px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  user-select: none;
}
.numInput{
  width: 100px;
  font-size: 30px;
  text-align: right;
}
.textInput{
  width: 100px;
  font-size: 30px;
  text-align: right;
}
.confirmButton{
  width: 100px;
  font-size: 30px;
}
</style>
