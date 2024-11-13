/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WeekImport } from './routes/week'
import { Route as TodayImport } from './routes/today'
import { Route as SettingsImport } from './routes/settings'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const WeekRoute = WeekImport.update({
  id: '/week',
  path: '/week',
  getParentRoute: () => rootRoute,
} as any)

const TodayRoute = TodayImport.update({
  id: '/today',
  path: '/today',
  getParentRoute: () => rootRoute,
} as any)

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/today': {
      id: '/today'
      path: '/today'
      fullPath: '/today'
      preLoaderRoute: typeof TodayImport
      parentRoute: typeof rootRoute
    }
    '/week': {
      id: '/week'
      path: '/week'
      fullPath: '/week'
      preLoaderRoute: typeof WeekImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/settings': typeof SettingsRoute
  '/today': typeof TodayRoute
  '/week': typeof WeekRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/settings': typeof SettingsRoute
  '/today': typeof TodayRoute
  '/week': typeof WeekRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/settings': typeof SettingsRoute
  '/today': typeof TodayRoute
  '/week': typeof WeekRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/settings' | '/today' | '/week' | '/about'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/settings' | '/today' | '/week' | '/about'
  id: '__root__' | '/' | '/settings' | '/today' | '/week' | '/about'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  SettingsRoute: typeof SettingsRoute
  TodayRoute: typeof TodayRoute
  WeekRoute: typeof WeekRoute
  AboutLazyRoute: typeof AboutLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  SettingsRoute: SettingsRoute,
  TodayRoute: TodayRoute,
  WeekRoute: WeekRoute,
  AboutLazyRoute: AboutLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/settings",
        "/today",
        "/week",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/today": {
      "filePath": "today.tsx"
    },
    "/week": {
      "filePath": "week.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */