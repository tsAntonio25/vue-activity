<script setup>
import { ref, onMounted } from 'vue'

const groceries = ref([])

onMounted(async () => {
  try {
    const res = await fetch("http://localhost:3000/api/groceries")
    groceries.value = await res.json()
  } catch (err) {
    console.error("Failed to fetch groceries:", err)
  }
})

</script>

<template>

   <div>
    <h1>Grocery List</h1>
    <hr>
    <ul>
      <li v-for="item in groceries" :key="item.id">
        {{ item.product }}
      </li>
    </ul>
  </div> 

</template>

<style scoped>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

      div {
        border: 1px solid #696969;
        width: 30vw;
        margin: 5em auto;
        padding: 0.5em 1em;
        font-family: 'Roboto';
        border-radius: 10px;
        align-items: center;
        box-shadow: 10px 10px 10px #8d8d8d;
        background-color: #fdd85c;
      }

     hr {
      border: none;
      height: 2px;
      background-color: #000;

     }

      ul li {
        text-align: left;
        padding-bottom: 0.5em;
      }
</style>
