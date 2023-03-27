import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TodoCard() {
  return (
    <div className='mt-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Titulo da tarefa</Card.Title>
        <Card.Text>
          Assunto da tarefa
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default TodoCard;