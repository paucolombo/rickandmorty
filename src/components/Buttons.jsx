import React from 'react'
import Characterlist from './Characterlist';

const Buttons = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      {visible && <div className='buttonsContainer'><button
        onClick={() => {
          setVisible(false);
        }}
      >
        Show all Characters
      </button></div>}
      {!visible && <Characterlist />}

    </>
  )

}
export default Buttons