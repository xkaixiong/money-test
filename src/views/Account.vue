import Layout from '@/components/Layout.vue';

<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberBoard :value.sync="record.amount" @submit="saveRecord"/>
        <AccountTypes :value.sync="record.type"/>
        <Notes field-name="备注"
               placeholder="在这里输入备注"
               @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberBoard from '@/components/Accout/NumberBoard.vue';
  import AccountTypes from '@/components/Accout/AccountTypes.vue';
  import Notes from '@/components/Accout/Notes.vue';
  import Tags from '@/components/Accout/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import recordsModel from '@/models/recordsModel';
  import tagListModel from '@/models/tagListModel';

  const records = recordsModel.fetch();
  const tagList = tagListModel.fetch();

  @Component({
    components: {Tags, Notes, AccountTypes, NumberBoard},
  })
  export default class Account extends Vue {
    tags = tagList;
    records: RecordItem[] = records;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      const record2: RecordItem = recordsModel.clone(this.record);
      record2.createdAt = new Date();
      this.records.push(record2);
    }

    @Watch('records')
    onRecordsChange() {
      recordsModel.save(this.records);
    }
  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
