<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <!-- router-link 預設會解析成 HTML 的 <a></a> -->
            <!-- <router-link>的屬性 tag 和 to -->
            <!-- tagd可以渲染成指定的html tag 預設是<a></a> , to則是導向的path-->
            <router-link class="nav-link" :to="'/'">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'pages'">使用者清單</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'hello'">聊天室</router-link>
          </li>
        </ul>
        <div class="form-inline mr-3">
          <select
            name=""
            id=""
            class="form-control"
            v-model="status"
            @change="changeStatus"
          >
            <option value="上線">上線</option>
            <option value="下線">下線</option>
          </select>
        </div>
        <div class="navbar-text">Hi,{{showUserName}}</div>
      </div>
    </nav>
    <!-- 外層元件傳入 status-->
    <!-- status內部要接收的props名稱 -->
    <!-- myStatus外部傳入的變數名稱 -->
    <!-- pushNewName 是內部向外拋出的事件 -->
    <!-- getNewName 是外部接收的方法 -->
    <router-view :status="myStatus" @pushNewName="getNewName"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      status: this.$store.state.status,
      myStatus: "",
    };
  },
  methods: {
    changeStatus() {
      this.myStatus = this.status;
      this.$store.state.status =  this.status;
    },
    // getNewName 是接收用的事件
    getNewName(newName) {
      let self = this;
      self.username = newName;
    },
  },
  computed:{
    showUserName() {
      return this.$store.state.username;
    }
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
