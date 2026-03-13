<template>
    <div class="record-item">
        <div class="info-area">
            <h1 class="attempt bd-h1">{{attemptToString}}</h1>
            <div class="time">{{recordInfo.time}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecordItem",
        props: {
            recordInfo: {
                type: Object,
                required: true,
            }
        },
        computed: {
            attemptToString() {
                if (this.recordInfo.attempt === 1) {
                    return '登录成功'
                } else {
                    return '登录失败'
                }
            }
        },
    }
</script>

<style scoped>
    .record-item {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .info-area {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .attempt {
        transition: all 0.25s ease;
    }

    .attempt:hover {
        transform: scale(1.025);
    }
</style>