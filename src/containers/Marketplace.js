import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'
import { Container, Card } from 'semantic-ui-react'

const MarketPlace = (props) => {
  const songItem = props.songList.map((song) => {
    return <Item song={song} parent="market"/>
  })
  return (
    <Container>
        <Card.Group>
          {songItem}
        </Card.Group>
    </Container>
    // <div>
    //   MarketPlace
    //   {songItem}
    // </div>
  )
}

function mapStateToProps(state){
  return {
    songList: state.songList
  }
}

export default connect(mapStateToProps)(MarketPlace);