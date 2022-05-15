<template>
    <div class="home">
        <top-nav></top-nav>
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
#d1 {
    width: 3.75rem;
    height: 3.75rem;
    background-color: skyblue;
}
</style>
