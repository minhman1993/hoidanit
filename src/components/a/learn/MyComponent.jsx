import './style.css';

const MyComponent = () => {
  return (
    <>
      <div>MANTAROU</div>;
      <div
        className='child'
        style={{ borderRadius: '10px', backgroundColor: 'yellow' }}
      >
        RED
      </div>
    </>
  );
};
export default MyComponent;
