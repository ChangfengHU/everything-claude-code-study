# 03. Skills 模块

## 概述

Skills（技能）是工作流定义和领域知识的集合。它们定义了如何完成特定任务的模式和最佳实践。

---

## 所有可用 Skills

| Skill | 用途 |
|-------|------|
| **coding-standards** | 通用编码标准（TypeScript、JavaScript、React） |
| **backend-patterns** | 后端模式（API、数据库、缓存） |
| **frontend-patterns** | 前端模式（React、Next.js、状态管理） |
| **golang-patterns** | Go 语言惯用模式和最佳实践 |
| **golang-testing** | Go 测试模式（表驱动测试、基准测试） |
| **tdd-workflow** | 测试驱动开发完整工作流 |
| **security-review** | 安全检查清单和模式 |
| **postgres-patterns** | PostgreSQL 查询优化和模式设计 |
| **springboot-patterns** | Spring Boot 架构模式 |
| **springboot-security** | Spring Security 最佳实践 |
| **springboot-tdd** | Spring Boot TDD 工作流 |
| **jpa-patterns** | JPA/Hibernate 实体设计和关系映射 |
| **continuous-learning** | 从会话中自动提取模式（长版指南） |
| **continuous-learning-v2** | 基于本能的学习系统（带置信度评分） |
| **iterative-retrieval** | 渐进式上下文优化模式 |
| **strategic-compact** | 手动压缩建议策略 |
| **eval-harness** | 验证循环评估框架 |
| **clickhouse-io** | ClickHouse 数据库模式 |

---

## 核心概念

### 什么是 Skill？

Skill 就像一个"配方"，告诉 Claude 如何完成特定类型的任务。

**示例**:
```markdown
# TDD Workflow Skill

1. 定义接口
2. 编写失败的测试 (RED)
3. 实现最小代码 (GREEN)
4. 重构优化 (REFACTOR)
5. 验证覆盖率 ≥80%
```

### Skill 的组成

| 组成部分 | 说明 |
|----------|------|
| **模式** | 解决特定问题的方法 |
| **最佳实践** | 推荐的编码方式 |
| **反模式警告** | 应避免的做法 |
| **示例代码** | 实际代码示例 |

---

## 重要 Skills 详解

### 1. tdd-workflow - TDD 工作流

**核心原则**: 先写测试，后写代码

**流程**:
```
RED → GREEN → REFACTOR
```

**要求**:
- 测试覆盖率 ≥80%
- 单元测试 + 集成测试 + E2E 测试

---

### 2. security-review - 安全审查

**检查项**:
- 硬编码密钥
- SQL 注入
- XSS 漏洞
- CSRF 保护
- 输入验证
- OWASP Top 10

---

### 3. continuous-learning-v2 - 持续学习

**功能**: 自动从你的编码会话中学习模式

**命令**:
- `/instinct-status` - 查看已学习的本能
- `/instinct-export` - 导出本能
- `/instinct-import` - 导入本能
- `/evolve` - 将本能聚类为技能

---

## Skill vs Agent

| | Skill | Agent |
|---|-------|-------|
| **本质** | 配方/知识 | 执行者 |
| **触发** | 被动（被 agent/命令调用） | 主动（被委托任务） |
| **工具** | 无 | 有专属工具集 |
| **关系** | Agent 使用 Skill | Agent 调用 Skill |

---

## 演示示例

- `tdd-workflow-demo.md` - TDD 工作流演示
- `security-demo.md` - 安全审查演示
- `learning-demo.md` - 持续学习演示

---

## 下一步

Skills 是被动触发的，通常由 Agent 或 Command 调用。让我们看看如何主动使用它们！
