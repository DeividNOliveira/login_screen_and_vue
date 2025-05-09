<template>
  <div id="Screen_login">
    <title>PÃ¡gina estÃ¡tica</title>
    <form @submit.prevent="loginForm">
      <label for="name">Nome:</label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="Digite seu nome"
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

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/Stores/CounterStore.js";
import { useRouter } from "vue-router";

const store = useCounterStore();
const router = useRouter();
const name = ref("");
const password = ref("");
const message = ref("");

const goToWelcome = () => {
  router.push("/WelcomePage");
};

const loginForm = () => {
  console.log("name: ", name.value);
  console.log("password", password.value);
  console.log("state: ", store.username, store.password);
  console.log("list users and passwords: ", store.list);

  if (name.value && password.value) {
    message.value = "Deu certo!";
    store.setLoginData(name.value, password.value);
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
