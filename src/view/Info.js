import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Container, Box, List, ListItem, ListItemText, Modal } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Info() {
  const hardSkills = [
    "HTML CSS Javascript Typescript ReactJs NextJs",
    "Python (NumPy, Pandas, Scikit-Learn, TensorFlow)",
    "Project management",
    "MySQL,MangoDB",
    "Business Service Representation Language (BSRL), ArchiMate, BPMN, ProcessEEF, SoaML",
    "Microsoft Excel, PowerPoint, and Word"
  ];

  const softSkills = [
    "Observation",
    "Decision making",
    "Communication",
    "Multi-tasking",
    "Leadership",
    "Adaptability",
    "Execution",
    "Resilience"
  ]
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container style={{ margin: '0 auto', padding: '20px' }}>
      <Card sx={{ maxWidth: 1000, mx: "auto" }}>
        <Typography gutterBottom variant="h5" component="div" style={{ background: "#F7F7F7", fontFamily: "'Courier New', Courier, monospace", fontWeight: 700 }} align='center'>
          Hey, I'm Chang Liu
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', margin: 3 }}>
          <CardMedia
            component="img"
            height="200"
            image="/static/images/avatar.jpg"
            alt="Chang Liu"
          />
          <Box sx={{ ml: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 700 }}>
                Meet Chang Liu
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ fontSize: "15px" }}>
                I am currently pursuing a Master's degree in Information Technology at the University of Wollongong, Australia, with a focus on enhancing my skills in front-end and full-stack development. My technical expertise includes <b>HTML, CSS, JavaScript, React,Python</b>, and Redux, alongside backend technologies like Node.js. My experience spans working with databases and developing dynamic web applications that improve user experiences.<br />
                Throughout my studies, I have developed a strong foundation in both theoretical knowledge and practical applications, reinforced by my participation in various projects that address real-world problems. I possess strong problem-solving skills, am proficient in managing complex projects, and am adept at communicating technical information clearly and effectively
              </Typography>
              <Button size="small" onClick={handleOpen}>Contact Me</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Contact Info
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <MailOutlineIcon />
                      <Typography variant="body1" component="span">
                        stanliu778@gmail.com
                      </Typography>
                    </Box><Box display="flex" alignItems="center" gap={1}>
                    <WhatsAppIcon />
                      <Typography variant="body1" component="span">
                      +61 (0) 434553727
                      </Typography>
                    </Box>
                  </Typography>
                </Box>
              </Modal>
            </CardContent>
          </Box>
        </Box>
      </Card>
      <List sx={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
          <Card sx={{
            width: '100%', height: 'auto', transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
          }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ background: "#F7F7F7", fontFamily: "'Courier New', Courier, monospace", fontWeight: 700 }} align='center'>
                Education
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <List sx={{ display: 'flex', flexDirection: "column" }}>
                  <ListItem><ListItemText primary="Wollongong University" secondary="Masters in Information Technology - Currently Enrolled (Started in July 2023)" primaryTypographyProps={{ style: { fontSize: '18px', fontWeight: 'bold' } }} secondaryTypographyProps={{ style: { fontSize: '15px', color: 'gray' } }} /></ListItem>
                  <ListItem><ListItemText primary="Shanghai University of Engineering Science" secondary="Bachelor’s Degree in Aircraft Maintenance - Completed in 2014" primaryTypographyProps={{ style: { fontSize: '18px', fontWeight: 'bold' } }} secondaryTypographyProps={{ style: { fontSize: '15px', color: 'gray' } }} /></ListItem>
                </List>
              </Typography>
            </CardContent>
          </Card>
        </ListItem>
        <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
          <Card sx={{
            width: '100%', height: 'auto', transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
          }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ background: "#F7F7F7", fontFamily: "'Courier New', Courier, monospace", fontWeight: 700 }} align='center'>
                Hard Skill
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <List sx={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  {hardSkills.map(skill => (
                    <ListItem key={skill}>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </Typography>
            </CardContent>
          </Card>
        </ListItem>
        <ListItem sx={{ width: '100%', maxWidth: '33%', flexBasis: '33%', boxSizing: 'border-box', margin: '0 auto', padding: 1 }}>
          <Card sx={{
            width: '100%', height: 'auto', transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.1)', zIndex: 1 }
          }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ background: "#F7F7F7", fontFamily: "'Courier New', Courier, monospace", fontWeight: 700 }} align='center'>
                Soft Skill
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <List sx={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  {softSkills.map(skill => (
                    <ListItem key={skill}>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </Typography>
            </CardContent>
          </Card>
        </ListItem>
      </List>
    </Container>
  );
}
