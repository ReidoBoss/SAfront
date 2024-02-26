<template>
  <input v-model="username" type="text" class="input" />
  <input v-model="password" type="password" class="input" />
  <button @click="login" class="btn">YEWAH</button>
  <br />
  {{ error }}
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const username = ref();
const password = ref();
const error = ref();

const login = async () => {
  try {
    const response = await fetch(`http://localhost:8080/getUsers`);
    const data = await response.json();
    const lth = data.length;
    for (var i = 0; i < lth; i++) {
      if (data[i].username == username.value) {
        if (data[i].password == password.value) {
          if (data[i].role == "operator") {
            router.push({ name: "operator" });
            break;
          } else if (data[i].role == "responder") {
            const user_id = data[i].user_id;

            const response = await fetch(`http://localhost:8080/getResponder`);
            const data2 = await response.json();
            for (var j = 0; j < lth; j++) {
              if (user_id === data2[j].user_id) {
                localStorage.setItem("responder_id", `${j}`);
                localStorage.setItem("responder_department", `${data2[j].department}`);
                router.push({ name: "responder" });
                break;
              }
            }
            break;
          } else if (data[i].role == "admin") {
            router.push({ name: "admin" });
            break;
          }
        } else {
          error.value = "wrong password bitch";
        }
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<style>
.input {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 5px;
}
.btn {
  border: 1px solid #007bff;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
