<script>
import axios from 'axios';
import PostItem from '../components/PostItem.vue';


export default {
    name: 'PostList',

    data() {
        return {
            posts: [],

            pagination: {},

            apiURL: 'http://127.0.0.1:8000/api/posts',
        }
    },

    components: {
        PostItem,
    },

    mounted() {
        this.getPosts(this.apiURL);
    },

    methods: {
        getPosts(apiURL) {
            axios.get(apiURL).then(response => {
                console.log(response.data.results);

                this.posts = response.data.results.data;

                this.pagination = response.data.results;
            });
        },
    },
}
</script>

<template>
<h1  class="text-center">I miei post</h1>

<div class="container">
    <div class="row">
        <div v-for="post in posts" class="col-4 mb-3">
            <PostItem :post="post"></PostItem>
        </div>
    </div>

    <hr>
    
    <div class="post-navigation">
        <button v-for="link in pagination.links" class="btn mb-3" :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" v-html="link.label" :disabled="link.url == null ? true : false" @click="getPosts(link.url)"></button>
    </div>
</div>
</template>

<style lang="scss" scoped>
.post-navigation{
    display: flex;
    justify-content: center;
    gap: 15px;
}
</style>