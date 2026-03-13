<template>
    <div class="manage-record">
        <div clas="item-area" v-if="recordStore.recordList.length > 0">
            <record-item
                v-for="record in recordStore.recordList" 
                :key="record.id"
                :recordInfo="record"
            />
        </div>
    </div>
</template>

<script>
    import { useRecordStore } from '@/stores/record';
    import RecordItem from './RecordItem.vue';

    export default {
        name: "ManageRecord",
        components: {
            RecordItem,
        },
        setup() {
            const recordStore = useRecordStore();
            return { recordStore };
        },
        data() {
            return {
                
            }
        },
        mounted() {
            this.recordStore.getRecordList();
        },
    }
</script>

<style scoped>
    item-area {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }
</style>