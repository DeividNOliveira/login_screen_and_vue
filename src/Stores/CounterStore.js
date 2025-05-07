import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  //State
  state() {
    return {
      count: 0,
      username: "",
      password: "",
    };
  },

  //Actions
  actions: {
    increment() {
      this.count++;
    },

    //setings
    setLoginData(name, pass) {
      this.username = name;
      this.password = pass;
    },
  },

  //Getters
  getters: {
    showcount() {
      return this.count;
    },

    isLoggedIn() {
      return this.username !== "" && this.password !== "";
    },
  },
});
