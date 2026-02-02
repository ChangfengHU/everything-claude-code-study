# 04. Hooks 模块

## 概述

Hooks（钩子）是基于触发器的自动化机制。当特定事件发生时（如工具调用、会话结束），自动执行预定义的操作。

---

## Hook 触发时机

| 时机 | 说明 |
|------|------|
| **PreToolUse** | 工具调用之前 |
| **PostToolUse** | 工具调用之后 |
| **Stop** | 会话结束时 |
| **Start** | 会话开始时 |

---

## 内置 Hooks

### 1. memory-persistence - 记忆持久化

**功能**: 自动保存和加载会话上下文

**行为**:
- 会话开始时：加载之前保存的上下文
- 会话结束时：保存当前状态

**文件**: `hooks/hooks.json`

---

### 2. strategic-compact - 智能压缩建议

**功能**: 在合适的时机建议进行上下文压缩

**行为**:
- 监控会话长度
- 在逻辑阶段结束时建议压缩

---

## Hook 配置示例

### 示例：警告 console.log

```json
{
  "matcher": "tool == \"Edit\" && tool_input.file_path matches \"\\.(ts|tsx|js|jsx)$\"",
  "hooks": [{
    "type": "command",
    "command": "#!/bin/bash\ngrep -n 'console\\.log' \"$file_path\" && echo '[Hook] 请移除 console.log' >&2"
  }]
}
```

**效果**: 每次编辑 TypeScript/JavaScript 文件时，检查是否包含 console.log

---

## Hook 类型

| 类型 | 用途 |
|------|------|
| **command** | 执行 shell 命令 |
| **prompt** | 向用户显示提示 |
| **python** | 执行 Python 脚本 |
| **node** | 执行 Node.js 脚本 |

---

## 实用 Hook 示例

### 1. 防止提交密钥

```json
{
  "matcher": "tool == \"Edit\"",
  "hooks": [{
    "type": "command",
    "command": "grep -iE '(api[_-]?key|secret|password|token)' \"$file_path\" && echo '[Hook] 警告：文件可能包含敏感信息！' >&2"
  }]
}
```

### 2. 自动格式化

```json
{
  "matcher": "tool == \"Edit\" && tool_input.file_path matches \"\\.go$\"",
  "hooks": [{
    "type": "command",
    "command": "gofmt -w \"$file_path\""
  }]
}
```

---

## 配置位置

Hooks 配置文件位于：
```
~/.claude/plugins/cache/everything-claude-code/everything-claude-code/1.2.0/hooks/hooks.json
```

你可以将其复制到：
- **全局**: `~/.claude/hooks.json`
- **项目**: `.claude/hooks.json`

---

## 演示示例

- `memory-demo.md` - 记忆持久化演示
- `custom-hook-demo.md` - 自定义 Hook 演示

---

## 下一步

Hooks 是自动化的关键。让我们看看如何配置它们来自动化你的工作流！
