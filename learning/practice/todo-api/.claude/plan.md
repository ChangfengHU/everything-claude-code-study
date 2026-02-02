# Implementation Plan: 添加待办事项截止日期功能

## Requirements Restatement

为 todo-api 添加**截止日期 (dueDate)** 功能：

1. **创建待办事项时**可以可选地设置 `dueDate` 字段
2. **GET /todos** 端点支持：
   - 按 `dueDate` 范围过滤（如：`?dueBefore=2026-02-10`）
   - 按 `dueDate` 排序（如：`?sortBy=dueDate&order=asc`）

---

## Current Code Analysis

**现状分析**：
- 单文件结构：`src/index.js` 包含所有 API 逻辑
- 内存存储：使用 `todos` 数组
- 现有端点：GET /todos, POST /todos, DELETE /todos/:id
- 无数据验证：直接使用请求体数据

**技术栈**：Express.js (v5.2.1)

---

## Implementation Plan

### Phase 1: 数据模型 & 验证

| 步骤 | 文件 | 说明 |
|------|------|------|
| 1.1 | `src/models/Todo.js` | 创建 Todo 类，包含 `dueDate` 字段验证 |
| 1.2 | `src/utils/validators.js` | 日期验证工具（ISO 8601 格式、未来日期） |

### Phase 2: 更新 POST 端点

| 步骤 | 文件 | 说明 |
|------|------|------|
| 2.1 | `src/index.js` | POST /todos 接受可选的 `dueDate` 参数 |
| 2.2 | `src/index.js` | 添加输入验证（使用 Todo 模型） |

### Phase 3: 更新 GET 端点

| 步骤 | 文件 | 说明 |
|------|------|------|
| 3.1 | `src/index.js` | 支持查询参数：`dueBefore`, `dueAfter` |
| 3.2 | `src/index.js` | 支持排序参数：`sortBy=dueDate`, `order=asc/desc` |

### Phase 4: 添加 PATCH 端点（额外优化）

| 步骤 | 文件 | 说明 |
|------|------|------|
| 4.1 | `src/index.js` | PATCH /todos/:id - 更新待办事项（包括 dueDate） |

---

## Risks & Considerations

| 风险 | 级别 | 缓解措施 |
|------|------|----------|
| 日期格式不一致 | MEDIUM | 强制 ISO 8601 格式验证 |
| 时区问题 | MEDIUM | 使用 UTC 或明确时区 |
| 无效日期输入 | LOW | 添加验证和错误处理 |
| 排序逻辑边界 | LOW | 处理 null/undefined dueDate |

---

## Files to Create/Modify

```
todo-api/
├── src/
│   ├── index.js          [修改] 添加查询参数、新端点
│   ├── models/
│   │   └── Todo.js       [新建] 数据模型和验证
│   └── utils/
│       └── validators.js [新建] 日期验证工具
```

---

## Estimated Complexity: LOW

| 阶段 | 预计时间 |
|------|----------|
| Phase 1: 模型 | 30 分钟 |
| Phase 2: POST 更新 | 20 分钟 |
| Phase 3: GET 更新 | 30 分钟 |
| Phase 4: PATCH 端点 | 20 分钟 |
| **总计** | **~100 分钟** |
