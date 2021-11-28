<template>
  <form v-on:submit.prevent="handleSubmit">
    <div>
      <label>Логин</label>
      <input name="username" v-model="username" />
    </div>
    <div>
      <label>Пароль</label>
      <input name="password" v-model="password" />
    </div>
    <div>
      <input type="submit" value="Войти" />
    </div>
  </form>
</template>

<script>
import { fetchData } from '../utils'

export default {
  name: 'Main',
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    handleSubmit: function () {
      fetchData.post('/api/login', {
        username: this.username,
        password: this.password,
      }).then((response) => {
        console.log(response.data.access_token);
        // TODO: save to cookies / local_storage
        //
      });
    }
  }
}
</script>
