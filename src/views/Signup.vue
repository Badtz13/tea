<template>
  <div>
    <h1>Signup</h1>
    <input class="border p-2 m-2" type="email" v-model="email">
    <input class="border p-2 m-2" type="text" v-model="username">
    <input class="border p-2 m-2" type="password" v-model="password">
    <button @click="checkForm">Signup</button>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default ({
  name: 'login',
  components: {},
  data() {
    return {
      email: '',
      password: '',
      username: '',
    };
  },
  methods: {
    checkForm() {
      firebase.database().ref('users').once('value', (snapshot) => {
        const userList = Object.values(snapshot.val()).map(user => user.username);
        if (!userList.includes(this.username)) {
          this.signup();
        } else {
          console.error('Username already taken');
        }
      });
    },
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        firebase.database().ref('users').push().set({
          uid: user.user.uid,
          username: this.username,
          joinDate: Date.now(),
        })
          .then(() => {
            this.$router.replace('home');
          });
      },
      (err) => {
        // eslint-disable-next-line no-alert
        alert(`Oops. ${err.message}`);
      });
    },
  },
});

</script>
