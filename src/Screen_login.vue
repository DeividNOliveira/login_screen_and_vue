<template>
  <div id="Screen_login">
    <title>página Estática</title>
    <form @submit.prevent="loginForm">
      <label for="email">email:</label>
      <input
        type="text"
        id="email"
        v-model="email"
        placeholder="Digite seu email"
      />

      <label for="password">Senha:</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Digite sua senha"
      />
      <button type="submit">Enviar</button>

      <div id="message">{{ message }}</div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/Stores/CounterStore.ts";
import { useRouter } from "vue-router";

const store = useCounterStore();
const router = useRouter();
const email = ref("");
const password = ref("");
const message = ref("");

const goToWelcome = () => {
  router.push("/WelcomePage");
};

const loginForm = () => {
  console.log("email: ", email.value);
  console.log("password", password.value);
  console.log("state: ", store.useremail, store.password);
  console.log("list users and passwords: ", store.list);

  if (email.value && password.value) {
    message.value = "Deu certo!";
    store.setLoginData(email.value, password.value);
    goToWelcome();
  } else {
    message.value = "Preencha todos os campos novamente...";
  }
}; //medo
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
