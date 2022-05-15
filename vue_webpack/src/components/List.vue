<template>
  <div class="hello container-fluid mt-5">
    <div class="form-inline mr-1">
      <!-- 狀態:{{ status }} -->
      狀態:{{ showStatus }}
      </div>
    <div class="form-inline mr-3">
      <input type="text" class="form-control mr-1" v-model="username" />
      <button class="btn btn-primary" @click="updateUsername">
        更新使用者
      </button>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listData" :class="{'bg-info': item.selected }">
          <th scope="row">{{ index + 1 }}</th>
          <td><img v-bind:src="item.picture.medium" style="width: 20%" /></td>
          <td>{{ item.name.first }}</td>
          <td>{{ item.name.last }}</td>
          <td>{{ item.email }}</td>
          <td><button class="btn btn-outline-primary" @click="loginIn(item)">登入</button> </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "List",
  // 內層接收
  //props: ["status"], 改成vuex
  data() {
    return {
      listData: [],
      username: '',
    };
  },
  methods: {
    getData() {
      let self = this;
      self.axios
        .get("https://randomuser.me/api/?results=50")
        .then(function (response) {
          // 成功回應
          console.log(response.data);
          self.listData = response.data.results;
          self.listData.foreach(function(item){
            //用set新增屬性
            self.$set(item, 'selected', false)
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updateUsername() {
      let self = this;
      //self.$emit("pushNewName", self.username);
      // pushNewName 是寫在 HTML 上的事件名稱
      // vm.username 是預計向外傳的變數
      this.$store.state.username = this.username;
    },
    loginIn(item){
       this.$set(item, 'selected', !item.selected)
    },
  },
  mounted() {
    this.getData();
  },
  computed:{
    showStatus() {
      return this.$store.state.status;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
