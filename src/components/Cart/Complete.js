import { Card, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function Complete() {

    let history = useHistory();

    const buttonHandler =()=>{
        history.push("/products")
      }
    return (
        <div>
            <h3>Thank you for shopping with us. You have successfully submitted your order</h3>
            <Button onClick={buttonHandler}>Back to Product Page</Button>
        </div>
    )
}

export default Complete;