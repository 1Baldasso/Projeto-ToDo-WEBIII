import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TodoCard(props) {
  return (
    <div className='mt-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.entity.titulo}</Card.Title>
        <Card.Text>
          {props.entity.descricao}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default TodoCard;