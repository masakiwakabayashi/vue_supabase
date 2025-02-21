
<script setup>
import { ref } from 'vue';

// ここでrefを定義しないと変数とフォームの値を繋げられない
const name = ref('名前');
const comment = ref('コメント');
const vegetables = ref([
  false,
  false,
  false
]);
</script>

<template>
  <div>
    <!-- 名前 -->
    <div class="form-block">
      <label for="name">名前</label>
      <input
        id="name"
        v-bind:value="name"
        v-on:input="name = $event.target.value"
      >
      <p>{{ name }}</p>
    </div>
    <!-- コメント -->
    <div class="form-block">
      <label for="comment">コメント</label>
      <textarea
        id="comment"
        name=""
        v-bind:value="comment"
        v-on:input="comment = $event.target.value"
      ></textarea>
      <p>{{ comment }}</p>
    </div>
    <!-- 野菜 -->
    <div class="form-block">
      <div>
        <input
          id="vege1"
          type="checkbox"
          name="vegetables"
          v-bind:value="vegetables[0]"
          v-on:input="vegetables[0] = $event.target.value"
        >
        <label for="vege1">ナス</label>
        <p>{{ vegetables[0] }}</p>
      </div>
      <div>
        <input
          id="vege2"
          type="checkbox"
          name="vegetables"
        >
        <label for="vege2">ピーマン</label>
      </div>
      <div>
        <input
          id="vege3"
          type="checkbox"
          name="vegetables"
        >
        <label for="vege3">にんじん</label>
      </div>




    </div>
  </div>
</template>


<style>
.form-block {
  padding: 10px 0;
}

</style>
