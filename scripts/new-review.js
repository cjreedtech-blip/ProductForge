import fs from "fs";
import path from "path";

const now = new Date();

const timestamp = now
  .toISOString()
  .replace(/[:.]/g, "-")
  .replace("T", "_")
  .slice(0, 19);

const reviewName = process.argv[2] || "untitled-review";
const safeName = reviewName
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const folderName = `${timestamp}-${safeName}`;
const reviewDir = path.join("reviews", folderName);

fs.mkdirSync(reviewDir, { recursive: true });

const reviewPath = path.join(reviewDir, "assessment.md");

const template = `# ProductForge Design Readiness Assessment

## Review Name

${reviewName}

## Date

${now.toLocaleString()}

## Source

Figma selected frame

---

# Executive Summary

Paste Claude/ProductForge output here.

---

# UX Assessment

---

# Accessibility Assessment

---

# Engineering Questions

---

# Acceptance Criteria

---

# Product Risks

---

# Recommended Next Actions

---

# Decision

- 🟢 Ready for Engineering
- 🟡 Needs UX Revision
- 🟠 Needs Product Clarification
- 🔴 Do Not Build Yet
`;

fs.writeFileSync(reviewPath, template);

console.log(`Created review folder: ${reviewDir}`);
console.log(`Created assessment file: ${reviewPath}`);