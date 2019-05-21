import React from 'react'

interface iItem {
  id: number
  name: string
}

const App: React.FC = () => {
  const [items, setItems] = React.useState<Array<iItem>>([])

  const fetchData = async () => {
    const response = await fetch('/api/test')
    const data = await response.json()
    console.table(data)
    setItems(data)
  }

  return (
    <>
      <h2>Hello</h2>
      <button onClick={fetchData}>fetch data from API</button>
      {items.length > 0 && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
