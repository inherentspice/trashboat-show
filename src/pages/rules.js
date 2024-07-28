import React from 'react';
import Layout from '../app/layout';
import DefinitionBox from '@/components/DefinitionBox';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const rulesData = [
  { title: "Step One", description: "go to the website (your already here so don't actually do this step, it will create an infinite loop of instructions)." },
  { title: "Step Two", description: "wait for host to tell you to click on a picture." },
  { title: "Step Three", description: "Write answer to question on piece of paper." },
  { title: "Step Four", description: "Listen to the comedians as they fill time while host marks answers." },
  { title: "Step Five", description: "Be nice." },
  { title: "Step Six", description: "Buy drinks at the venue." },
  { title: "Step Seven", description: "Win terrible prizes."}

];
const Rules = () => {
  return (
    <Layout>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Rules of the Game
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Welcome to Trashboat, a chaotic gameshow with terrible prizes. Today the game is simple: subjective trivia.
        All the questions are subjective. That means they&apos;re almost impossible to get correct.
        I don&apos;t know why I&apos;m writing this out. It&apos;s all in the name.
        <DefinitionBox
          term="Subjective"
          definition="based on or influenced by personal feelings, tastes, or opinions."
        />
        <DefinitionBox
          term="Trivia"
          definition="of little value or importance"
        />
        It&apos;s all in the name. All obvious, but here goes anyway.
        </Typography>
        <List sx={{ backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
          {rulesData.map((rule, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <ListItemText primary={rule.title} secondary={rule.description} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Layout>
  );
};

export default Rules;
