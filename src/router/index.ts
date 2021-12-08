import { createRouter, createWebHistory } from 'vue-router';
import { commonRoutes } from './routes';
const router = createRouter({
	history: createWebHistory(),
	routes: commonRoutes,
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
