# CSS Structure Documentation

## Overview
This project now uses a modular CSS architecture with separate files for different pages and shared styles.

## File Structure

### Common Styles (`common.css`)
Contains all shared styles used across multiple pages:
- Reset and base styles
- Navigation bar
- Typography (section titles, page titles, etc.)
- Button styles
- Footer
- CSS variables for consistent theming
- Responsive design breakpoints

### Page-Specific Styles

#### `home.css`
- Hero section with animated name cycling
- Skills table with tech icons
- About section layout
- Font animations and effects

#### `projects.css`
- Project cards grid layout
- Early days section styling
- Project hover effects
- Tech tag styling

#### `apis.css`
- API cards layout
- Code block styling
- API demo sections
- API link buttons

#### `contact.css`
- Contact table styling
- Action button effects
- Table responsive design

#### `game.css`
- Game page hero section
- Controls grid layout
- Download card styling
- Game info sections

#### `error.css`
- 404 page styling
- Error animations
- Error button effects

## Usage

Each HTML page includes:
1. `common.css` - Always included first
2. Page-specific CSS file - Included second

Example:
```html
<link rel="stylesheet" href="common.css">
<link rel="stylesheet" href="home.css">
```

## Benefits

1. **Modularity**: Each page only loads the CSS it needs
2. **Maintainability**: Easier to find and modify page-specific styles
3. **Performance**: Smaller CSS files load faster
4. **Organization**: Clear separation of concerns
5. **Reusability**: Common styles are shared across all pages

## CSS Variables

The project uses CSS custom properties for consistent theming:
- `--primary-gradient`: Main gradient for buttons and highlights
- `--secondary-gradient`: Secondary gradient for backgrounds
- `--card-bg`: Background color for cards
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--accent-color`: Accent color for links and buttons

## Responsive Design

All CSS files include responsive breakpoints:
- Mobile: `@media (max-width: 480px)`
- Tablet: `@media (max-width: 768px)`
- Desktop: Default styles 