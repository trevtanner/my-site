import { Avatar, Grid, Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'
import BookIcon from '@mui/icons-material/Book'
import headshot from '../../assets/headshot.jpg'

function about() {
  let paraStyle = { margin: 'auto', color: 'black', maxWidth: '40vw' }

  return (
    <Box sx={{ padding: '2em' }}>
      <motion.div
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          sx={{ textDecoration: 'underline', pb: '.5em', color: 'black' }}
        >
          About Me
        </Typography>
        <Grid container spacing={2} sx={{ pt: '1em', pb: '.5em' }}>
          <Grid item xs={12} md={6}>
            <Avatar
              alt="Trevor Tanner"
              src={headshot}
              sx={{ width: 100, height: 100, margin: 'auto' }}
            />
            <Typography variant="h4" pt=".5em" sx={{ color: 'black' }}>
              Who Am I?
            </Typography>
            <Typography variant="body2" sx={paraStyle}>
              Programming is my passion, and love to work and projects even in
              my free time. When I&apos;m not writing code I&apos;m working on
              my PC, or playing video games. My first job in the industry was
              working for Spectrum Cable, where I learned what was needed from a
              large company in an office setting. I am a self-taught developer
              with React however I have taken some Computer Programming college
              courses, and am working towards a Bachelor's Degree in the field.
              While this does present some challenges, I feel that it has helped
              me work through any problems I come across, and gives me a
              stronger base to work from. I do know that I am far from knowing
              everything, but I have learned some great tricks from researching
              my issues, and I'm sure they will lend to a great final product
              for any site I am working on.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ pb: '2em' }}>
            <BookIcon sx={{ width: 64, height: 64, color: 'black' }} />
            <Typography
              variant="h4"
              pt=".5em"
              pb=".25em"
              sx={{ color: 'black' }}
            >
              My Top Libraries
            </Typography>
            {/* Link to pages for tools */}
            <Typography variant="h6" sx={{ color: 'black' }}>
              MUI
            </Typography>
            <Typography variant="body2" sx={paraStyle}>
              My most used library, almost all of my projects use it in some
              form to style my apps.
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              React Router
            </Typography>
            <Typography variant="body2" sx={paraStyle}>
              React Router always makes it so easy to set up multipage apps.
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              Framer Motion
            </Typography>
            <Typography variant="body2" sx={paraStyle}>
              Apps need some sort of motion to give the best UI experience.
              Having elements fade in and move based on user input makes for
              better apps, and Franer allows me to do that and more.
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              Material Icons
            </Typography>
            <Typography variant="body2" sx={paraStyle}>
              Icons help any site go from boring text to an emersive experience.
              Material Icons has options for any icon you can think of.
            </Typography>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  )
}

export default about
