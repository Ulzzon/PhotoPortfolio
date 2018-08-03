import React from 'react';
import {
  Card, CardBody, CardTitle, CardText, CardImg,
} from 'reactstrap';
import WallpaperImage from '../Saras_wallpaper.jpg';


const Blogpost = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="10%" src={WallpaperImage} alt="Card image cap" />
        <CardBody>
          <CardTitle>Blogpost 1</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional
             content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardImg top width="100%" src={WallpaperImage} alt="Card image cap" />
          <CardTitle>Blogpost 2</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional
             content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Blogpost;
