import Layout from '@/components/Layout.vue';

<template>
    <Layout class-prefix="layout">
        <NumberBoard/>
        <AccountTypes :xxx="   333   " />
        <Notes/>
        <Tags/>
    </Layout>

</template>

<script lang="ts">
  import NumberBoard from '@/components/Accout/NumberBoard.vue';
  import AccountTypes from '@/components/Accout/AccountTypes.vue';
  import Notes from '@/components/Accout/Notes.vue';
  import Tags from '@/components/Accout/Tags.vue';

  export default {
    name: 'Account',
    components: {Tags, Notes, AccountTypes, NumberBoard}
  };
</script>


<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
