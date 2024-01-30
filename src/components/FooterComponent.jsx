import Card from "react-bootstrap/Card"

const MyFooter = function (){
    return(
        <Card className="text-center">
        <Card.Header>Filippo Borelli</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Speriamo che la nostra pagina sia stata di vostro gradimento!{' '}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    )
}
export default MyFooter