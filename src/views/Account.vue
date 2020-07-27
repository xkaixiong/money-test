import Layout from '@/components/Layout.vue';

<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberBoard :value.sync="record.amount"/>
        <AccountTypes :value.sync="record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberBoard from '@/components/Accout/NumberBoard.vue';
  import AccountTypes from '@/components/Accout/AccountTypes.vue';
  import Notes from '@/components/Accout/Notes.vue';
  import Tags from '@/components/Accout/Tags.vue';
  import {Component} from 'vue-property-decorator';

  type Record = {
    tags: string[],
    notes: string,
    type: string,
    amount: number
  }

  @Component({
    components: {Tags, Notes, AccountTypes, NumberBoard},
  })
  export default class Account extends Vue {
    tags = ['衣', '食', '住', '行', '其他'];
    record: Record = {
      tags: [], notes: '',type:'-', amount: 0
    };

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

  }
</script>


<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
