# ProductForge Review Example

## Overview

This example demonstrates ProductForge reviewing a Figma interface using Claude Desktop and the Figma MCP server.

The objective is to identify usability issues, product risks, accessibility concerns, and engineering considerations before development begins.

---

## Project

Example: Login Screen

---

## Review Date

July 2026

---

## Prompt

The review was generated using the ProductForge Review Framework.

See:

`prompts/product-review.md`

---

# Executive Summary

> This is a simple, single-purpose home screen for what appears to be a cannabis education or wellness app that organizes content into two content tracks — Strains (Indica / Hybrid / Sativa) and reference tools (Terpenes, Frequencies). The layout is clean and low-cognitive-load: one heading, five full-width navigation buttons, a decorative background, and a back/close chevron. Visually playful (rounded cards, drop shadows, a bold display font), but several structural gaps — no visible states for loading/empty/error, ambiguous back-button destination, and a heading ("How can we help?") that reads like a support/FAQ screen rather than a content menu — should be resolved before build.

---

# User Goals

> Quickly navigate to one of two content categories: strain types (Indica, Hybrid, Sativa) or reference modes (Terpenes, Frequencies).
Understand, at a glance, what this app is for (the heading suggests a help/guidance framing rather than a catalog framing).
Return/exit via the top-left chevron.

---

# UX Strengths

> Full-width, generously sized (75px tall) tap targets — easy to hit, especially one-handed on mobile.
Consistent visual language across all five buttons (same fill, radius, shadow, text style) — predictable and scannable.
Clear visual hierarchy: logo → heading → action list, top to bottom.
Decorative background is subtle and contained behind a semi-transparent panel, so it doesn't compete with text legibility for the primary content area.

---

# UX Issues

Priority Issue

Critical
No indication of what happens after tapping a button (no destination/transition spec), and no way to distinguish "categories" (Indica/Hybrid/Sativa) from "tools" (Terpenes/Frequencies) — they're styled identically despite being conceptually different types of navigation.

High
Heading text "How can we help?" doesn't match the content below it (a strain/tool picker, not a help/support flow) — likely to confuse users about the app's purpose.HighBack/chevron icon (top-left) has no visible label or confirmed destination — unclear if it exits the app, goes to a previous screen, or opens a menu.MediumFive identical-looking buttons in a flat list give no visual grouping cue (e.g., strain types vs. tools), increasing scan time.

Medium
Decorative "Groovy side pane" graphic extends 55.9px above the frame boundary and is very tall (1271px) relative to the frame — worth confirming it doesn't clip oddly or shift on different device heights.

Low
Button label widths vary a lot ("Terpenes" 111px vs. "Frequencies" 147px) but appear individually centered rather than aligned to a shared baseline/system — could look inconsistent if labels are ever localized (longer translations may wrap or overflow).

---

# Accessibility Review

Contrast:
Button labels are white text on a #2079B3 blue fill — this generally passes WCAG AA for large/bold text, but should be verified against the actual rendered blue once the drop-shadow and stroke are composited. The heading text is white with only a thin purple stroke (#83468C) over what's likely a busy background image — this is a contrast risk and should be checked against the real backdrop, not assumed safe.

Keyboard Navigation:
 No focus states are defined for any button. If this ships to a platform where keyboard/switch navigation matters (web, tablet with keyboard), focus indicators need to be specified.

Screen Reader Support:
 No accessible labels/roles are specified for the buttons, the logo, or the chevron icon. The chevron especially needs an explicit accessible name (e.g., "Back" or "Close") since icon-only controls are otherwise silent to screen readers.

Touch Targets:
All five buttons are 400×75px — well above the 44×44px minimum, good. The chevron icon is 48×48px, which meets minimum touch target size.

Visual Hierarchy: Font choice (Caprasimo, a heavy display face) works for a short heading but may reduce legibility if reused at smaller sizes elsewhere; worth confirming it's only used for short strings.
---

# Missing States

Missing States

