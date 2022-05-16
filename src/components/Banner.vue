<template>
    <div class="carousel">
        <el-carousel>
            <el-carousel-item v-for="item in imgs" :key="item">
                <img :src="item.imageUrl" alt="" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { getBannerInfo } from '@/api/home.ts';
export default {
    setup() {
        const imgs = ref([]);

        onMounted(() => {
            getBannerInfo(0).then((res) => {
                imgs.value = res.data.banners;
            });
        });

        return { imgs };
    },
};
</script>

<style lang="less" scoped>
.carousel {
    margin: 40px 0;
    .el-carousel__item {
        display: flex;
        justify-content: space-around;
    }
    /deep/ .el-carousel__container {
        height: 400px;
    }
}
</style>
