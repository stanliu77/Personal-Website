import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "./projects.css"

export default function Projects(props) {
  console.log(props.history)
  return (
    <div className='box'>
      <Typography variant="h2" gutterBottom align='center' style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif",fontWeight:700 }}>
        Projects
      </Typography>
      <div style={{ width: "1000px", margin: '0 auto' }}>
        <List sx={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
            <Card sx={{
              width: '100%', height: 'auto', transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
            }}>
              <CardMedia
                component="img"
                alt="Whack A Mole Game"
                image="/static/images/mole.png"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Whack A Mole Game
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Whack A Mole Game is a fun, interactive game where players score points by using a mouse to hit moles that appear randomly on the screen within a set time limit
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{props.history.push("/home/projects/1")}}>Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
            <Card sx={{
              width: '100%', height: 'auto', transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
            }}>
              <CardMedia
                component="img"
                alt="JavaScript Drum Kit"
                image="/static/images/drum.png"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JavaScript Drum Kit
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  JavaScript Drum Kit is an engaging interactive game that lets players create drum sounds by pressing corresponding keys on their keyboard.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{props.history.push("/home/projects/2")}}>Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
            <Card sx={{
              width: '100%', height: 'auto', transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
            }}>
              <CardMedia
                component="img"
                alt="Slide In on Scroll"
                image="/static/images/slide.png"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Slide In on Scroll
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enhances the visual experience by introducing images that slide into place from the sides as you scroll down the page,dynamically present key visuals.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{props.history.push("/home/projects/3")}}>Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
            <Card sx={{
              width: '100%', height: 'auto', transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
            }}>
              <CardMedia
                component="img"
                alt="LocalStorage and Event Delegation"
                image="/static/images/LocalStorage.jpg"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  LocalStorage and Event Delegation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This feature utilizes local storage to save user input, ensuring that added items persist even after a page refresh.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{props.history.push("/home/projects/4")}}>Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
            <Card sx={{
              width: '100%', height: 'auto', transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
            }}>
              <CardMedia
                component="img"
                alt="Playing with CSS Variables and JS"
                image="/static/images/playing.jpg"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Playing with CSS Variables and JS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This tool allows users to dynamically manipulate CSS properties using JavaScript.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{props.history.push("/home/projects/5")}}>Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
            <Card sx={{
              width: '100%', height: 'auto', transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
            }}>
              <CardMedia
                component="img"
                alt="Hold Shift to Check Multiple Checkboxes"
                image="/static/images/shift.jpg"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hold Shift to Check Multiple Checkboxes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This application allows users to select multiple checkboxes quickly by holding down the Shift key.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{props.history.push("/home/projects/6")}}>Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
            <Card sx={{
              width: '100%', height: 'auto', transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
            }}>
              <CardMedia
                component="img"
                alt="Stripe Follow Along Dropdown"
                image="/static/images/dropdown.png"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stripe Follow Along Dropdown
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This interactive navigation feature includes dropdown menus that seamlessly follow your cursor, enhancing usability and engagement.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{props.history.push("/home/projects/7")}}>Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
            <Card sx={{
              width: '100%', height: 'auto', transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
            }}>
              <CardMedia
                component="img"
                alt="Ajax Type Ahead"
                image="/static/images/search.jpg"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ajax Type Ahead
                </Typography>
                <Typography variant="body2" color="text.secondary">
                This tool provides instantaneous search suggestions as users type, leveraging AJAX to deliver real-time results without refreshing the page. It’s an ideal solution for enhancing user interaction by offering faster and more accurate search capabilities.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{props.history.push("/home/projects/8")}}>Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
            <Card sx={{
              width: '100%', height: 'auto', transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
            }}>
              <CardMedia
                component="img"
                alt="Native Speech Recognition"
                image="/static/images/speech.jpg"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Native Speech Recognition
                </Typography>
                <Typography variant="body2" color="text.secondary">
                This tool captures and displays spoken words instantly, offering a seamless integration of voice data into your applications.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{props.history.push("/home/projects/9")}}>Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
        </List>
      </div>
    </div>
  )
}
