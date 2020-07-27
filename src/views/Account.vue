import Layout from '@/components/Layout.vue';

<template>
    <Layout class-prefix="layout">
        <NumberBoard/>
        <AccountTypes/>
        <Notes/>
        <Tags :data-source="tags"/>
    </Layout>

</template>

<script lang="js">
    import NumberBoard from '@/components/Accout/NumberBoard.vue';
    import AccountTypes from '@/components/Accout/AccountTypes.vue';
    import Notes from '@/components/Accout/Notes.vue';
    import Tags from '@/components/Accout/Tags.vue';

    export default {
        name: 'Account',
        components: {Tags, Notes, AccountTypes, NumberBoard},
        data() {
            return {
                tags: ['衣', '食', '住', '行', '其他']
            }
        }
    };
</script>


<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
