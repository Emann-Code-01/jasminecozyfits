<script setup>
import HeaderPic from "../assets/logo.png";
</script>

<template>
  <div class="navbar">
    <div class="left-side">
      <nav>
        <a href="/"> <img :src="HeaderPic" alt="Logo" class="logo" /></a>
        <ul>
          <li><a href="/everything">everything</a></li>
          <li><a href="/gym-wear">gym-wears</a></li>
          <li><a href="/accessories">accessories</a></li>
          <li><a href="/night-wears">night-wears</a></li>
        </ul>
      </nav>
    </div>
    <div class="right-side">
      <nav>
        <ul>
          <li><a href="/login">about</a></li>
          <li><a href="/register">contact us</a></li>
          <div class="cart"></div>
          <div class="profile"></div>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: transparent;
  text-transform: uppercase;
}

.left-side nav,
.right-side nav {
  display: flex;
  align-items: center;
}

.left-side ul,
.right-side ul {
  list-style: none;
  display: flex;
  gap: 1.5em;
  margin: 0;
  padding: 0;
}

.left-side ul li,
.right-side ul li {
  font-size: 1.2em;
}

.left-side ul li a,
.right-side ul li a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
  font-weight: 600;
}
</style>
