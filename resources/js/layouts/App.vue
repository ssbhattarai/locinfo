<template>
<navbar></navbar>
<router-view></router-view>
<Footer/>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
    name: 'App',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            isLoggedIn: false,
            user: {},
        }
    },
    created() {
        this.$Progress.start();
        if (window.Laravel.isLoggedin) {
            this.isLoggedIn = true,
            this.user = window.Laravel.user
        }
    },
    mounted() {
        this.$Progress.finish();
    },
    methods: {
        logout() {
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.post('/api/logout')
                    .then(response => {
                        if (response.data.success) {
                            window.location.href = "/"
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        },
        showAlert() {

      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
    },
}
</script>
