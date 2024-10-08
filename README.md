# yd-modal

Yd-modal is a simple Modal with some configurable features
 
 ## Install

 Use the package manage npm to install Yd-modal

```bash
npm i yd-modal
```

## Usage

```jsx
import React, { useState } from 'react';
import Modal from 'yd-modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalMsg = 'This is a customizable modal message.';
  const modalStyles = {
    modalWidth: 'clamp(500px, 90% , 100px)',
    textColor: '#000',
    textAlign: 'center',
    blockerBackgroundColor: 'rgba(0,0,0,0.75)',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    msgFontWeight: '800',
    borderColorAnimation: 'rgba(54, 121, 184, 0.5)',
    lineColorAnimation: 'rgb(54, 121, 184)',
    buttonColor: 'rgb(54, 121, 184)',
    buttonColorHovered: 'rgba(54, 121, 184, 0.5)',
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalMsg={modalMsg}
        modalStyle={modalStyles}
      />
    </div>
  );
};

export default App;

```

# Props

| Prop name | Type | Default | Description |
| ------------- | ------------- | ------------- |
| isOpen  | bool  | Content Cell  |
| setIsModalOpen   | func  | Content Cell  |
| modalMsg  | string  | Content Cell  |
| modalStyle   | object  | Content Cell  |


## Contributing