<template>
  <div class="container border">
    <div class="row">
      <div class="col-12 col-md">
        <img class="img-fluid" width="500" src="https://upload.cc/i1/2020/08/03/QHG34B.jpg" alt />
      </div>
      <div class="col-md-auto">
        <form @submit.prevent="signin">
          <div class="text-center">
            <h1>登入</h1>
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="user.email"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="user.password"
              required
            />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary mt-3">登入</button>
          </div>
          <div class="text-center">
            <button type="button" class="btn btn-primary mt-3" @click="signout">登出</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  //  取得
  methods: {
    // `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}auth/login` // api伺服器
      this.$http
        .post(api, this.user)
        .then((res) => {
          //  抓 api撈email和 password
          console.log(res)
          const token = res.data.token //  定義 token
          const expired = res.data.expired //  定義 到期日
          //  token 存取cookie
          document.cookie = `iscookie = ${token}; expires = ${new Date(
            expired * 1000
          )}; path=/`
          this.$router.push('admin/products')
          //  window.location = 'learn.html';
          //  不能移到 post 外面，因為非同步的觀念，會變成先轉址，在執行post
        })
        .catch((error) => console.log(error))
    },
    signout () {
      document.cookie = '`token =; expires =`'
    }
  }
}
</script>

<style>
body {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vh;
}
.btn {
  width: 50%;
}
.border{
  border:1px solid wheat;
  background:wheat;
  padding: 2%;
}
</style>
