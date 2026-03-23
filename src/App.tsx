
import { DndContext } from '@dnd-kit/core'
import './App.css'
import MainLayout from './components/MainLayout'

function App() {
  
  function handleDragEnd(event: any) {
    const { active, over } = event;

    if(!over){
      console.log('drag', active.id)
      console.log('drop', over.id)
    }

  }


  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <MainLayout />
      </DndContext>
    </>
  )
}

export default App
  