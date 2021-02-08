<template>
  <div class="ds-app">
    <!-- <div id="nav">
      <router-link to="/">Event list</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main class="app__main">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
@import '~@soracom/soracom-design-system/ds/src/components/_common/images';
@import '~@soracom/soracom-design-system/ds/src/components/_common/base';
@import '~@soracom/soracom-design-system/ds/src/components/_common/colors';
@import '~@soracom/soracom-design-system/ds/src/components/_common/fonts';
@import '~@soracom/soracom-design-system/ds/src/components/_common/reset';

@import "~@soracom/soracom-design-system/ds/src/components/combined";
@import "soracom-design-system-extended";

.app__main {
  margin: 10px;
}
</style>
