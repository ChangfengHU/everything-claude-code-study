# 第1课: /plan 命令 - 功能规划工作流

> **教师**: Claude
> **学员**: huchangfeng
> **日期**: 2026-02-01
> **课时**: 第1课 / 共9课
> **教学模式**: 互动式（我指挥，你执行）

---

## 📋 本课学习目标

- [ ] 理解 `/plan` 命令的作用和使用场景
- [ ] 掌握进入 plan 模式的方法
- [ ] 学会阅读和理解生成的计划文档
- [ ] 了解 plan 模式与直接实现的区别

---

## 📖 理论讲解

### 什么是 /plan 命令？

`/plan` 是一个**规划先行**的命令，它让你在写代码之前先制定详细的实现计划。

**核心理念**: "三思而后行"

### 何时使用 /plan？

| ✅ 应该使用 | ❌ 不需要使用 |
|-------------|---------------|
| 添加新功能 | 简单的拼写错误修复 |
| 重构大型模块 | 单行代码修改 |
| 多文件修改 | 明确 trivial 的改动 |
| 不确定实现方案 | 已知明确方案的改动 |

### /plan 的工作流程

```
1. 输入 /plan
   ↓
2. 进入 Plan Mode (规划模式)
   ↓
3. Claude 探索代码库 (使用 Read, Glob, Grep)
   ↓
4. Claude 分析现有模式
   ↓
5. Claude 生成实现计划 (写入 .claude/plan.md)
   ↓
6. 用户审核计划
   ↓
7. 用户批准 → 退出 plan mode 开始实现
```

### Plan Mode 的特点

| 特点 | 说明 |
|------|------|
| **只读探索** | 只能使用 Read, Glob, Grep 等只读工具 |
| **不能修改** | 不能使用 Edit, Write 等修改工具 |
| **专注分析** | 避免一边分析一边修改的混乱 |
| **生成计划** | 最终产出 .claude/plan.md 文件 |

---

## 🎬 实战演示 - 互动式教学

### 演示场景

我们将在 `practice/todo-api` 项目中规划一个新功能：
> **"添加待办事项的截止日期功能"**

---

### 📍 操作步骤 1：确认项目状态

**请在你的终端执行**：
```bash
cd /Users/huchangfeng/skills-study/everything-claude-code-study/practice/todo-api
ls -la
```

**预期输出**：你应该看到 `node_modules/`, `package.json`, `src/` 等文件和目录。

**执行后告诉我结果！**

---

### 📍 操作步骤 2：查看生成的计划文档

**请在你的终端执行**：
```bash
cat .claude/plan.md
```

**预期输出**：你应该看到刚才生成的完整实现计划。

**执行后告诉我结果！**

---

### 📍 操作步骤 3：理解计划内容

计划文档包含以下部分，请逐项阅读：

| 部分 | 说明 |
|------|------|
| **Requirements Restatement** | 需求重述 - 确认要做什么 |
| **Current Code Analysis** | 现状分析 - 了解当前代码 |
| **Implementation Plan** | 实现计划 - 分阶段步骤 |
| **Risks & Considerations** | 风险分析 - 潜在问题和缓解措施 |
| **Files to Create/Modify** | 文件清单 - 需要创建/修改的文件 |
| **Estimated Complexity** | 复杂度评估 - 时间估算 |

---

## 📝 教学记录

### 已完成操作记录

| 时间 | 操作 | 说明 |
|------|------|------|
| 00:07 | 创建项目目录 | `mkdir -p practice/{calculator,todo-api,web-scraper}` |
| 00:10 | 初始化 todo-api | `npm init -y` + `npm install express` |
| 00:15 | 创建基础代码 | `src/index.js` - 简单的 CRUD API |
| 00:20 | 执行 /plan 命令 | 触发 planner agent |
| 00:22 | 生成计划文档 | `.claude/plan.md` 已创建 |

### /plan 命令执行详解

**当你在 Claude Code 中输入 `/plan` 时**：

1. **Skill 被调用**: `everything-claude-code:plan`
2. **Agent 被启动**: `planner` 子代理接管
3. **只读探索阶段**:
   - `Read` 工具读取 `src/index.js`
   - `Glob` 工具扫描项目结构
4. **分析阶段**:
   - 识别现有模式（Express.js, 内存存储）
   - 确定需要修改的文件
5. **生成计划**:
   - 写入 `.claude/plan.md`
6. **等待确认**: 不会自动开始写代码

**为什么这样做？**

| 好处 | 说明 |
|------|------|
| **可见性** | 你能完整看到将要做什么 |
| **可控性** | 你可以修改或取消计划 |
| **学习性** | 理解实现思路后再动手 |
| **文档化** | 计划保留可追溯 |

---

## ✍️ 你的练习任务

**任务**: 使用 `/plan` 规划另一个功能

**场景**: 为 `practice/calculator` 项目规划"历史记录"功能

**要求**:
1. 先进入 calculator 目录
2. 创建一个基础计算器（支持加减乘除）
3. 使用 `/plan` 规划添加历史记录功能

**提示**:
```bash
cd /Users/huchangfeng/skills-study/everything-claude-code-study/practice/calculator

# 创建基础计算器文件
echo 'console.log("Calculator coming soon...");' > index.js

# 在 Claude Code 中输入：
# /plan
# 然后说：为计算器添加历史记录功能，显示最近10条计算历史
```

---

## ❓ 常见问题

### Q1: Plan Mode 中可以运行测试吗？
**A**: 不可以。Plan Mode 只能使用只读工具（Read, Glob, Grep），不能运行会修改系统的命令。

### Q2: 如果我对计划不满意怎么办？
**A**: 你可以：
- 在 Plan Mode 中继续对话，要求修改计划
- 直接编辑 `.claude/plan.md` 文件
- 退出 Plan Mode，手动实现

### Q3: 计划文档会影响后续实现吗？
**A**: 不会。计划只是一个参考，Claude 在实现时会根据实际情况灵活调整。

### Q4: /plan 和直接问 Claude "帮我实现X" 有什么区别？
**A**:
| /plan | 直接实现 |
|-------|----------|
| 先分析后实现 | 边分析边实现 |
| 生成计划文档 | 无文档 |
| 可以审核计划 | 直接开始写代码 |
| 适合复杂功能 | 适合简单改动 |

---

## 📚 本课小结

| 知识点 | 掌握情况 |
|--------|----------|
| /plan 命令的作用 | ⏳ 待你确认 |
| 何时使用 /plan | ⏳ 待你确认 |
| Plan Mode 的特点 | ⏳ 待你确认 |
| 计划文档的位置 | ✅ `.claude/plan.md` |
| 阅读计划文档 | ⏳ 待你确认 |

---

## 🔜 下节课预告

**第2课: /tdd 命令 - 测试驱动开发**

你将学习：
- TDD 的核心原则：RED → GREEN → REFACTOR
- 使用 `/tdd` 命令强制 TDD 工作流
- 为 todo-api 添加测试

---

## 📌 现在请执行

**请按照上面的「📍 操作步骤 1」和「📍 操作步骤 2」执行命令，然后告诉我结果！**

我会根据你的反馈继续讲解和更新文档。
