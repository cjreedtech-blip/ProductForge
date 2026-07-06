# ProductForge Setup Guide

## Overview

ProductForge is an AI-powered product copilot that connects Claude Desktop to Figma using the Model Context Protocol (MCP).

## Prerequisites

- macOS
- Node.js
- Claude Desktop
- Figma Desktop
- Git
- GitHub CLI

## Installation

1. Install Node.js
2. Install Claude Desktop
3. Install Figma Desktop
4. Configure Claude Desktop MCP
5. Create a Figma Personal Access Token
6. Configure the Figma MCP server
7. Restart Claude Desktop

## Verification

Open a Figma file, select a frame, you will need to right-click the selected frame and select "Copy/Paste as"  -> "copy link to selection". This allows you to provide the required frame ID to Claude.

Ask Claude: "Can you read the currently selected Figma frame?"

If Claude can describe the frame, ProductForge is configured correctly.

## Sample Claude response

Got it — here's what's in the selected frame, **"iPhone 16 Pro Max - 2"** (an iPhone-sized screen, 440px wide):

**Structure:**
- **Background**: a decorative SVG shape (`bg simple`) in teal (`#4EBCC8`), positioned to bleed off the top of the frame
- **Logo**: an SVG logo, ~150×169px, placed near the top-center (x:145, y:82)
- **Four pill-shaped buttons**, each 400×80px with 40px border radius, stacked vertically at x:20, spaced ~100px apart:
  1. **"Terpenes"** — y:496
  2. **"Indica"** — y:596
  3. **"Sativa"** — y:696
  4. **"Hybrid"** — y:796

**Styling:**
- Buttons use a blue fill (`#2079B3`)
- Button text is light gray (`#E5E5E5`), Inter Light, 24px, centered
- Overall canvas background is light gray (`#E5E5E5`)


## Next Steps

Future versions of ProductForge will support:

- UX reviews
- Accessibility analysis
- Product risk assessment
- Acceptance criteria generation
- GitHub issue generation
- Product documentation generation