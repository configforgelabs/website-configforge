# Docusaurus Design Customization Analysis & Preservation Prompt

## Purpose
This prompt guides AI assistants to analyze a Docusaurus installation for design-related customizations and generate preservation instructions to maintain the design integrity when making future changes.

---

## Analysis Checklist

### 1. **Core Configuration Files**

#### A. `docusaurus.config.ts` / `docusaurus.config.js`
- [ ] Check `themeConfig` section for:
  - Custom color mode settings (`colorMode.defaultMode`, `colorMode.disableSwitch`)
  - Custom navbar configuration (logo, items, style)
  - Custom footer configuration (logo, links, copyright, style)
  - Algolia search customization (if present)
  - Zoom/image viewer settings
  - Announcement bar styling
  - Custom metadata (title, tagline, favicon)
- [ ] Check `customCss` path in presets
- [ ] Check `customFields` for design-related values
- [ ] Note any custom theme or plugin configurations

**AI Instruction Template:**
```
PRESERVE: The docusaurus.config file contains the following design customizations:
- [List specific customizations found]
- DO NOT modify theme colors, navbar structure, footer layout without explicit user request
- MAINTAIN the custom CSS import paths
- PRESERVE colorMode settings and user preference handling
```

---

### 2. **CSS Customizations**

#### A. Primary Custom CSS File (`src/css/custom.css`)
- [ ] **CSS Variable Overrides**
  - Document all `:root` CSS custom properties (e.g., `--ifm-color-primary`)
  - Note any dark mode overrides (`[data-theme='dark']`)
  - Check for custom font families, sizes, weights
  - Look for spacing/layout variable overrides
  - Check border radius, shadow, and animation customizations

- [ ] **Design System Integration**
  - Check for imported design system CSS files
  - Note OKLCH color space usage
  - Document color token mappings
  - Check for shadcn/ui or other component library integrations

- [ ] **Component-Specific Styles**
  - Navbar customizations
  - Sidebar customizations
  - Footer customizations
  - Blog post card/item styling
  - Documentation page layout
  - Table of contents styling
  - Code block customizations
  - Admonition/callout styling

- [ ] **Responsive Design**
  - Media query breakpoints
  - Mobile-specific overrides
  - Tablet-specific overrides

- [ ] **Typography**
  - Custom font imports (@font-face, Google Fonts, etc.)
  - Heading styles (h1-h6)
  - Paragraph and body text styling
  - Link styling and hover effects
  - Code font customizations

- [ ] **Layout & Spacing**
  - Container widths
  - Padding and margin overrides
  - Grid or flexbox custom layouts

**AI Instruction Template:**
```
PRESERVE: The custom.css file contains these critical design elements:

COLOR SYSTEM:
- Primary color: [value]
- Color palette: [list all custom colors]
- Dark mode variants: [list if present]
- DO NOT change CSS custom properties without user request

TYPOGRAPHY:
- Font family: [value]
- Custom font sizes: [list]
- MAINTAIN all font imports and declarations

COMPONENT STYLING:
- [List each customized component and key styles]
- DO NOT modify component-specific classes without checking custom.css

RESPONSIVE BEHAVIOR:
- Breakpoints: [list]
- Mobile adaptations: [describe]
- PRESERVE responsive design patterns
```

---

#### B. Additional CSS Files
Check for:
- [ ] `design-system.css` (if present)
- [ ] Module-specific CSS (`.module.css` files)
- [ ] Component-scoped styles
- [ ] Tailwind CSS configuration

---

### 3. **Tailwind CSS Integration** (if present)

#### A. `tailwind.config.ts` / `tailwind.config.js`
- [ ] Check `darkMode` configuration
- [ ] Review `content` paths
- [ ] Document all custom colors in `theme.extend.colors`
- [ ] Check custom spacing, typography, borderRadius
- [ ] Note any custom plugins
- [ ] Review safelist configurations

**AI Instruction Template:**
```
PRESERVE: Tailwind configuration includes:

COLOR TOKENS:
- [List all custom color definitions]
- OKLCH color space usage: [Yes/No]
- Design system mapping: [describe]
- DO NOT change color tokens without explicit request

THEME EXTENSIONS:
- [List spacing, typography, etc. customizations]
- MAINTAIN all custom theme extensions

DARK MODE:
- Strategy: [class/media/custom]
- Selector: [value]
- DO NOT change dark mode implementation
```

