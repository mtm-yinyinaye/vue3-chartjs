<template>
  <nav>
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="'/bar'">Bar Chart</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/line'">Line Chart</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/mixed'">Mix Chart</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
  nav
    background-color: #fff
</style>
