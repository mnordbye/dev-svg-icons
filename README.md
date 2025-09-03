# dev-svg-icons

Precompiled ESM React icons (no JSX required). Single API per icon via `variant="outline" | "filled"`.

## Install
```sh
npm install dev-svg-icons
```

## Use
```jsx
import React from 'react';
import { DevCode, DevAudio, NavHome } from 'dev-svg-icons';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <DevCode size={24} />
      <DevCode size={24} variant="filled" />
      <NavHome size={28} color="#0ea5e9" />
      <NavHome size={28} color="#0ea5e9" variant="filled" />
      <DevAudio size={24} />
      <DevAudio size={24} variant="filled" />
    </div>
  );
}
```
