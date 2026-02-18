
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'

const nodeStyle = {
  background: '#1e293b',

  color: '#fff',
  padding: 10,
  borderRadius: 10,
  width: 220,
  textAlign: 'center' as const,
  fontSize: 14,
  fontWeight: 500,
}

const nodes = [
  // Level 1
  { id: '1', position: { x: 400, y: 0 }, data: { label: 'Ministry of Education (TVET)' }, style: nodeStyle },

  // Level 2
  { id: '2', position: { x: 400, y: 120 }, data: { label: 'Board of Governors' }, style: nodeStyle },

  // Level 3
  { id: '3', position: { x: 400, y: 240 }, data: { label: 'Principal (CEO)' }, style: nodeStyle },

  // Level 4
  { id: '4', position: { x: 150, y: 360 }, data: { label: 'Deputy Principal\nAdministration & HR' }, style: nodeStyle },
  { id: '5', position: { x: 650, y: 360 }, data: { label: 'Deputy Principal\nAcademic Affairs' }, style: nodeStyle },

  // Level 5
  { id: '6', position: { x: 50, y: 520 }, data: { label: 'Heads of Departments' }, style: nodeStyle },
  { id: '7', position: { x: 250, y: 520 }, data: { label: 'Dean of Students' }, style: nodeStyle },
  { id: '8', position: { x: 450, y: 520 }, data: { label: 'Registrar' }, style: nodeStyle },
  { id: '9', position: { x: 650, y: 520 }, data: { label: 'Finance Officer' }, style: nodeStyle },
  { id: '10', position: { x: 850, y: 520 }, data: { label: 'Procurement Officer' }, style: nodeStyle },

  // Level 6
  { id: '11', position: { x: 200, y: 680 }, data: { label: 'Head of Sections' }, style: nodeStyle },
  { id: '12', position: { x: 500, y: 680 }, data: { label: 'Deputy Registrar' }, style: nodeStyle },
  { id: '13', position: { x: 800, y: 680 }, data: { label: 'Security Officer' }, style: nodeStyle },

  // Level 7
  { id: '14', position: { x: 200, y: 840 }, data: { label: 'Trainers' }, style: nodeStyle },
  { id: '15', position: { x: 500, y: 840 }, data: { label: 'Technical / Admin Staff' }, style: nodeStyle },
  { id: '16', position: { x: 800, y: 840 }, data: { label: 'Student Leaders' }, style: nodeStyle },

  // Level 8
  { id: '17', position: { x: 500, y: 1000 }, data: { label: 'Trainees' }, style: nodeStyle },
]

const edges = [
  { id: 'e1-2', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-3', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-4', source: '3', target: '4', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-5', source: '3', target: '5', markerEnd: { type: MarkerType.ArrowClosed } },

  { id: 'e4-6', source: '4', target: '6', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4-7', source: '4', target: '7', markerEnd: { type: MarkerType.ArrowClosed } },

  { id: 'e5-8', source: '5', target: '8', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5-9', source: '5', target: '9', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5-10', source: '5', target: '10', markerEnd: { type: MarkerType.ArrowClosed } },

  { id: 'e6-11', source: '6', target: '11', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8-12', source: '8', target: '12', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e10-13', source: '10', target: '13', markerEnd: { type: MarkerType.ArrowClosed } },

  { id: 'e11-14', source: '11', target: '14', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e12-15', source: '12', target: '15', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e13-16', source: '13', target: '16', markerEnd: { type: MarkerType.ArrowClosed } },

  { id: 'e16-17', source: '16', target: '17', markerEnd: { type: MarkerType.ArrowClosed } },
]

export default function Organogram() {
  return (
    <div style={{ width: '100%', height: '100vh' }} className='bg-clare-900 scale-[0.8] md:scale-[1]'>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}








