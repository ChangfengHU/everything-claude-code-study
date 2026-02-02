# 05. Rules 模块

## 概述

Rules（规则）是 Claude 必须始终遵循的开发准则。与 Skills 不同，Rules 是强制性的，不会因为场景变化而被忽略。

---

## 所有可用 Rules

| Rule | 内容 |
|------|------|
| **security.md** | 强制性安全检查（无硬编码密钥、OWASP 检查） |
| **coding-style.md** | 编码风格（不可变性、文件组织、命名规范） |
| **testing.md** | 测试要求（TDD、80% 覆盖率） |
| **git-workflow.md** | Git 工作流（提交格式、PR 流程） |
| **agents.md** | 何时委托给子代理 |
| **performance.md** | 性能优化（模型选择、上下文管理） |
| **refactoring.md** | 重构准则 |
| **documentation.md** | 文档要求 |
| **error-handling.md** | 错误处理规范 |
| **api-design.md** | API 设计原则 |

---

## 核心规则详解

### 1. security.md - 安全规则

**强制性要求**:
- ❌ 禁止硬编码密钥、密码、token
- ❌ 禁止 SQL 注入风险代码
- ❌ 禁止 XSS 漏洞
- ✅ 所有用户输入必须验证
- ✅ 敏感操作必须审计日志

**触发场景**: 添加认证、处理用户输入、创建 API 端点

---

### 2. coding-style.md - 编码风格

**核心原则**:
- 优先使用不可变数据结构
- 单个文件不超过 300 行
- 函数不超过 50 行
- 使用有意义的变量名
- 避免过早抽象

---

### 3. testing.md - 测试规则

**强制性要求**:
- 新功能必须先写测试（TDD）
- 测试覆盖率 ≥ 80%
- 包含单元测试、集成测试、E2E 测试
- 使用表驱动测试（Go）

---

### 4. git-workflow.md - Git 工作流

**提交格式**:
```
<type>: <简短描述>

详细说明

Co-Authored-By: Claude <noreply@anthropic.com>
```

**类型**: feat, fix, refactor, docs, test, chore

**PR 要求**:
- 必须通过所有检查
- 至少一个审查批准
- 自动更新文档

---

## Rules vs Skills

| | Rules | Skills |
|---|-------|--------|
| **性质** | 强制性 | 指导性 |
| **优先级** | 高 | 中 |
| **灵活性** | 无 | 有 |
| **目的** | 约束行为 | 传授知识 |

---

## 配置位置

Rules 需要手动复制到：
- **全局**: `~/.claude/rules/`
- **项目**: `.claude/rules/`

```bash
# 复制所有规则到全局
cp -r ~/.claude/plugins/cache/everything-claude-code/everything-claude-code/1.2.0/rules/* ~/.claude/rules/

# 复制到当前项目
mkdir -p .claude/rules
cp -r ~/.claude/plugins/cache/everything-claude-code/everything-claude-code/1.2.0/rules/* .claude/rules/
```

---

## 演示示例

- `security-demo.md` - 安全规则演示
- `tdd-enforcement.md` - 测试规则强制执行
- `git-workflow-demo.md` - Git 工作流演示

---

## 下一步

现在让我们开始实际演示每个功能！从 `/plan` 命令开始？
