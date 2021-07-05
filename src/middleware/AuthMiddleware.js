import store from '../store'

class AuthMiddleware {

    guest(to, from, next) {
        if (store.getters['auth/loggedIn']) {
            return next();
        }
        return next('/login');
    }

    // TODO Complete the logic for student role
    student(to, from, next) {
        if (localStorage.getItem('auth')) {
            return next();
        }
        return next('/login');
    }
}

export default new AuthMiddleware();