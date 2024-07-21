import { useState } from 'react'
import { shinobis } from './dados'
import './App.css'
import '../src/icons/style.css'

function App() {

  const handleButton = () => {
    setChangeText(false)
    setCaracter(true)
    
    const timer = setTimeout(() => {
      index == quantItems ? setIndex(0) : setIndex(index + 1)
       setCaracter(false)
      }, 200);

  }

  const handleButtonBack = () => {
    setCaracter(true)
    const timer = setTimeout(() => {
       setCaracter(false)
       index == 0 ? setIndex(quantItems) : setIndex(index - 1)
       setChangeText(false)
      }, 200);
  }

  const [changetext, setChangeText] = useState(false);
  const [caracter, setCaracter] = useState(false)
  const [index, setIndex] = useState(2)

  let personagens = shinobis[index]
  let quantItems = shinobis.length - 1
  console.log(quantItems)

  return (
    <div>
      <div className='main_container'>
        <h1 className='title'>{personagens.nome}</h1>
        <p className='text'>{personagens.descritivo}</p>
        
        <div className='container'>

          <button onClick={handleButtonBack} className='icon-circle-left'> </button>
          
          <img className={caracter && 'active'} onClick={() => {
            changetext ? setChangeText(false) : setChangeText(true)
          }} src={personagens.imagem} />

          <button onClick={handleButton} className='icon-circle-right'> </button>
        </div>
        {
          changetext == true ? <p className='descrition'>{personagens.especialidade}</p> : <p>Clique na imagem acima</p>
        }

      </div>
    </div>
  )
}

export default App
