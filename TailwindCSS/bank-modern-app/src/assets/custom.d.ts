declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import { ReactComponent } from 'react';
  const value: ReactComponent;
  export default value;
}
