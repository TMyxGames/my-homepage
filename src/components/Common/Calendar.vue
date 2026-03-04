<template>
    <div 
        class="calendar"
    >
        正在加载热力图...
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import GitHubCalendar from 'github-calendar';
    import 'github-calendar/dist/github-calendar-responsive.css';

    onMounted(() => {
        GitHubCalendar(".calendar", "TMyxGames", {
            responsive: true,
            tooltips: true,
            summary_text: "这是我的代码足迹"
        });
    });

</script>

<style scoped>
    .calendar {
        font-family: '晴雪体', sans-serif !important;
        border: none !important;
    }

    .calendar .contrib-number {
        color: var(--text-hightlight) !important;
    }

    /* 修改热力图方块颜色，匹配你的主题色 */
    .calendar rect.ContributionCalendar-day[data-level="4"] {
        fill: var(--text-hightlight);
    }

    :deep(.calendar) {
        font-family: '晴雪体', sans-serif !important;
        border: none !important;
    }

    :deep(.ContributionCalendar-day[data-level="1"]) { fill: #d6e685; }
    :deep(.ContributionCalendar-day[data-level="2"]) { fill: #8cc665; }
    :deep(.ContributionCalendar-day[data-level="3"]) { fill: #44a340; }
    :deep(.ContributionCalendar-day[data-level="4"]) { 
        fill: var(--text-hightlight) !important; 
    }

    /* 隐藏顶部统计信息（如：xxx contributions in the last year） */
    :deep(.width-full.position-relative.text-center) {
        display: none !important;
    }

    /* 隐藏左侧/底部的额外汇总文本 */
    :deep(.p-2.text-center.f6.color-fg-muted) {
        display: none !important;
    }

    /* 隐藏图表下方的 Legend (颜色示例和统计摘要) */
    :deep(.contrib-footer) {
        display: none !important;
    }

    /* 调整边距，让剩下的图表更紧凑 */
    :deep(.js-calendar-graph) {
        margin: 0 auto;
        padding: 10px 0;
    }
</style>