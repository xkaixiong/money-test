import Layout from '@/components/Layout.vue';

<template>
  <Layout class-prefix="layout">
    <NumberBoard :value.sync="record.amount" @submit="saveRecord"/>
    <AccountTypes :value.sync="record.type"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"  />
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"
      />
    </div>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberBoard from '@/components/Accout/NumberBoard.vue';
import FormItem from '@/components/Accout/FormItem.vue';
import Tags from '@/components/Accout/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tags, FormItem, NumberBoard},
})

export default class Account extends Vue {
get records (){
  return this.$store.state.records;
}
recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  created(){
    this.$store.commit('fetchRecords')
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord',this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.note {
  padding: 12px 0;
}
</style>
