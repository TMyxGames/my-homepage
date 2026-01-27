<template>
    <div class="article-item">
        <div class="info-area">
            <h1 class="title bd-h1" v-if="!isEditing" @click="startEdit">
                {{ articleInfo.title }}
            </h1>
            <el-input
                class="title-input"
                v-else
                ref="titleInput"
                v-model="tempTitle"
                size="large"
                @blur="saveTitle"
                @keyup.enter="saveTitle"
            ></el-input>

            <span class="file-name">
                {{ articleInfo.fileName }}
            </span>
        </div>
        <el-button
            class="delete-btn"
            type="danger"
            size="large"
            @click="$emit('delete', articleInfo.id)"
        >
            删除文章
        </el-button>
    </div>
</template>

<script>
    export default {
        name: "ArticleItem",
        props: {
            articleInfo: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                isEditing: false,
                tempTitle: "",
            };
        },
        methods: {
            startEdit() {
                this.tempTitle = this.articleInfo.title;
                this.isEditing = true;
                this.$nextTick(() => {
                    this.$refs.titleInput.focus();
                });
            },
            saveTitle() {
                // 如何内容没变，则直接退出
                if (this.tempTitle === this.articleInfo.title) {
                    this.isEditing = false;
                    return;
                }
                this.$emit('update-title', {
                    id: this.articleInfo.id,
                    newTitle: this.tempTitle
                });
                this.isEditing = false;
            }
        }
    };
</script>

<style scoped>
    .article-item {
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
        flex-direction: column;
        gap: 0.2rem;
    }

    .title {
        transition: all 0.25s ease;
    }

    .title:hover {
        transform: scale(1.025);
    }

    .delete-btn {
        margin-left: auto;
    }
</style>