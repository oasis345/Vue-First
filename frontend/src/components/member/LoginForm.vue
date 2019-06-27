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
    <button @click="get" class="btn btn-default">조 회</button>
    <button @click="post" class="btn btn-default">입 력</button>
    <button @click="put" class="btn btn-default">수 정</button>
    <button @click="del" class="btn btn-default">삭 제</button>
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
      
    }

  },
  methods:{

    get: function(){   //왼쪽 get , post 등이 위에 클릭이름 함수명
        alert('안녕하세요e');
        axios.get('/customers/count')  // 엑시오스 옆에.get.post,put,delete가 실제 crud 정의어
        .then(d =>
        {
          console.log(d.data);
          alert(d.data);
        })
        .catch((e)=>{
            alert('에러')
        }) 
    },

    post: ()=>{
        axios.post('')
        .then(d=>
        {
          alert(`포스트 연동 성공 : ${d.data.result}`)
        })
          .catch((e)=>{
            alert('에러')
        }) 
    },

    put: ()=>{
      axios.put('/customers/id')
      .then(d=>{
        alert(`put 연동 성공: ${d.data.result}`)
      })
      .catch((e)=>{
            alert('에러')
        }) 
    },

    del: ()=>{
      axios.delete('/customers/id')
      .then(d=>{
        alert(`DEL 연동 성공: ${d.data.result}`)
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