<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
       <a class="navbar-brand" href="#"><p class="TextLogo">𝓟𝓪𝓼𝓽𝓮𝓵𝓮𝓻𝓲𝓪 𝓢𝓪𝓴𝓾𝓻𝓪</p></a>
      <router-link to="/">Cliente</router-link>
      <router-link to="/about">Pastelero</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
      color: #fad2dd;

}

.TextLogo{
  color: #fad2dd;
}
</style>
