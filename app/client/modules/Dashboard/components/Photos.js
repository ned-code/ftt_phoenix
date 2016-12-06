import React, { Component } from 'react';

/* material-ui */
import { Paper, Toolbar, ToolbarGroup, IconButton, Subheader } from 'material-ui';
import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class Photos extends Component {
  render () {
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
        img: require('../images/1.jpg'),
        title: 'Breakfast',
        author: 'jill111',
      },
      {
        img: require('../images/2.jpg'),
        title: 'Tasty burger',
        author: 'pashminu',
      },
      {
        img: require('../images/3.jpg'),
        title: 'Camera',
        author: 'Danson67',
      },
      {
        img: require('../images/4.jpg'),
        title: 'Morning',
        author: 'fancycrave1',
      },
      {
        img: require('../images/5.jpg'),
        title: 'Hats',
        author: 'Hans',
      },
      {
        img: require('../images/6.jpg'),
        title: 'Honey',
        author: 'fancycravel',
      },
      {
        img: require('../images/7.jpg'),
        title: 'Vegetables',
        author: 'jill111',
      },
      {
        img: require('../images/8.jpg'),
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
      },
    ];
    return (
      <Paper zDepth={1} style={styles.root} >
        <Toolbar style={{ width: '100%' }} >
          <ToolbarGroup firstChild={true}>
            <Subheader>Photos</Subheader>
          </ToolbarGroup>
        </Toolbar>
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
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </Paper>
    );
  }
}
