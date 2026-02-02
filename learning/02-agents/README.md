# 02. Agents 模块

## 概述

Agents（子代理）是专门化的 AI 助手，你可以将特定任务委托给它们。每个 agent 都有明确的职责范围和可用的工具。

---

## 所有可用 Agents

| Agent | 用途 | 模型 |
|-------|------|------|
| **planner** | 功能实现规划 | sonnet |
| **architect** | 系统架构设计 | sonnet |
| **tdd-guide** | 测试驱动开发指导 | sonnet |
| **code-reviewer** | 代码质量与安全审查 | sonnet |
| **security-reviewer** | 安全漏洞分析 | sonnet |
| **build-error-resolver** | 修复构建错误 | haiku |
| **e2e-runner** | Playwright E2E 测试 | sonnet |
| **refactor-cleaner** | 死代码清理 | sonnet |
| **doc-updater** | 文档同步更新 | sonnet |
| **go-reviewer** | Go 代码专项审查 | sonnet |
| **go-build-resolver** | Go 构建错误修复 | haiku |

---

## 核心概念

### 什么是 Agent？

Agent 就像一个"专家助手"，当你需要特定领域的帮助时，Claude 会自动调用对应的 agent。

**示例**:
```
你: "帮我审查这段代码的安全性"
Claude: [自动调用 security-reviewer agent]
```

### Agent 的优势

| 优势 | 说明 |
|------|------|
| **专注** | 每个 agent 只做一件事，做得更好 |
| **上下文隔离** | 不占用主会话的上下文窗口 |
| **并行处理** | 可以同时运行多个 agent |
| **专业工具** | 每个 agent 有专属的工具集 |

---

## 常用 Agents 详解

### 1. code-reviewer - 代码审查员

**职责**: 审查代码质量、安全性和可维护性

**触发方式**:
- 写完代码后自动触发（通过 hook）
- 手动调用

**检查项**:
- 代码质量
- 安全漏洞（OWASP Top 10）
- 可维护性
- 最佳实践

---

### 2. planner - 规划师

**职责**: 为功能实现制定详细计划

**何时使用**:
- 实现新功能
- 重构大型模块
- 不确定实现方案时

**输出**:
- 分步实现计划
- 关键文件列表
- 架构权衡分析

---

### 3. architect - 架构师

**职责**: 系统设计决策和技术选型

**何时使用**:
- 设计新系统
- 技术选型
- 架构重构

---

## 演示示例

- `code-reviewer-demo.md` - 代码审查演示
- `planner-demo.md` - 规划演示
- `architect-demo.md` - 架构设计演示

---

## 下一步

了解 Agents 的工作原理后，让我们在实际项目中体验它们！
