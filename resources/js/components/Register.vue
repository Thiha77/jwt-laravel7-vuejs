<template>
    <div class="login row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                   <h3>Register</h3> 
                </div>
                <div class="card-body">
                    <form @submit.prevent="register">
                       
                        <div class="form-group row">
                            <label for="name">Name</label>
                            <input type="text" name="name" class="form-control"  v-model="formRegister.name" placeholder="Name">
                           
                        </div>
                        <div class="form-group row">
                            <label for="email">Email</label>
                            <input type="email" name="email" class="form-control" v-model="formRegister.email" placeholder="Email address">
                            
                        </div>
                        <div class="form-group row">
                            <label for="password">Password</label>
                            <input type="password" name="password" class="form-control" v-model="formRegister.password" placeholder="password">
                            
                        </div>
                        <div class="form-group row">
                            <input type="submit" value="Register" class="btn btn-outline-primary ml-auto">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {registerUser} from '../partials/auth';
export default {
    data(){
        return {
            formRegister: {
            name: '',
            email: '',
            password: ''
        },
        }
    },
    methods:{
        register(){
            registerUser(this.$data.formRegister)
            .then(res => {
                console.log(res);
                this.$store.commit("registerSuccess", res);
                this.$router.push({path: '/login'});
            })
            .catch(error => {
                this.$store.commit("registerFailed", {error});
            })
        }
    },
    computed:{
        regError(){
            return this.$store.getters.regError
        }
    }
}
</script>

<style scoped>
.error{
    text-align: center;
    color: red;
}
</style>