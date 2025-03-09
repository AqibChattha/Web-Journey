import { useState } from 'react'
import Button from '../components/Button';
import Alert from '../components/Alert';

const Home = () => {    
  const [alertVisible, setAlertVisible] = useState(false);

  return (    
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello World</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Hello World</Button>
    </>
  )
}

export default Home