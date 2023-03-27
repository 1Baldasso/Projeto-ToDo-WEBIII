import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Informe uma tarefa a ser realizada!</Form.Label>
        <Form.Control type="text" placeholder="Sua tarefa" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Informe como será realizada!</Form.Label>
        <Form.Control type="text" placeholder="Resposta" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Carregar tarefa
      </Button>
      <Button variant="primary" type="submit">
        Editar
      </Button>
      <Button variant="primary" type="submit">
        Excluir tarefa
      </Button>
      <br/>
    </Form>
    
  );
}

export default BasicExample;