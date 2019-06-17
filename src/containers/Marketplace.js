import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'

const MarketPlace = (props) => {
  const songItem = props.songList.map((song) => {
    return <Item song={song} parent="market"/>
  })
  return (
    <div>
      MarketPlace
      {songItem}
    </div>
  )
}

function mapStateToProps(state){
  return {
    songList: state.songList
  }
}

export default connect(mapStateToProps)(MarketPlace);