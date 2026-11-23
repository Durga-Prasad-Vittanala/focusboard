# AI Usage Disclosure

## Tools Used

- **Antigravity** (Google DeepMind AI assistant — built into the development environment)

---

## Representative Prompts

1. *"Read my entire code, don't change anything inside the files. I need to create component folders for every JSX file and place the component-related JSX file and related CSS from the global CSS file — without changing the code."*

2. *"Ok go with updating the import paths."* — confirming the approach of updating import strings when moving files into subfolders.

3. *"Run the application."* — asking the AI to start the Vite dev server.

4. *"Step 18: Prepare the README.md documentation… Step 19: Prepare AI_USAGE.md"* — requesting structured documentation generation.

---

## AI-Assisted Areas

| Area | What the AI did |
|---|---|
| **Component folder restructuring** | Analysed all JSX files, planned and executed moving each flat component into its own named subfolder (`components/Sidebar/Sidebar.jsx`, etc.) |
| **CSS extraction** | Read the entire `index.css` (1297 lines) and split each component's CSS rules into a matching `.css` file, leaving only global reset and layout rules in `index.css` |
| **Import path updates** | Updated cross-component import strings in `App.jsx`, `Overview.jsx`, and `TaskList.jsx` to reflect the new subfolder structure |
| **Dev server startup** | Ran `npm run dev` and reported the localhost URL |
| **README.md authoring** | Generated the full README based on the actual codebase — components, hooks, state logic, and CSS organisation |

---

## Verified or Corrected Suggestion

**Suggestion reviewed:** The AI initially proposed keeping `index.css` as-is and only creating new CSS files alongside new subfolders, without moving JSX files or touching import paths. This would have resulted in duplicate style definitions and no actual per-component CSS isolation.

**What was done instead:** After reviewing the trade-offs, the approach was corrected to:
1. Move each JSX file into its own named subfolder.
2. Extract the component's CSS rules from `index.css` into a dedicated `.css` file inside the same subfolder.
3. Add `import "./ComponentName.css"` to the top of each JSX file.
4. Update all import paths accordingly.
5. Reduce `index.css` to global styles only.

This produces genuine component-level CSS encapsulation rather than just copying files.

---

## Candidate Understanding Statement

All AI-generated output was reviewed before acceptance. The candidate understands:

- How `useLocalStorage` wraps `useState` and writes to `window.localStorage` on every update.
- How `filteredTasks` is derived by chaining `.filter()` on the `tasks` array in `App.jsx` without storing a separate filtered-list state.
- How CRUD handlers (`handleSaveTask`, `handleDeleteTask`, `handleStatusChange`) use immutable update patterns (`map`, `filter`, spread) to produce new arrays.
- How the `FocusNotes` carousel maintains its own local `activeSlide` state independently of the global task state.
- Why component-scoped CSS files improve maintainability compared to a single global stylesheet.

