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
            if(this.post.cover_image) {
                
                return 'http://127.0.0.1:8000/storage/' + this.post.cover_image;
            
            }else{

                return 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

            }


        }
    }
}
</script>

<template>
<div class="post p-3">

    <div class="post-cover text-center">
       <img :src="coverImage" alt="">
    </div>   

    <div class="text-center"><b>{{ post.title }}</b></div>

    <em>{{ post.category ? post.category.name : 'Nessuna categoria'}}</em>

    <div class="technologies">
        <span v-for="technology in post.technologies" class="badge rounded-pill text-bg-secondary">{{ technology.name }}</span>
    </div>

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

    .post-cover{
       height: 150px;

        img{
            height: 100%;
        }
    }
}
</style>