<template>

<div class="flex-col mx-10">
    <div class="mt-10">

        <router-link :to="'/submit'">
            <button class="btn btn-secondary" >
                Publier un nouvel article !
            </button>
        </router-link>

    </div>
    <div>
        <h1 class="text-lg mt-10 mb-5 ml-2"> Les dernières publications :</h1>
        <span v-if="loading">
            CHARGEMENT DES ARTICLES...........
        </span>
        <Post 
            v-for="post in posts"
            :title="post.title"
            :userName="post.authors.name"
            :userId="post.authors.id"
            :date="dateReturn(post.published)"
            :content="post.content"
            :comments="post.NumberOfComments"
            :thumbs="post.NumberOfThumbs"
            :lightBulbs="post.NumberOfLightBulbs"
            :rofls="post.NumberOfRofls"
            :hearts="post.NumberOfHearts"
            :key="post.id"
            :id="post.id"
            @deleted="onPostDeleted"
        > </Post>
    </div>

</div>
</template>

<script>
import Post from '@components/Post.vue'
import { usePostRepository } from '@composable/usePostRepository'
import { dateTime } from '@composable/date'

export default {
    components: { Post },
    async setup() {
        
        const { posts, fetchPosts, deleteLocalPost, loading } = usePostRepository()

        fetchPosts()

        function dateReturn(dateValue) {
            try {
                const res = dateTime(dateValue)
                return res.dateReturn
            } catch (error) {
                return error
            }
        }

        function onPostDeleted(id) {
            deleteLocalPost(id)
        }

        return {
            posts,
            dateReturn,
            loading,
            onPostDeleted,
        }
    },
}
</script>
