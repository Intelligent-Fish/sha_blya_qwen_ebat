const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Раздача статических файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint для суммирования двух чисел
app.post('/api/sum', (req, res) => {
    const { num1, num2 } = req.body;
    
    // Проверка валидности входных данных
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Оба параметра должны быть числами' });
    }
    
    const result = num1 + num2;
    res.json({ result });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
