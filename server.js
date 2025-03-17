const app = require('./app');
const PORT = process.env.PORT || 3000; // Use PORT from environment or fallback to 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});