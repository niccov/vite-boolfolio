<script>
import { computed } from 'vue';

export default {
    name: 'PostItem',

    data() {
        return {

        }
    },

    props: {
        post: Object,
    },

    computed: {
        coverImage() {
            return 'http://127.0.0.1:8000/storage/' + this.post.cover_image;
        }
    }
}
</script>

<template>
<div class="post p-3">

<div class="post-cover">
    <img :src="coverImage" alt="">
</div>   

<div class="text-center"><b>{{ post.title }}</b></div>

<div>{{ post.language }}</div>

<p>
    {{ post.description }}
</p>
</div>
</template>

<style lang="scss" scoped>
.post{
    border: 1px solid red;
    min-height: 350px;
}
</style>