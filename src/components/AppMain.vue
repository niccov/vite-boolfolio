<script>
import axios from 'axios';

import PostItem from './PostItem.vue';

export default {
    name: 'AppMain',

    data() {
        return {
            posts: []
        }
    },

    components: {
        PostItem,
    },

    mounted() {
        this.getPosts();
    },

    methods: {
        getPosts() {
            axios.get('http://127.0.0.1:8000/api/posts').then(response => {
                console.log(response.data.results);
                this.posts = response.data.results;
            });
        },
    },
}
</script>

<template>
<h1  class="text-center">Postfolio</h1>

<div class="container">
    <div class="row">
        <div v-for="post in posts" class="col-4 mb-3">
            <PostItem :post="post"></PostItem>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
h1{
    color: red;
}
</style>