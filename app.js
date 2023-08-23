const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8008;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid URL parameter' });
  }

  const uniqueNumbers = new Set();

  const fetchPromises = urls.map(async (url) => {
    try {
      const response = await axios.get(url, { timeout: 500 });
      const numbers = response.data.numbers;
      numbers.forEach((num) => uniqueNumbers.add(num));
    } catch (error) {
      console.error(`Error fetching data from URL ${url}: ${error.message}`);
    }
  });

  try {
    await Promise.all(fetchPromises);
  } catch (error) {
    console.error(`Error while fetching data: ${error.message}`);
  }

  const sortedNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
  res.json({ numbers: sortedNumbers });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});