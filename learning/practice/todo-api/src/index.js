const express = require('express');
const app = express();

app.use(express.json());

// 待办事项列表 (内存存储)
let todos = [];

// GET /todos - 获取所有待办事项
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos - 创建待办事项
app.post('/todos', (req, res) => {
  const { title } = req.body;
  const todo = {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date()
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// DELETE /todos/:id - 删除待办事项
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
