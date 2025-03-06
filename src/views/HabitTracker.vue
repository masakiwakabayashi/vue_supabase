<script setup>
import { ref } from "vue";

// 1ヶ月（30日間）のリストを生成
const days = Array.from({ length: 30 }, (_, i) => i + 1);

// 習慣データ（ハードコーディング）
const habits = ref([
  { id: 1, name: "朝のストレッチ", completed: Array(30).fill(false) },
  { id: 2, name: "読書（30分）", completed: Array(30).fill(false) },
  { id: 3, name: "ウォーキング", completed: Array(30).fill(false) },
  { id: 4, name: "水を2リットル飲む", completed: Array(30).fill(false) },
  { id: 5, name: "日記を書く", completed: Array(30).fill(false) },
]);

// habits
// id, name, user_id

// trackers
// id,date,habit_id,completed

// 達成状況のトグル
const toggleCompletion = (dayIndex, habitIndex) => {
  habits.value[habitIndex].completed[dayIndex] = !habits.value[habitIndex].completed[dayIndex];
};

// 各日の達成数を計算
const completedCountPerDay = (dayIndex) => {
  return habits.value.filter(habit => habit.completed[dayIndex]).length;
};

// 過去の日付に関しては、変更できないみたいな機能もつくりたい

</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-5xl overflow-x-auto">
      <h1 class="text-2xl font-bold text-blue-600 mb-4 text-center">習慣トラッカー</h1>

      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-blue-100">
              <th class="p-2 border text-left">日</th>
              <th v-for="habit in habits" :key="habit.id" class="p-2 border text-center">{{ habit.name }}</th>
              <th class="p-2 border text-center">達成数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(day, dayIndex) in days" :key="dayIndex">
              <td class="p-2 border text-center font-semibold">{{ day }}</td>
              <td v-for="(habit, habitIndex) in habits" :key="habit.id" class="p-2 border text-center">
                <input type="checkbox" v-model="habit.completed[dayIndex]" @change="toggleCompletion(dayIndex, habitIndex)">
              </td>
              <td class="p-2 border text-center font-semibold">{{ completedCountPerDay(dayIndex) }} / {{ habits.length }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="checkbox"] {
  width: 18px;
  height: 18px;
}
</style>
