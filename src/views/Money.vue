import Layout from '@/components/Layout.vue';

<template>
  <div>
    <Layout>Money.vue</Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money"
};
</script>

<script lang="scss" scoped>
@import "~@/assets/style/helper.scss";
p {
  color: $red;
}
</script>