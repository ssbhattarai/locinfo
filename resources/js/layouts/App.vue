<template>

<div>
<navbar></navbar>
<h2 v-if="user">
    Welcome, {{ user.name }} and i am {{ user.role }}
</h2>

  <button @click="showAlert" class="bnt btn-sm btn-primary">Hello world</button>

</div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    name: 'App',
    components: {
        Navbar
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
        logout(e) {
            console.log('ss')
            e.preventDefault()
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
                  this.$Progress.start();

      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
    },
}
</script>
