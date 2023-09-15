import React, { lazy, Suspense } from 'react'; // Importa Suspense aquí
const Characterlist = lazy(() => import('./Characterlist'));

const Buttons = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      {visible && (
        <div className='buttonsContainer'>
          <button
            onClick={() => {
              setVisible(false);
            }}>
            Show all Characters
          </button>
        </div>
      )}
      {!visible && (
        <Suspense fallback={<div>Loading...</div>}>
          <Characterlist />
        </Suspense>
      )}
    </>
  );
};

export default Buttons;
