import AuthMiddleware from "@/middleware/AuthMiddleware";
import Programs from "@/views/student/Programs";

export default [
    {
        path: '/student/programs',
        // beforeEnter: [AuthMiddleware.Student],
        name: 'Programs',
        component: Programs
    }

]