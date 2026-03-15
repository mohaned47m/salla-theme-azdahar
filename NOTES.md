# Key Findings from Salla Documentation

## Home Page Structure
- `index.twig` is the home page file at `src/views/pages/index.twig`
- It MUST extend `layouts.master` (NOT `layouts/main.twig`)
- Uses `{% component home %}` to render all Theme Features and Theme Components
- Components are in `src/views/components/home/` folder

## Component System
- **Theme Features**: Pre-defined components listed in `twilight.json` under `features` with prefix `component-`
- **Theme Components**: Custom components listed in `twilight.json` under `components`
- Both are rendered by `{% component home %}`
- Visibility managed from Partners Portal

## Current Issues Found
1. `home.twig` extends `layouts/main.twig` which is NOT the Salla standard layout - this file is NOT used
2. `index.twig` correctly extends `layouts.master` and uses `{% component home %}`
3. All 9 az- components are registered in twilight.json with "ازدهار" in names
4. All 9 az- component .twig files exist
5. Components use `component.*` variables correctly
6. Each component has `s-block` class and section label

## What Might Be Wrong
- The `home.twig` file might be confusing the system
- Need to verify component variable access patterns match Salla's expected format
- Need to check if product-related components use correct Salla data access
