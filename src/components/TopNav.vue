<template>
    <div class="topNav">
        <div class="topLeft">
            <el-icon class="topIcon"><List /></el-icon>
        </div>
        <div class="topCenter">
            <el-menu
                :default-active="find"
                class="topCenter-menu"
                mode="horizontal"
                @select="handleSelect"
            >
                <el-menu-item index="my">我的</el-menu-item>
                <el-menu-item index="find">发现</el-menu-item>
                <el-menu-item index="village">云村</el-menu-item>
                <el-menu-item index="video">视频</el-menu-item>
            </el-menu>
        </div>
        <div class="topRight">
            <el-icon class="topIcon"><Search /></el-icon>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
    name: 'TopNav',
    setup() {
        const my = ref('my');
        const find = ref('find');
        const village = ref('village');
        const video = ref('video');
        const handleSelect = (key: string, keyPath: string[]) => {
            console.log(key, keyPath);
        };

        return { my, find, village, video, handleSelect };
    },
};
</script>

<style lang="less" scoped>
.topNav {
    width: 1200px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    .topIcon {
        font-size: 28px;
    }
    .topLeft {
        width: 100px;
        display: flex;
        justify-content: center;
    }
    .topCenter {
        width: 100%;
        .active {
            font-weight: 900;
        }
    }
    .topRight {
        width: 100px;
        display: flex;
        justify-content: center;
    }
    .el-menu--horizontal > .el-menu-item {
        width: 25%;
        font-size: 20px;
    }
}
</style>
