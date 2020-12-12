import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button , Row, Col, Card, CardBody, CardTitle, CardLink , CardText, CardImg
} from 'reactstrap';
import './index.css'


class ContentFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      'items': []
    }
  }
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch('http://127.0.0.1:8000/search/')
    .then(results => results.json())
    .then(results => this.setState({'items': results}))
  }
  render() {
    return (
      <ul>
        {this.state.items.map(function(item, index) {
          return <ContentItem item={item} key={index} />
        })}
      </ul>
    );
  }
}

const ContentItem = ({ item }) => (
  <Row className="ContentItem">
    <Col xs="3" />
    <Col xs="12" sm="6">
      <Card border="dark">
        <CardImg top width="100%" src={item.thumbnail_url}></CardImg>
        <CardBody>
          <CardTitle>
            <h3> {item.title} </h3>
          </CardTitle>
          <CardText>
            {item.description}
          </CardText>
          <CardLink href={"https://www.youtube.com/watch?v=" + item.video_id }>Go to Video</CardLink>
        </CardBody>
      </Card>
    </Col>
  </Row>
)

ReactDOM.render(
  <ContentFeed />,
  document.getElementById('root')
);