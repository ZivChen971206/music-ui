<template>
    <div class="home">
        <el-container>
            <el-header class="home__header">
                <top-nav></top-nav>
                <banner></banner>
                <icon-list></icon-list>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopNav from '@/components/TopNav.vue';
import Banner from '@/components/Banner.vue';
import IconList from '@/components/IconList.vue';

export default defineComponent({
    name: 'Home',
    components: {
        TopNav,
        Banner,
        IconList,
    },
});
</script>
<style lang="less" scoped>
.home {
    &__header {
        min-width: 1200px;
        height: 1000px;
    }
}
</style>
