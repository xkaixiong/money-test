<template>
  <Layout class-prefix="layout">
    <NumberBoard :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                :value.sync="record.notes"

      />
    </div>
    <Tags @update:value="record.tags=$event"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberBoard from '@/components/Accout/NumberBoard.vue';
import FormItem from '@/components/Accout/FormItem.vue';
import Tags from '@/components/Accout/Tags.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tags, Tabs, FormItem, NumberBoard},
})
export default class Account extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存');
      this.record.notes = '';
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.note {
  padding: 12px 0;
}
</style>
