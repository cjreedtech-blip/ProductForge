# ProductForge Architecture

## Vision

ProductForge is an AI product copilot that connects product management, UX, and engineering through AI.

## Architecture

```
User
  │
  ▼
Claude Desktop
  │
  ▼
MCP
  │
  ▼
Figma MCP Server
  │
  ▼
Figma API
  │
  ▼
Selected Frame
  │
  ▼
Claude Analysis
  │
  ▼
Structured Product Review
```

## Design Philosophy

ProductForge is designed to augment product teams—not replace them.

The AI surfaces insights, identifies risks, and recommends improvements while leaving product decisions to humans.

## Future Integrations

- GitHub
- Linear
- Jira
- Notion
- Slack
- OpenAI