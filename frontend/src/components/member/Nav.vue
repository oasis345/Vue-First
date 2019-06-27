    <template>
   <div>
   <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Home</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/">Home</a></li>  
      <li><a href="#/calculator">계산기</a></li> <!-- 안먹음 -->
      <li><router-link to="/listTable">테이블</router-link></li>
      <li><router-link to="/JoinForm">회원가입</router-link></li>
      <li><router-link to="/loginForm">로그인</router-link></li>  <!-- 인덱스 즉 라우터에 히스토리 모드로 하면 a태그가 아닌 라우터링크로 링크를 잡아야 한다-->
    </ul>
  </div>
</nav>
   </div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>
</style>