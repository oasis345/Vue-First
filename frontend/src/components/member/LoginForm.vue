<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
    <div @click="submitBtn" class="btn btn-default">임시 로그인</div>
  </form>
  <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/member/Nav.vue'
import Footer from'@/components/member/Footer.vue'
import axios from 'axios'
export default {
  components: {
    Nav,
    Footer
  },
  data(){
    return {
      posts: []
    }

  },
  methods:{
    //가짜 API를 통해 정보를 수정한 흉내를 냄
    //실제 웹 애플리케이션에서는 서버에 post 요청을 보내는 부분임
    submitBtn: function(){
        alert('안녕하세요e');
        axios.get('/customers/count')
        .then((xhr) =>
        {
          console.log(xhr.data);
          this.posts = xhr.data; //따로 변경이없이 바로 변수명에 들어와서.data로출력함
        })
        .catch((e)=>{
            alert('에러')
        }) 
    }
  }
}
</script>

<style scoped>
</style>