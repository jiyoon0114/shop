<script setup>
</script>

<template>
<div class="nav glass-card">
  <span class="logo company"><a href="../index.html">JIYOON</a></span>
  <ul class="nav-ul">
    <li><a href="">sale</a></li>
    <li><a href="/pages/product-page.html">product</a></li>
    <li><a href="">cart</a></li>
    <li><a href="">my</a></li> 
  </ul>
  <a href="/pages/login.html" class="login-a logo">LOGIN</a>
</div>
</template>

<style scoped>
.nav {
  background: rgba(3, 3, 3, 0.523);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 10px 5px rgba(255, 255, 255, 0.132);
  transition: 0.3s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10%;
}

.nav-ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1.5;
  gap: 10%;
}

.nav-ul > li {
  list-style: none;
  color: #585858;
}

.logo {
  color: #e4e4e4;
  font-size: 16px;
  font-weight: 600;
}

.logo > a {
  color: #e4e4e4;
}
.login-a {
  display: inline-block;
  border: 1px solid #6a6a6a;
  padding: 4px 30px;
}

.nav-ul > li > a {
  color: #e4e4e4;
}

.nav-ul > li > a:hover {
  background-color: #e4e4e46c;
  color: #141414;
  transition: 0.4s;
}

.nav > .login-a:hover {
  color: #e4e4e4;
  border-color: #e4e4e4;
  transition: 0.4s;
}


@media (max-width: 950px) {
  .nav {
    justify-content: space-around;
  }

  .company {
    display: none;
  }

  .nav-ul > a,
  .login-a {
    color: #b1b1b1;
  }

  .product-box {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .login-a {
    padding: 4px 10px;
  }
}
</style>