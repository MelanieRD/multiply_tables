import { root } from '@lynx-js/react'
import { App } from './App.jsx'
import { MemoryRouter, Routes, Route } from 'react-router'
import { Math } from './pages/math.js'
import { ContextProvider } from './utils/context.js'

root.render(
    <ContextProvider>
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/math" element={<Math />} />
            </Routes>
        </MemoryRouter>
    </ContextProvider>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
