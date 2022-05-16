<template>
    <div class="home">
        <el-container>
            <el-header class="home__header">
                <top-nav></top-nav>
                <div class="home__header__carousel">
                    <el-carousel>
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';

export default {
    name: 'Home',
    components: {
        TopNav,
    },
};
</script>

<style lang="less" scoped>
.home {
    &__header {
        min-width: 1200px;
        height: 500px;
        &__carousel {
            width: 100%;
        }
    }
}
</style>
