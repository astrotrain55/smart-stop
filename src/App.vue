<template>
  <ul>
    <li>
      <router-link to="/">Список маршрутов</router-link>
    </li>
    <li>
      <router-link to="/map">Карта</router-link>
    </li>
    <li>
      <router-link to="/route/chelyabinsk_trol_17/trol/17/ул.Молдавская%20-%20Ж.Д.Вокзал">Детальная страница маршрута</router-link>
    </li>
    <li>
      <router-link to="/map/chelyabinsk_trol_17/trol/17/ул.Молдавская%20-%20Ж.Д.Вокзал">Детальная карта маршрута</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<style lang="stylus">
#app
  font-family Roboto, sans-serif
</style>
