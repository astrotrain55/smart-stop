<template>
  <main>
  </main>
</template>

<script>
export default {
  mounted() {
    document.title = 'Детальная страница маршрута';
    console.log(this.$route.params);
  },
};
</script>