---

### 4. **Theme Component Swizzling**

Check `src/theme/` directory for:
- [ ] List all swizzled components
- [ ] For each swizzled component, document:
  - Original component being overridden
  - Purpose of customization
  - Design-related changes (styling, layout, structure)
  - Any inline styles or className modifications

**Components to Check:**
- `Navbar/` - Navigation bar customizations
- `Footer/` - Footer customizations
- `DocSidebar/` - Documentation sidebar
- `BlogListPage/` - Blog listing layout
- `BlogPostItem/` - Individual blog post cards
- `DocItem/` - Documentation page layout
- `TOC/` - Table of contents styling
- `Layout/` - Page layout wrapper
- `Root.tsx` - Global theme wrapper

**AI Instruction Template:**
```
PRESERVE: Swizzled theme components contain custom design logic:

Component: [Name]
- Customization purpose: [describe]
- Design changes: [list styling modifications]
- DO NOT replace with default Docusaurus components
- MAINTAIN custom className and style props
- PRESERVE layout structure changes

[Repeat for each swizzled component]
```

---

### 5. **Design System Files**

Check for:
- [ ] `design-system.css` or similar design token files
- [ ] `design-tokens.json` files
- [ ] Shared component libraries
- [ ] Brand assets (logos, icons, images)

**AI Instruction Template:**
```
PRESERVE: Design system integration:
- Design system location: [path]
- Token format: [CSS variables/JSON/other]
- Brand assets location: [path]
- DO NOT modify design token files
- MAINTAIN design system import order
- PRESERVE token naming conventions
```

---

### 6. **Static Assets**

Check `static/` directory for:
- [ ] Custom logos (light/dark variants)
- [ ] Favicon files
- [ ] Brand images and graphics
- [ ] Custom icons
- [ ] Background images or patterns
- [ ] Any design-related SVGs or images

**AI Instruction Template:**
```
PRESERVE: Static design assets:
- Logo files: [list paths]
- Favicon: [path]
- Brand graphics: [list]
- DO NOT remove or replace brand assets without explicit request
- MAINTAIN asset paths in configuration
```

---

### 7. **Custom Pages & Components**

Check `src/pages/` and `src/components/`:
- [ ] Custom landing page styling
- [ ] Reusable component designs
- [ ] Layout components with design logic
- [ ] Any module CSS files

**AI Instruction Template:**
```
PRESERVE: Custom page and component designs:
- Landing page: [describe design approach]
- Reusable components: [list with design notes]
- DO NOT modify component styling without checking dependencies
- MAINTAIN consistent design patterns across components
```

---

### 8. **PostCSS & Build Configuration**

Check:
- [ ] `postcss.config.js` for custom plugins
- [ ] CSS processing configuration
- [ ] Autoprefixer settings
- [ ] Any CSS optimization or transformation rules

---

### 9. **Font Loading & Typography**

Check for:
- [ ] Google Fonts or Adobe Fonts integration
- [ ] Self-hosted font files in `static/fonts/`
- [ ] Font preloading in HTML head
- [ ] Font display strategies

**AI Instruction Template:**
```
PRESERVE: Typography system:
- Font sources: [list]
- Font loading strategy: [describe]
- Fallback fonts: [list]
- DO NOT change font stack without considering load performance
- MAINTAIN font preloading for critical fonts
```

---

### 10. **Responsive Design Patterns**

Document:
- [ ] Mobile navigation behavior
- [ ] Sidebar collapse/expand behavior
- [ ] Image scaling and srcset usage
- [ ] Touch-friendly UI elements
- [ ] Mobile-specific layouts

---

## Generating Preservation Instructions

### Output Format

After analyzing all the above elements, generate a comprehensive document with this structure:

