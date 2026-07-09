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

// Write the assessment
fs.writeFileSync(reviewPath, template);

// Engineering Tasks
fs.writeFileSync(
  path.join(reviewDir, "engineering-tasks.md"),
`# Engineering Tasks

## Tasks

- [ ] Review ProductForge assessment
- [ ] Create implementation plan
- [ ] Estimate engineering effort
- [ ] Identify technical dependencies
`
);

// Acceptance Criteria
fs.writeFileSync(
  path.join(reviewDir, "acceptance-criteria.md"),
`# Acceptance Criteria

## Functional Requirements

- [ ] Primary user flow is defined
- [ ] Error states are handled
- [ ] Accessibility requirements are met
- [ ] Responsive behavior is validated
`
);

// Metadata
const metadata = {
  reviewName,
  timestamp: now.toISOString(),
  generatedBy: "ProductForge",
  version: "0.3"
};

fs.writeFileSync(
  path.join(reviewDir, "metadata.json"),
  JSON.stringify(metadata, null, 2)
);

console.log(`Created review package in: ${reviewDir}`);