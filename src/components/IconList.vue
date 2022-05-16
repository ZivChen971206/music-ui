<template>
    <div class="iconList">
        <div class="iconList-item">
            <i class="homeIcon iconList__recommend">&#xe62a;</i>
            <span>推荐</span>
        </div>
        <div class="iconList-item">
            <i class="homeIcon iconList__pravteFM">&#xe60b;</i>
            <span>私人FM</span>
        </div>
        <div class="iconList-item">
            <i class="homeIcon iconList__list">&#xe66a;</i>
            <span>表单</span>
        </div>
        <div class="iconList-item">
            <i class="homeIcon iconList__rank">&#xe609;</i>
            <span>排行榜</span>
        </div>
        <div class="iconList-item">
            <i class="homeIcon iconList__live">&#xe601;</i>
            <span>直播</span>
        </div>
    </div>
</template>

<script lang="ts"></script>

<style lang="less" scoped>
.iconList {
    display: flex;
    justify-content: space-around;
    &-item {
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
    }
    .homeIcon {
        font-family: 'iconfont' !important;
        font-size: 32px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
}
</style>
