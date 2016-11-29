import React, { Component } from 'react';

/* material-ui */
import { grey400 } from 'material-ui/styles/colors';

import { Avatar, IconButton, IconMenu, MenuItem } from 'material-ui';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem, makeSelectable } from 'material-ui/List';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const likesPull = [
  { n: 'Alexander Dacota', a: 'A', d: 'Some text' },
  { n: 'Crew Texas', a: 'C', d: 'Description' },
  { n: 'Judjin Calumbia', a: 'J', d: 'Perfection' },
  { n: 'Milla Dacota', a: 'M', d: 'Millenium' },
]

export default class Likes extends Component {
  render () {
    return (
      <Card>
        <CardHeader 
          title="Likes"
        />
        <CardText>
          <List>
            {
              likesPull.map((item, key) => <ListItem 
                key={key}
                primaryText={item.n}
                secondaryText={ <p> {item.d} </p> }
                secondaryTextLines={2}
                leftAvatar={<Avatar>{item.a}</Avatar>}
              />)
            }
          </List>
        </CardText>
      </Card>
    );
  }
}


