import AuthMiddleware from "@/middleware/AuthMiddleware";
//import Programs from "@/views/student/Programs";
import Home from "@/views/Home";

export default [
    {
        path: '/student',
        name: 'Home',
        // beforeEnter: AuthMiddleware.Student,
        component: Home
    },
    /*{
        path: '/student/programs',
        // beforeEnter: AuthMiddleware.Student,
        name: 'Programs',
        component: Programs
    }*/

]