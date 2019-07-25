import React from 'react'
import { Container, Divider, Card } from 'semantic-ui-react'
import YouTube from 'react-youtube'
import StackGrid from 'react-stack-grid'

const Home = () => {

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  return (
    <div>
      <div>
        <Container textAlign='center'>
          <h3>Artist Highlights</h3>
        </Container>
      </div>
      <div>
        <br/>
        <Container textAlign='center'>
          <p className='home-header'>
            YouTube
          </p>
        </Container>
      </div>
      <Divider/>
      <StackGrid columnWidth={400} monitorImagesLoaded={true}>
        <Card>
          <YouTube videoId='j59tDqVVMec' opts={opts}/>
          <Card.Content>
            <Card.Header textAlign='center'>Devise</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <YouTube videoId='BhzIrrfeR0o' opts={opts}/>
          <Card.Content>
            <Card.Header textAlign='center'>Content</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <YouTube videoId='U2Z4apEPfPA' opts={opts}/>
          <Card.Content>
            <Card.Header textAlign='center'>Surrender</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <YouTube videoId='3g_g1fXoWeo' opts={opts}/>
          <Card.Content>
            <Card.Header textAlign='center'>Nonchalant</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <YouTube videoId='qRL1OzR6uks' opts={opts}/>
          <Card.Content>
            <Card.Header textAlign='center'>Duality</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <YouTube videoId='bRWWJZVqpNE' opts={opts}/>
          <Card.Content>
            <Card.Header textAlign='center'>Versatile</Card.Header>
          </Card.Content>
        </Card>
      </StackGrid>
    </div>
  )
}

export default Home;