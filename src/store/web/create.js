import AuthMiddleware from "@/middleware/AuthMiddleware";

export default [

    {
        path: '/create',
        beforeEnter: [AuthMiddleware.superUser, AuthMiddleware.admin, AuthMiddleware.testCreator],
        children: [
            {
                path: '/',
                name: 'Welcome',
                component: ''
            },
            {
                path: '/test',
                name: 'Test',
                component: ''
            },
            {
                path: '/tests',
                name: 'Tests',
                component: ''
            },
            {
                path: '/test/new',
                name: 'CreateTest',
                component: ''
            },
            {
                path: '/test/:test/edit',
                name: 'EditTest',
                component: ''
            },
            {
                path: '/test/:test',
                name: 'DeleteTest',
                component: ''
            },
            {
                path: '/test/:id/question/new',
                name: 'AddQuestion',
                component: ''
            },
            {
                path: '/question/edit',
                name: 'EditQuestion',
                component: ''
            },
            {
                path: 'test/:id/questions/reorder',
                name: 'ReorderQuestions',
                component: ''
            },
            {
                path: '/question/clone',
                name: 'CloneQuestion',
                component: ''
            },
            {
                path: '/question',
                name: 'DeleteQuestion',
                component: ''
            },
            {
                path: '/test/:testid',
                children: [
                    {
                        path: '/text/copy',
                        name: 'CopyText',
                        component: ''
                    },
                    {
                        path: '/text/:type',
                        name: 'StoreText',
                        component: ''
                    },
                    {
                        path: '/texts',
                        name: 'DeleteText',
                        component: ''
                    },
                    {
                        path: '/texts/reorder',
                        name: 'ReorderText',
                        component: ''
                    },
                ]
            },

        ]
    }
]
