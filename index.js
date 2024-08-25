const express = require("express");
const app = express();

app.use(express.json()); 
app
  .route("/bfhl")
  .get((req, res) => {
    
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
   
    const data = req.body.data || []; 
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

   
    for (const item of data) {
      if (!isNaN(item)) {
        
        numbers.push(item);
      } else if (item.length === 1 && /^[a-zA-Z]$/.test(item)) {
      
        alphabets.push(item);

        
        if (item === item.toLowerCase() && item > highest_lowercase_alphabet) {
          highest_lowercase_alphabet = item;
        }
      }
    }

    
    res.json({
      is_success: true,
      user_id: "john_doe_17091999", 
      email: "john@xyz.com",        
      roll_number: "ABCD123",       
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
    });
  });


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
