import React, { Component } from 'react';

/* material-ui */
import { IconButton, Subheader } from 'material-ui';
import { GridList, GridTile } from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: './images/1.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: './images/2.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: './images/3.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: './images/4.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: './images/5.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: './images/6.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: './images/7.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: './images/8.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];



export default class Photos extends Component {
  render () {
    return (
      <div style={styles.root}>
        <Card>
          <CardHeader 
            title="Photos"
          />
          <CardText>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                  subtitle={<span>by <b>{tile.author}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={require(tile.img)} />
                </GridTile>
              ))}
            </GridList>
          </CardText>
        </Card>
      </div>
    );
  }
}


