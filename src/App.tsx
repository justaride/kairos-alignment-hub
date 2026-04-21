import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Overview } from './pages/Overview'
import { AlignmentTable } from './pages/AlignmentTable'
import { Platforms } from './pages/Platforms'
import { Relationships } from './pages/Relationships'
import { Research } from './pages/Research'
import { MutualValue } from './pages/MutualValue'
import { DriveIntelligence } from './pages/DriveIntelligence'
import { NextSteps } from './pages/NextSteps'
import { Presentation } from './pages/Presentation'
import { Rollebrief } from './pages/Rollebrief'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="alignment" element={<AlignmentTable />} />
          <Route path="platforms" element={<Platforms />} />
          <Route path="relationships" element={<Relationships />} />
          <Route path="research" element={<Research />} />
          <Route path="mutual-value" element={<MutualValue />} />
          <Route path="drive-intelligence" element={<DriveIntelligence />} />
          <Route path="next-steps" element={<NextSteps />} />
          <Route path="presentation" element={<Presentation />} />
          <Route path="rollebrief" element={<Rollebrief />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
