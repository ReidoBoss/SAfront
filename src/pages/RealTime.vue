<template>
    <div>
        <h1>{{ test }}</h1>
    </div>
</template>


<script lang="ts" setup>
import { onMounted, ref } from "vue";

onMounted(() => {
    setInterval(fetchAllData, 1000);

});


var test = ref<string>('');



const fetchAllData = async () => {
  try {
    const response = await fetch(`http://localhost:8080/getUsers`);
    const data = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>