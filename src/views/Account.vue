import Layout from '@/components/Layout.vue';

<template>
    <Layout class-prefix="layout">
        <NumberBoard :value.sync="record.amount" @submit="saveRecord"/>
        <AccountTypes :value.sync="record.type"/>
        <div class="notes">
            <FormItem field-name="备注"
                      placeholder="在这里输入备注"
                      @update:value="onUpdateNotes"/>
        </div>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberBoard from '@/components/Accout/NumberBoard.vue';
  import AccountTypes from '@/components/Accout/AccountTypes.vue';
  import FormItem from '@/components/Accout/FormItem.vue';
  import Tags from '@/components/Accout/Tags.vue';
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {Tags, FormItem, AccountTypes, NumberBoard},
  })
  export default class Account extends Vue {
    tags = window.tagList;
    records  = window.records;
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
      window.createRecord(this.record);
    }
  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
    .note{
        padding: 12px 0;
    }
</style>
