<template>
  <div>
    <input v-model="userName" type="text" placeholder="username" />
    <button @click="addUser">add user</button>

    <div  v-if="chosenUser">
      <input v-model="userRole" type="text" placeholder="role" />
      <button @click="addRole">add role</button>
    </div>

    <div v-for="user in $store.state.users.users" :key="user._id">
      <span @dblclick="chooseUser(user)">{{ user.name }}</span>
      <span>{{ user.role }}</span>
      <button @click="deleteUser(user._id)">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userRole: '',
      chosenUser: null,
    }
  },
  mounted() {
    this.$store.dispatch('users/getUsers')
  },

  methods: {
    addUser() {
      this.$store.dispatch('users/createNewUser', this.userName)
      this.userName = ''
    },
    deleteUser(id) {
      this.$store.dispatch('users/deleteUser', id)
    },
    chooseUser(user) {
      this.chosenUser = user
    },
    addRole() {
      this.$store.dispatch('users/changeUser', {id: this.chosenUser._id, role: this.userRole, name:this.chosenUser.name })
      this.userRole = ''
      this.chosenUser = null
    },
  },
}
</script>
