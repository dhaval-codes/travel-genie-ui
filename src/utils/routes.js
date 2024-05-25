import React, {Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'

// page imports
import LandingPage from '../pages/landing-page'
import FeaturesPage from '../pages/features-page'

const navMenu = [
    {
        label:"landing-page",
        path: "/",
        element: (
            <Suspense
                fallback={
                    <div>Loading...</div>
                }
            >
                <LandingPage/>
            </Suspense>
        )
    },
    {
        label:"features-page",
        path: "/features",
        element: (
            <Suspense
                fallback={
                    <div>Loading...</div>
                }
            >
                <FeaturesPage/>
            </Suspense>
        )
    }
]

export default function MyAppRoutes() {
  return (
    <Routes>
        {navMenu.map((ele,i)=>(
            <Route
                key={`${ele.path}-${i}}`}
                path={ele.path}
                element={ele.element}
            />
        ))}
    </Routes>
  )
}
