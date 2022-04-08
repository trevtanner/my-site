import { Fragment } from "react";
import styles from "../../Home.module.css";
import {
  LinearProgress,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

import ImportContactsIcon from "@mui/icons-material/ImportContacts";

export default function KnowledgeBase() {
  const KNOWLEDGE_DATA = [
    {
      name: "React",
      value: 90,
      color: "primary",
    },
    {
      name: "HTML/CSS",
      value: 95,
      color: "secondary",
    },
    {
      name: "PHP",
      value: 80,
      color: "success",
    },
    {
      name: "Laravel",
      value: 80,
      color: "primary",
    },
    {
      name: "SQL",
      value: 70,
      color: "secondary",
    },
    {
      name: "AWS",
      value: 55,
      color: "success",
    },
    {
      name: "Object-Oriented Programming",
      value: 65,
      color: "primary",
    },
  ];

  const reactValue = 90;
  const htmlcssValue = 95;
  const phpValue = 80;
  const laravelValue = 80;
  const sqlValue = 70;
  const oopValue = 65;
  const awsValue = 55;

  const knowledgeBase = KNOWLEDGE_DATA.map((entry) => (
    <>
      <Typography variant="body1" color='#FEFEFA'>
        {entry.name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant={entry.color} value={entry.value} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {entry.value}%
        </Typography>
      </Box>
    </>
  ));

  return (
    <Container
        sx={{ mb: "1em", pb: "1em", pt: ".5em", minWidth: "75%", maxWidth: '90%' }}
      >
        <div>
    {/* fix issue with margins in full screen */}
          <ImportContactsIcon fontSize="large" />
          <Typography variant="h4" marked="center" sx={{ pb: ".5em" }}>
            Knowledge Base
          </Typography>
          
          <Typography variant="body1" color='#FEFEFA'>
            React
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                color="primary"
                value={reactValue}
              />
            </Box>
            <Typography variant="body2" color='#FEFEFA'>
              {reactValue}%
            </Typography>
          </Box>
          <Typography variant="body1" color='#FEFEFA'>
            HTML/CSS
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                color="secondary"
                value={htmlcssValue}
              />
            </Box>
            <Typography variant="body2" color='#FEFEFA'>
              {htmlcssValue}%
            </Typography>
          </Box>
          <Typography variant="body1" color='#FEFEFA'>
            PHP
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                color="success"
                value={phpValue}
              />
            </Box>
            <Typography variant="body2" color='#FEFEFA'>
              {phpValue}%
            </Typography>
          </Box>
          <Typography variant="body1" color='#FEFEFA'>
            Laravel
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                color="primary"
                value={laravelValue}
              />
            </Box>
            <Typography variant="body2" color='#FEFEFA'>
              {laravelValue}%
            </Typography>
          </Box>
          <Typography variant="body1" color='#FEFEFA'>
            SQL
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                color="secondary"
                value={sqlValue}
              />
            </Box>
            <Typography variant="body2" color='#FEFEFA'>
              {sqlValue}%
            </Typography>
          </Box>
          <Typography variant="body1" color='#FEFEFA'>
            AWS
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                color="success"
                value={awsValue}
              />
            </Box>
            <Typography variant="body2" color='#FEFEFA'>
              {awsValue}%
            </Typography>
          </Box>
          <Typography variant="body1" color='#FEFEFA'>
            Object-Oriented Programming
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                color="primary"
                value={oopValue}
              />
            </Box>
            <Typography variant="body2" color='#FEFEFA'>
              {oopValue}%
            </Typography>
          </Box>
        </div>
      </Container>
  );
}
