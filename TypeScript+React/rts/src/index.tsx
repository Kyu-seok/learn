import ReactDOM from 'react-dom/client';
import EventComponent from './events/EventComponent';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return <EventComponent />;
};
root.render(<App />);