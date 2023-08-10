import React from 'react'
import Characterlist from './Characterlist';

const Buttons = () => {
  const [visible, setVisible] = React.useState(true);
  const showCharacters = () => {
    setVisible(false);
  }

  return (
    <>
      {visible && <div className='buttonsContainer'><button onClick={showCharacters}>Show Characters</button>  </div >}
      {!visible && <Characterlist />}
      {/* <ul>
        <li><label>
          <input type="checkbox" name="Alien" id="Alien" value="Alien"></input>
          Alien</label></li>
        <li><label>
          <input type="checkbox" name="Human" id="Human" value="Human"></input>
          Human</label></li>
      </ul>
      <button>Filter</button> */}
    </>
  )

}
export default Buttons