```markdown
# Design Preservation Instructions for [Project Name]

## Executive Summary
[Brief overview of the design system and customization approach]

## Critical Design Elements - DO NOT MODIFY

### 1. Color System
- Primary colors: [list]
- Secondary colors: [list]
- Semantic colors: [list]
- Dark mode colors: [list]
- **Rule**: Never change color values without explicit design approval

### 2. Typography
- Font families: [list]
- Font loading: [describe]
- Heading scales: [list]
- **Rule**: Maintain font stack and loading strategy

### 3. Component Styling
[For each major component:]
- **Component**: [name]
- **Customizations**: [describe]
- **Preservation rule**: [specific instruction]

### 4. Layout System
- Container widths: [values]
- Spacing scale: [values]
- Breakpoints: [values]
- **Rule**: Maintain responsive behavior patterns

### 5. Brand Assets
- Logos: [paths]
- Colors: [hex/oklch values]
- **Rule**: Never modify brand assets without approval

## Design System Integration
[Describe how external design systems are integrated]
- Design token source: [path/package]
- Integration method: [CSS import/postcss/etc]
- **Rule**: Maintain design token import order

## Safe Modification Guidelines

### What CAN be changed:
- Content within markdown files
- Documentation structure
- Plugin configurations (non-design related)
- Data fetching logic
- SEO metadata

### What REQUIRES careful review:
- Adding new pages (must match existing design)
- Adding new components (must use design system)
- Changing navigation structure (must maintain styling)
- Adding new dependencies (check for style conflicts)

### What MUST NOT be changed without explicit approval:
- CSS custom property values
- Tailwind color configuration
- Swizzled component styling
- Font declarations
- Brand assets
- Design system imports
- Layout breakpoints

## Testing Requirements

When making any changes that might affect design:
1. Test in light and dark modes
2. Test on mobile, tablet, and desktop
3. Verify color contrast ratios
4. Check font rendering
5. Validate responsive behavior
6. Review with design team if substantial

## File Change Alert System

**High Alert** - These files directly control design:
- `src/css/custom.css`
- `src/css/design-system.css`
- `tailwind.config.ts`
- `docusaurus.config.ts` (themeConfig section)
- Any swizzled component in `src/theme/`

**Medium Alert** - These may affect design:
- New components in `src/components/`
- New pages in `src/pages/`
- PostCSS configuration
- Package.json (new UI dependencies)

**Low Alert** - Unlikely to affect design:
- Markdown content files
- Data files
- Configuration for non-design plugins
- Backend/build logic

## Quick Reference Commands

```bash
# Check for custom CSS
find src -name "*.css" -o -name "*.module.css"

# List swizzled components
ls -la src/theme/

# Review color system
grep -r "color" tailwind.config.ts src/css/custom.css

# Check font declarations
grep -r "@font-face\|font-family" src/

# Verify design system imports
grep -r "@import" src/css/
```

## Version Control Best Practices

- Never commit design changes without review
- Tag design-related commits with `[design]` prefix
- Create separate PRs for design vs. functional changes
- Include before/after screenshots for visual changes

## Contact & Approval

Design changes require approval from:
- Design lead: [contact]
- Frontend lead: [contact]
- Brand manager: [contact]
```

---

## Example Usage

**Prompt for AI Assistant:**

```
You are working on a Docusaurus documentation site. Before making ANY changes, 
review the DESIGN_PRESERVATION_PROMPT.md file and follow these rules:

1. NEVER modify color values, fonts, or spacing without explicit user request
2. ALWAYS check if a file is in the "High Alert" list before editing
3. MAINTAIN existing design patterns when adding new content
4. USE existing design system tokens rather than creating new styles
5. TEST in both light and dark modes after any changes
6. PRESERVE all swizzled component customizations
7. DO NOT replace custom styled components with default Docusaurus components

If a user request would violate design preservation rules, inform them of the 
conflict and suggest alternatives that maintain design consistency.

When in doubt, ask before modifying any styling, layout, or design-related code.
```

---

## Automation Script

Create a pre-commit hook to alert on design file changes:

```bash
#!/bin/bash
# .git/hooks/pre-commit

DESIGN_FILES=(
  "src/css/custom.css"
  "src/css/design-system.css"
  "tailwind.config.ts"
  "docusaurus.config.ts"
  "src/theme/"
)

CHANGED_FILES=$(git diff --cached --name-only)

for FILE in "${DESIGN_FILES[@]}"; do
  if echo "$CHANGED_FILES" | grep -q "$FILE"; then
    echo "⚠️  WARNING: Design-related file changed: $FILE"
    echo "Have you reviewed the design preservation guidelines?"
    read -p "Continue? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      exit 1
    fi
  fi
done
```

---

## Maintenance

This document should be updated when:
- New design customizations are added
- Design system is upgraded
- New swizzled components are created
- Brand guidelines change
- New design tokens are introduced

**Last Updated**: [Date]
**Design System Version**: [Version]
**Docusaurus Version**: [Version]
