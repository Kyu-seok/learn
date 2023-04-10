const EventComponent = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
    console.log('im being dragged');
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
  );

};

export default EventComponent;