Loading: No state shown for content loading before the menu renders (unlikely needed here since it's static, but confirm if button destinations require a network fetch first).

Empty: N/A — this is a static navigation menu, so likely not applicable.

Error: No error state if a destination screen fails to load after tapping a button.

Success: N/A for this screen.

Validation: N/A — no form inputs present.

Offline: No indication of what happens if the app is opened offline and one of these sections requires network content.

Permission: N/A unless "Frequencies" implies audio playback, in which case a microphone/audio permission prompt may be needed downstream (not on this screen, but worth flagging for the linked flow).


---

# Edge Cases

> *(Paste findings.)*
Longer translated strings (e.g., a longer word for "Frequencies" in another language) may overflow the fixed-width text box.
Very short vs. very tall device viewports: the decorative background graphic (1271px tall, starting at y=-55.9) needs to be tested against small and large screen heights to confirm it doesn't visibly cut off or reveal edges.
Rapid repeated taps on a button before a transition completes (no disabled/pressed state defined).
Users unfamiliar with terpene/strain terminology may not understand "Terpenes" or "Frequencies" as options — no subtitle or icon differentiates them from the strain-type buttons.

---

# Engineering Questions

> *(Paste findings.)*
What screen/route does each of the five buttons navigate to, and is that transition a push, modal, or tab switch?

Does the top-left chevron go back to a previous screen, or does it exit/close the app? Is there always a previous screen to return to?

Is the background "Groovy side pane" image a single static asset per screen, or does it need to be responsive/re-croppable across device sizes?

Are "Terpenes" and "Frequencies" meant to behave as a different navigation type than the three strain buttons (e.g., tools vs. categories), and if so, should they be visually distinguished in code even if visually similar in this mock?

Is "Frequencies" referring to audio/sound frequencies? If so, does tapping it trigger any media/audio permission requests downstream?

---

# Acceptance Criteria

> *(Paste findings.)*
All five buttons are tappable, full-width, and navigate to their respective destination screens.

Chevron icon has a defined destination and an accessible label.

Text and background contrast ratios meet WCAG AA at actual render (not just token values).

Layout adapts correctly across at least two device heights without clipping the decorative background asset.

All interactive elements have visible pressed/focus states.

---

# Product Risks

### Business Risks

> *(Paste findings.)*

Ambiguous heading copy ("How can we help?") may frame the app as a support tool rather than a content/reference product, potentially setting the wrong user expectation on first open.

### User Risks

> *(Paste findings.)*
User Risks
Users may not understand the distinction between browsing by strain type vs. using a reference tool (Terpenes/Frequencies), leading to trial-and-error navigation rather than confident, direct wayfinding.

### Technical Risks

> *(Paste findings.)*
Technical Risks
No defined behavior for network failure, slow load, or missing content on the destination screens tied to these five buttons; if any of them fetch remote data, the absence of loading/error states here will surface as unhandled edge cases later.

---

# Recommended Next Actions

Clarify and likely revise the heading copy to match a content-menu framing rather than a help/support framing.

Define navigation destinations and transition types for all five buttons and the chevron icon.

Add visual differentiation between "strain type" buttons and "tool" buttons (icon, grouping, or subheading) if they are conceptually distinct.

Specify accessible labels/roles for the chevron and all buttons, and verify contrast against the actual composited background.

Confirm responsive behavior of the decorative background asset across device sizes.

---

# Overall Assessment
That image download path isn't accessible in this environment, so I'll base the review on the structural data (layout, colors, text, components) rather than a rendered screenshot. Here's the full ProductForge review.

---

# ProductForge Review — "Home" Screen (Terpenes, Strains & Frequencies)

**Note:** This frame is a **home/navigation menu**, not a login screen — I've adjusted the framework accordingly. File: *Terpenes, Strains, & Frequencies*, node `61:350`.

---

## Executive Summary

This is a simple, single-purpose home screen for what appears to be a cannabis education or wellness app that organizes content into two content tracks — **Strains** (Indica / Hybrid / Sativa) and reference tools (**Terpenes**, **Frequencies**). The layout is clean and low-cognitive-load: one heading, five full-width navigation buttons, a decorative background, and a back/close chevron. Visually playful (rounded cards, drop shadows, a bold display font), but several structural gaps — no visible states for loading/empty/error, ambiguous back-button destination, and a heading ("How can we help?") that reads like a support/FAQ screen rather than a content menu — should be resolved before build.

## User Goals

- Quickly navigate to one of two content categories: strain types (Indica, Hybrid, Sativa) or reference modes (Terpenes, Frequencies).
- Understand, at a glance, what this app is for (the heading suggests a help/guidance framing rather than a catalog framing).
- Return/exit via the top-left chevron.

## UX Strengths

- Full-width, generously sized (75px tall) tap targets — easy to hit, especially one-handed on mobile.
- Consistent visual language across all five buttons (same fill, radius, shadow, text style) — predictable and scannable.
- Clear visual hierarchy: logo → heading → action list, top to bottom.
- Decorative background is subtle and contained behind a semi-transparent panel, so it doesn't compete with text legibility for the primary content area.

## UX Issues

| Priority | Issue |
|----------|-------|
| Critical | No indication of what happens after tapping a button (no destination/transition spec), and no way to distinguish "categories" (Indica/Hybrid/Sativa) from "tools" (Terpenes/Frequencies) — they're styled identically despite being conceptually different types of navigation. |
| High | Heading text "How can we help?" doesn't match the content below it (a strain/tool picker, not a help/support flow) — likely to confuse users about the app's purpose. |
| High | Back/chevron icon (top-left) has no visible label or confirmed destination — unclear if it exits the app, goes to a previous screen, or opens a menu. |
| Medium | Five identical-looking buttons in a flat list give no visual grouping cue (e.g., strain types vs. tools), increasing scan time. |
| Medium | Decorative "Groovy side pane" graphic extends 55.9px above the frame boundary and is very tall (1271px) relative to the frame — worth confirming it doesn't clip oddly or shift on different device heights. |
| Low | Button label widths vary a lot ("Terpenes" 111px vs. "Frequencies" 147px) but appear individually centered rather than aligned to a shared baseline/system — could look inconsistent if labels are ever localized (longer translations may wrap or overflow). |

---

## Accessibility Review

- **Contrast:** Button labels are white text on a `#2079B3` blue fill — this generally passes WCAG AA for large/bold text, but should be verified against the *actual* rendered blue once the drop-shadow and stroke are composited. The heading text is white with only a thin purple stroke (`#83468C`) over what's likely a busy background image — this is a contrast risk and should be checked against the real backdrop, not assumed safe.
- **Keyboard Navigation:** No focus states are defined for any button. If this ships to a platform where keyboard/switch navigation matters (web, tablet with keyboard), focus indicators need to be specified.
- **Screen Reader Support:** No accessible labels/roles are specified for the buttons, the logo, or the chevron icon. The chevron especially needs an explicit accessible name (e.g., "Back" or "Close") since icon-only controls are otherwise silent to screen readers.
- **Touch Targets:** All five buttons are 400×75px — well above the 44×44px minimum, good. The chevron icon is 48×48px, which meets minimum touch target size.
- **Visual Hierarchy:** Font choice (Caprasimo, a heavy display face) works for a short heading but may reduce legibility if reused at smaller sizes elsewhere; worth confirming it's only used for short strings.

---

## Missing States

- **Loading:** No state shown for content loading before the menu renders (unlikely needed here since it's static, but confirm if button destinations require a network fetch first).
- **Empty:** N/A — this is a static navigation menu, so likely not applicable.
- **Error:** No error state if a destination screen fails to load after tapping a button.
- **Success:** N/A for this screen.
- **Validation:** N/A — no form inputs present.
- **Offline:** No indication of what happens if the app is opened offline and one of these sections requires network content.
- **Permission:** N/A unless "Frequencies" implies audio playback, in which case a microphone/audio permission prompt may be needed downstream (not on this screen, but worth flagging for the linked flow).

---

## Edge Cases

- Longer translated strings (e.g., a longer word for "Frequencies" in another language) may overflow the fixed-width text box.
- Very short vs. very tall device viewports: the decorative background graphic (1271px tall, starting at y=-55.9) needs to be tested against small and large screen heights to confirm it doesn't visibly cut off or reveal edges.
- Rapid repeated taps on a button before a transition completes (no disabled/pressed state defined).
- Users unfamiliar with terpene/strain terminology may not understand "Terpenes" or "Frequencies" as options — no subtitle or icon differentiates them from the strain-type buttons.

---

## Engineering Questions

- What screen/route does each of the five buttons navigate to, and is that transition a push, modal, or tab switch?
- Does the top-left chevron go back to a previous screen, or does it exit/close the app? Is there always a previous screen to return to?
- Is the background "Groovy side pane" image a single static asset per screen, or does it need to be responsive/re-croppable across device sizes?
- Are "Terpenes" and "Frequencies" meant to behave as a different navigation *type* than the three strain buttons (e.g., tools vs. categories), and if so, should they be visually distinguished in code even if visually similar in this mock?
- Is "Frequencies" referring to audio/sound frequencies? If so, does tapping it trigger any media/audio permission requests downstream?

---

## Acceptance Criteria

- All five buttons are tappable, full-width, and navigate to their respective destination screens.
- Chevron icon has a defined destination and an accessible label.
- Text and background contrast ratios meet WCAG AA at actual render (not just token values).
- Layout adapts correctly across at least two device heights without clipping the decorative background asset.
- All interactive elements have visible pressed/focus states.

---

## Product Risks

### Business Risks
Ambiguous heading copy ("How can we help?") may frame the app as a support tool rather than a content/reference product, potentially setting the wrong user expectation on first open.

### User Risks
Users may not understand the distinction between browsing by strain type vs. using a reference tool (Terpenes/Frequencies), leading to trial-and-error navigation rather than confident, direct wayfinding.

### Technical Risks
No defined behavior for network failure, slow load, or missing content on the destination screens tied to these five buttons; if any of them fetch remote data, the absence of loading/error states here will surface as unhandled edge cases later.

---

## Recommended Next Actions

1. Clarify and likely revise the heading copy to match a content-menu framing rather than a help/support framing.
2. Define navigation destinations and transition types for all five buttons and the chevron icon.
3. Add visual differentiation between "strain type" buttons and "tool" buttons (icon, grouping, or subheading) if they are conceptually distinct.
4. Specify accessible labels/roles for the chevron and all buttons, and verify contrast against the actual composited background.
5. Confirm responsive behavior of the decorative background asset across device sizes.

---

## Overall Assessment

## Product Readiness: ⭐⭐⭐☆☆

## Ship Recommendation:
Ready for UX Revision

The visual design is polished and consistent, but navigation intent, copy framing, and several accessibility/state gaps need resolution before this is ready for engineering handoff.
## Product Readiness

⭐ ⭐ ⭐ ⭐ ☆

### Ship Recommendation

- Ready to Build
- Ready for UX Revision
- Needs Significant Revision

*(Choose one after the review.)*

---

## ProductForge Notes

This review was automatically generated using:

- Claude Desktop
- Model Context Protocol (MCP)
- Figma Developer MCP
- ProductForge Review Framework

The intent of ProductForge is to help product teams identify design, usability, accessibility, and implementation risks early in the product development lifecycle.