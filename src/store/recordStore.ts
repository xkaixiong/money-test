import clone from '@/lib/clone';

const localStorageKeyName = 'records';


const recordStore = {
  records: [] as RecordItem[],
  fetchRecords() {
    this.records = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.records;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.records));
  },
  createRecord (record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.records?.push(record2);
    //可选链语法 ES 2020
    recordStore.saveRecords();
  },
};

recordStore.fetchRecords();

export default recordStore;