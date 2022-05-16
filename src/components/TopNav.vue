<template>
    <div class="topNav">
        <div class="topLeft">
            <i class="iconfont icon-liebiao"></i>
        </div>
        <div class="topCenter">
            <span class="navBtn">我的</span>
            <span class="navBtn">发现</span>
            <span class="navBtn">云村</span>
            <span class="navBtn">视频</span>
        </div>
        <div class="topRight">
            <i class="iconfont icon-sousuo"></i>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TopNav',
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
    .topCenter {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .active {
            font-weight: 900;
        }
    }
}
</style>
