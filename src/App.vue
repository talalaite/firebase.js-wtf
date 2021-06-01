<template>
  <nav class="top-bar" data-topbar role="navigation">
    <ul class="title-area">
      <li class="name">
        <h1><router-link to="/">Restaurant Booking</router-link></h1>
      </li>
      <li class="toggle-topbar menu-icon">
        <a href="#"><span>Menu</span></a>
      </li>
    </ul>

    <section class="top-bar-section">
      <ul class="left">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </section>
  </nav>

  <div class="grid">
    <div class="columns">
      <router-view />
    </div>
  </div>
</template>
