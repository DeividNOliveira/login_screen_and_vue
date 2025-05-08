import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  //State
  state() {
    return {
      count: 0,
      username: "",
      list: [],
      password: "",
    };
  },

  //Actions
  actions: {
    increment() {
      this.count++;
    },

    addToList(name, pass) {
      const userData = {
        username: name,
        password: pass,
      };
      this.list.push(userData);
    },

    //setings
    setLoginData(name, pass) {
      this.username = name;
      this.password = pass;

      this.addToList(name, pass);
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

    getList() {
      return this.list;
    },
  },
});
