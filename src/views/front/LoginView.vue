<template>
    這是登入頁面

              <form id="form" class="form-signin">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="username" v-model="user.username"
                    placeholder="name@example.com" required autofocus>
                  <label for="username">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="password" v-model="user.password"
                    placeholder="Password" required>
                  <label for="password">Password</label>
                </div>
                <button id="loginBtn" class="btn btn-lg btn-primary w-100 mt-3" type="button"  v-on:click="login">
                  登入
                </button>
              </form>

</template>
<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${VITE_APP_URL}admin/signin`, this.user)
        .then((res) => {
          console.log(res)
          console.log(res.data.token)
          // const { token,expired} = res.data;
          const { expired, token } = res.data
          document.cookie = `aarontoken=${token}; expires=${expired}`
          this.$router.push('/admin/products')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

</script>
