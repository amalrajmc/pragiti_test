<template>
  <div id="app">
    <div id="nav" class="has-text-left" style="background:black;margin-bottom:3em;">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
    <footer class="footer" style="background:black;color:white;margin-top:2em;">
  <div class="content has-text-centered" >
    <p>
      © Copy Rights
      </p>
  </div>
</footer>
  </div>
</template>
<script>

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
