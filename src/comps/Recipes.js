import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Recipes = () => {
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="100x100" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Button variant="warning">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    )
}

export default Recipes
