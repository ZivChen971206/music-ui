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

<script>
export default {
    name: 'TopNav',
};
</script>

<style scoped lang="less">
.topNav {
    width: 7.5rem;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    .topCenter {
        width: 4.5rem;
        display: flex;
        justify-content: space-around;
        .active{
          font-weight: 900;
        }
    }
}
</style>
