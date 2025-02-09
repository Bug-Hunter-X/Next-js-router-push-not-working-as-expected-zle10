```javascript
import {useRouter} from 'next/router';

const MyComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    // Ensure the push is successful by handling potential errors
    router.push('/another-page', undefined, { shallow: true })
    .then(() => {
      console.log('Navigation successful')
    }).catch(err => {
      console.error('Navigation failed:', err);
    }); 
  };

  return (
    <button onClick={handleClick}>
      Go to another page
    </button>
  );
};

export default MyComponent; 
```