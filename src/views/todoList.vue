<template>
  <div class="todolist">
    <input v-model="inputValue" />
    <button @click="handleSubmit">提交</button>

    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      inputValue: "hello",
      list: []
    };
  },
  methods: {
    handleSubmit() {
      this.list = this.inputValue;
    }
  }
})
export default class Counter extends Vue {}
</script>

<style lang="scss" scoped></style>
