// index.js
import { McpServer } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({ name: "meme-mcp", version: "1.0.0" });

// Example: register a simple command
server.command("ping", async () => {
  return { content: [{ type: "text", text: "pong" }] };
});

const transport = new StdioServerTransport();
server.connect(transport);
