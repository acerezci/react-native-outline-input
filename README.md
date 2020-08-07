
# react-native-outline-input

This repository is react-native animated input component

| ![ezgif com-video-to-gif](https://user-images.githubusercontent.com/59888174/88774626-592d7780-d18c-11ea-83a7-e0d2676dfe2c.gif) |
|----|




##  Installation

> npm install react-native-outline-input

or
> yarn add react-native-outline-input

## Usage

```js
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import OutlineInput from 'react-native-outline-input';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <OutlineInput
        value={email}
        onChangeText={(e: string) => setEmail(e)}
        label="Username"
        activeValueColor="#6c63fe"
        activeBorderColor="#6c63fe"
        activeLabelColor="#6c63fe"
        passiveBorderColor="#bbb7ff"
        passiveLabelColor="#bbb7ff"
        passiveValueColor="#bbb7ff"
      />
      <OutlineInput
        value={password}
        onChangeText={(e: string) => setPassword(e)}
        label="Username"
        activeValueColor="#6c63fe"
        activeBorderColor="#6c63fe"
        activeLabelColor="#6c63fe"
        passiveBorderColor="#bbb7ff"
        passiveLabelColor="#bbb7ff"
        passiveValueColor="#bbb7ff"
      />
    </SafeAreaView>
  );
};

export default App;
```

## Props

|Prop|Type|Default|Description|
|----|----|----|--------|
| label | string | any | The label that will display giving information about your input field
| onChangeText | function | any |Function that works when there is a change
| value | string | any | Value of input
| secureTextEntry | boolean | false | If true, the text input obscures the text entered 
| autoCapitalize | string | none | Can tell to automatically capitalize certain characters
| fontSize | number | 16 |Determines the font size
| height | number | 56 | The label that will display giving information about your input field.
| duration | number | 300 | Determines the animation time 
| easing | EasingFunction | Easing.inOut(Easing.ease) |   Determines the animation type
| activeValueColor | string | #51AD56 | Determines active value color
| passiveValueColor | string | #757575 | Determines passive value color
| activeLabelColor | string | #51AD56 | Determines active label color
| passiveLabelColor | string | #757575 | Determines passive label color
| activeBorderColor | string | #51AD56 | Determines active border color
| passiveBorderColor | string | #EFEFEF | Determines passive border color
| fontFamily | string | System | Determines value and label font family

Thank you for your contribution to Burhan Yılmaz ([@burhanyilmaz](https://github.com/burhanyilmaz))
