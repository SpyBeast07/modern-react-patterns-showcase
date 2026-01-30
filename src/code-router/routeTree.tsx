import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { RootComponent } from './components/Root'
import { IndexComponent } from './components/Index'
import { FormsComponent } from './components/Forms'
import { SearchComponent } from './components/Search'
import { PostsLayoutComponent } from './components/PostsLayout'
import { PostsIndexComponent } from './components/PostsIndex'
import { PostDetailComponent } from './components/PostDetail'

// 1. Root Route
const rootRoute = createRootRoute({
    component: RootComponent,
})

// 2. Index Route
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: IndexComponent,
})

// 3. Forms Route
const formsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/forms',
    component: FormsComponent,
})

// 4. Search Route with validation
const searchSchema = z.object({
    q: z.string().optional(),
})

const searchRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/search',
    validateSearch: (search) => searchSchema.parse(search),
    component: SearchComponent,
})

// 5. Posts Route (Layout)
const postsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/posts',
    component: PostsLayoutComponent,
})

// 6. Posts Index Route (Child of Posts Layout)
const postsIndexRoute = createRoute({
    getParentRoute: () => postsRoute,
    path: '/',
    component: PostsIndexComponent,
})

// 7. Post Detail Route (Child of Posts Layout)
const postDetailRoute = createRoute({
    getParentRoute: () => postsRoute,
    path: '$postId',
    component: PostDetailComponent,
})

// Build the tree
const routeTree = rootRoute.addChildren([
    indexRoute,
    formsRoute,
    searchRoute,
    postsRoute.addChildren([
        postsIndexRoute,
        postDetailRoute,
    ]),
])


// Create router
export const router = createRouter({ routeTree })

// Note: We do not declare module '@tanstack/react-router' here to avoid conflicts 
// with the existing main.tsx router declaration during the build.
// In a real migration, you would replace the main.tsx declaration with this one.

