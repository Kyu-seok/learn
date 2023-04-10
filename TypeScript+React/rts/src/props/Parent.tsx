import { Child } from './Child';

const Parent = () => {
  return <Child color='red' onClick={() => console.log('Clicked')}>App</Child>
};

export default Parent;