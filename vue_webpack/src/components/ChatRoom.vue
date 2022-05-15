<template>
  <!--  container 是bootstrap 4用來限制區域內容 
  容器 container 會預設的當你自適應寬跟高-->
  <div class="hello container mt-5">
    <div class="input-group mb-2">
      <input
        type="text"
        class="form-control"
        placeholder="你是誰"
        aria-label="你是誰"
        aria-describedby="button-addon2"
        v-model="username"
      />
    </div>
    <div class="input-group mb-5">
      <input
        type="text"
        class="form-control"
        placeholder="請輸入訊息"
        aria-label="請輸入訊息"
        aria-describedby="button-addon2"
        v-model="message"
      />
      <div class="input-group-append">
        <button
          class="btn btn-primary"
          type="button"
          id="button-addon2"
          @click="sendMessage"
        >
          Button
        </button>
      </div>
    </div>
    <div v-for="item in messages" class="media my-3" >
      <img
        v-if="item.username != username"
        src="http://lorempixel.com/100/100/sports/"
        class="d-flex align-self-start mr-3"
      />
      <div class="media-body">
        <h5 v-if="item.username != username" class="mt-0">
          {{ item.username }}
        </h5>
        <h5 v-if="item.username == username" class="mr-0 text-right">
          {{ item.username }}
        </h5>
        <p v-if="item.username != username" class="text-left">
          {{ item.message }}
        </p>
        <p v-if="item.username == username" class="text-right">
          {{ item.message }}
        </p>
      </div>
      <img
        v-if="item.username == username"
        src="http://lorempixel.com/100/100/sports/"
        class="d-flex ml-3"
      />
    </div>
    <!-- <div class="media">
      <div class="media-body">
        <h5 class="mt-0 mb-1">Media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
      </div>
      <img src="http://lorempixel.com/100/100/sports/" class="ml-3" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      username: "",
      message: "",
      messages: [
        {
          username: "Waiting",
          message: "Hello 你好",
        },
        {
          username: "其他人",
          message: "你好",
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.username != "") {
        this.messages.unshift({
          username: this.username,
          message: this.message,
        });
        this.message = "";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1,
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
} */
h5 {
  text-align: left;
}
</style>
