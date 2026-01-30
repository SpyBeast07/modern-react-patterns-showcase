import { createFileRoute } from '@tanstack/react-router'
import { FormsRoute } from '../forms'

export const Route = createFileRoute('/forms')({
    component: FormsRoute,
})
