import { defineStore } from "pinia";

interface User {
  useremail: string;
  password: string;
}

export const useCounterStore = defineStore("counter", {
  //State
  state() {
    return {
      count: 0,
      useremail: "",
      list: [] as User[],
      password: "",
    };
  },

  //Actions
  actions: {
    increment() {
      this.count++;
    },

    addToList(email: string, pass: string) {
      const userData: User = {
        useremail: email,
        password: pass,
      };
      this.list.push(userData);
    },

    //setings
    setLoginData(email: string, pass: string) {
      this.useremail = email;
      this.password = pass;

      this.addToList(email, pass);
    },
  },

  //Getters
  getters: {
    showcount(): number {
      return this.count;
    },

    isLoggedIn(): boolean {
      return this.useremail !== "" && this.password !== "";
    },

    getList(): User[] {
      return this.list;
    },
  },
});
