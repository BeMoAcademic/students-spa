import store from '../store'

class AuthMiddleware {

    guest(to, from, next) {
        if (store.getters['auth/loggedIn']) {
            return next();
        }
        return next('/login');
    }
}

export default new AuthMiddleware();