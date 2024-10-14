# yd-modal

## Introduction

yd-modal is a simple modal with some configurable style features.
The main purpose of this modal is to tell the user that his submit is ok.
 
## Link to the package

[yd-modal](https://github.com/Yacine-Di/yd-modal)

## Install

Use the package manage npm to install Yd-modal

```bash
npm i yd-modal
```

## Usage

```jsx
import React, { useState } from 'react';
import Modal from 'yd-modal';

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalMsg = 'This is a customizable modal message.';
  const modalStyle = {
    blockerBackgroundColor: 'rgba(0,0,0,0.75)',
    modalWidth: 'clamp(500px, 90% , 100px)',
    textColor: '#000',
    textAlign: 'center',
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
        modalStyle={modalStyle}
      />
    </div>
  );
};

export default MyComponent;

```

## Props


| Prop name | Type | Default | Description |
|----|----|----|----|
| `isOpen`|`bool` | `false` | Check if modal is open or closed, must be declare and initilised out of the modal |
| `setIsModalOpen` |`func`|  | Callback to toggle isOpen,  must be declare and initilised out of the modal |
| `modalMsg` | `string` | `''` | Message displayed in the modal |
| `modalStyle` | `object` | default style inside the package into `index.scss` file|Object containing diffrents configurable styles for the modal (details below) |

### Structure of the object `modalStyle`

The prop `modalStyle` allows to personalise some style of the modal. Here are the options and how to use them

|Key|Type|Description|
|----|----|----|
|`blockerBackgroundColor`| `string`| Background color of the overlay behind the modal |
| `modalWidth` | `string` | Width of the modal |
| `textColor` | `string` | Color of the msg |
| `textAlign` | `string` | Alignment of the msg |
| `fontFamily` | `string` | Font family for the msg and the button |
| `msgFontWeight` | `string` | Font weight of the msg |
| `borderColorAnimation` | `string` | Color of the circle of the check animation |
| `lineColorAnimation` | `string` | Color of the lignes of the check animation |
| `buttonFontWeight` | `string` | Font weight of the text in the close button |
| `buttonColor` | `string` | Backgroud color of the close button, must use rgb to work (ex: `'rgb(33, 136, 56)'`) |
| `buttonColorHovered` | `string` | Backgroud color of the close button when hovered, must use rgba to work (ex: `'rgba(33, 136, 56, 0.8)'`) |

## Style 

The component uses a combination of default styles in `index.scss` and inline css with `modalStyle`. To personalise or override the component you can :
 * Change default style in `index.scss`.
 * Use your own values with the prop `modalStyle`

### Exemple d'object `modalStyle`

```js
  const modalStyle = {
    blockerBackgroundColor: 'rgba(0,0,0,0.75)',
    modalWidth: 'clamp(500px, 90% , 100px)',
    textColor: '#000',
    textAlign: 'center',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    msgFontWeight: '800',
    borderColorAnimation: 'rgba(54, 121, 184, 0.5)',
    lineColorAnimation: 'rgb(54, 121, 184)',
    buttonColor: 'rgb(54, 121, 184)',
    buttonColorHovered: 'rgba(54, 121, 184, 0.5)',
  };
```

## Version

1.0.3

## Keywords

React, Modal, Customizable, Component, UI

## Author

[Yacine D](https://github.com/Yacine-Di)