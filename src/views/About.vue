<template>
  <div class="about">
    <!-- 计算属性 和 侦听器 -->
    <div>
      <h3>计算属性 和 侦听器</h3>
      <div>姓：<input v-model="firstName" /></div>
      <div>名：<input v-model="lastName" /></div>
      <h3>计算属性：{{ fullName }}</h3>

      <div>
        <h3>侦听器：{{ count }}</h3>
        只要输入框有变化，数值就发生变化
      </div>
    </div>

    <!--  v-show 、 v-if 、 v-for -->
    <div>
      <button @click="handleClick">toggle</button>
      <!-- v-if 不频繁切换时使用，控制dom的存在与否 -->
      <!-- <div v-if="isShow">hello world</div> -->
      <!-- v-show 频繁切换时使用， 控制dom的显示与否 -->
      <div v-show="isShow">hello world</div>

      <ul>
        <!-- key值要求不能相同，使用key值可以提升页面渲染的性能 -->
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      firstName: "",
      lastName: "",
      count: 0,
      isShow: true,
      list: [1, 2, 3]
    };
  },
  // 计算属性
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    }
  },
  // 侦听器
  watch: {
    fullName() {
      this.count++;
    }
  },
  methods: {
    handleClick() {
      this.isShow = !this.isShow;
    }
  }
})
export default class Counter extends Vue {}
</script>

<style lang="scss" scoped></style>
