```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Unmounted');
    };
  }, [isActive]); // Add isActive to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>      
      <button onClick={() => setIsActive(false)}>Deactivate</button> 
    </div>
  );
}
```