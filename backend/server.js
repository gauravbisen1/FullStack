// const express = require('express');

import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Indexing Issues",
          content: "Why did the array break up with index 0? Because it needed some space before starting its real relationship at index 1."
        },
        {
          id: 2,
          title: "Out of Bounds",
          content: "I asked my array for a joke. It said: 'Sorry, that request is out of bounds.'"
        },
        {
          id: 3,
          title: "Sorted Life",
          content: "Why did the array from 1 to 5 look so peaceful? Because its life was already sorted."
        },
        {
          id: 4,
          title: "The Missing Element",
          content: "The array 1 to 5 went to school. Everyone was present except 3 because it kept skipping class."
        },
        {
          id: 5,
          title: "Zero Problems",
          content: "The array from 1 to 5 bragged, 'I have zero problems.' Zero replied, 'Exactly. I’m not even in your list.'"
        }
      ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});