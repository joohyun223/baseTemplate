
<template>
  <div id="app">
      <div class="wrap">
      <div class="leftArea">
          <strong class="listTit">components</strong>
          <ul class="list">
              <li class="cont">
                  <router-link to="/">buttons</router-link>
              </li>
              <li class="cont">
                  <router-link to="/forms">forms</router-link>
              </li>
              <li class="cont">
                  <router-link to="/swipe">swiper</router-link>
              </li>
              <li class="cont">
                  <router-link to="/accordion">accordion</router-link>
              </li>
              <li class="cont">
                  <router-link to="/dropdown">dropdown</router-link>
              </li>
              <li class="cont">
                  <router-link to="/modal">modal</router-link>
              </li>
              <li class="cont">
                  <router-link to="/spinner">spinner</router-link>
              </li>
              <li class="cont">
                  <router-link to="/tooltip">tooltip</router-link>
              </li>
              <li class="cont">
                  <router-link to="/datepicker">datepicker</router-link>
              </li>
              <li class="cont">
                  <router-link to="/pagination">pagination</router-link>
              </li>
          </ul>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name      : 'App',
  components: {
  },
  methods: {
    onClick: function() {
    }
  }
};
</script>

<style>
@import './css/bootstrap.min.css';
@import './css/main.css';

</style>
