import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue'; 
import Unauthorized from './components/Unauthorized.vue'; 
import test from './components/test.vue'; 

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/Unauthorized',
        name: 'Unauthorized',
        component: Unauthorized
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
         meta: {
             reqiuresAuth: true,
           }
        
    },
    {
        path: '/test',
        name: 'test',
        component: test,
        meta: {
            reqiuresAuth: true,
            Admin:true, // for only admin component
            User:false
          }
        
    }
    
]


