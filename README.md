# react-dev-icon-pack

Precompiled ESM React icons (no JSX required). Single API per icon via `variant="outline" | "filled"`.

## Install
```sh
npm install react-dev-icon-pack
```

## Use
```jsx
import React from 'react';
import { DevCode, DevAudio, NavHome } from 'react-dev-icon-pack';

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

## Publishing
1) Unzip this folder
2) `npm login`
3) Update `package.json` name if you want a scoped name like `@your-scope/react-dev-icon-pack`
4) `npm publish --access public`

Alternatively, push to GitHub and enable CI (GitHub Actions) to publish on tag.
