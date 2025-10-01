# Shared Element Transition (Hero Morph) Guide

## Overview

This blog now features a beautiful **Shared Element Transition** (also known as Hero Morph) that creates a seamless animation when clicking on a blog card. The card appears to morph and expand into the full post page.

## How It Works

### 1. **Layout IDs**
Each blog card element has a unique `layoutId` prop that matches corresponding elements on the detail page:

- `blog-card-${slug}` - The entire card container
- `blog-title-${slug}` - The post title
- `blog-excerpt-${slug}` - The post excerpt
- `blog-meta-${slug}` - The date and read time metadata

When navigating from the posts list to a detail page, Framer Motion automatically animates elements with matching `layoutId`s, creating a smooth morphing effect.

### 2. **Animation Flow**

1. **User clicks a blog card**
2. The card remains visually "fixed" on screen
3. The card smoothly expands to fill the viewport
4. Title, excerpt, and metadata maintain their positions or smoothly transition
5. New content (full article) fades in
6. Page content animates into view

### 3. **Key Components**

#### `BlogPostCardAnimated` (`components/blog-post-card-animated.tsx`)
- Wraps card content with `motion.div` and `layoutId` props
- Handles click events and navigation
- Provides hover effects and animations

#### `BlogPostClient` (`app/posts/[slug]/page-client.tsx`)
- Client component that renders the blog post detail
- Uses matching `layoutId` props for shared elements
- Animates content fade-in and stagger effects

#### `PageTransitionWrapper` (`components/page-transition-wrapper.tsx`)
- Wraps the entire app with `LayoutGroup` and `AnimatePresence`
- Detects navigation between post routes to disable slide transitions
- Enables smooth shared element transitions

### 4. **Animation Details**

**Spring Physics:**
```typescript
transition={{
  type: "spring",
  stiffness: 300,
  damping: 30,
}}
```

**Card Hover Effect:**
- Scale: 1.02x on hover
- Enhanced background and shadow
- Sibling cards blur and fade

**Navigation Animation:**
- Title, excerpt, and metadata morph to new positions
- Content fades in with staggered delays
- Smooth spring-based motion

## Customization

### Adjust Animation Speed

In `blog-post-card-animated.tsx`, modify the transition:
```typescript
transition={{
  type: "spring",
  stiffness: 400,  // Higher = faster
  damping: 25,     // Lower = more bounce
}}
```

### Change Stagger Delays

In `page-client.tsx`, adjust the `delay` values:
```typescript
transition={{ delay: 0.1, duration: 0.4 }}  // Make faster/slower
```

### Disable for Specific Routes

In `PageTransitionWrapper`, modify the direction logic:
```typescript
if (prev.startsWith("/posts") && current.startsWith("/posts")) {
  return 0  // No slide animation, enable shared element
}
```

## Browser Support

Shared element transitions work in all modern browsers that support Framer Motion:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance

The animations are GPU-accelerated and performant:
- Uses CSS transforms and opacity (composite layers)
- Spring physics calculations are optimized
- No layout thrashing or reflows

## Troubleshooting

**Animation doesn't trigger:**
- Ensure `layoutId` values match exactly between pages
- Check that `LayoutGroup` wraps both components
- Verify `AnimatePresence` is configured with `mode="wait"`

**Animation is janky:**
- Reduce `stiffness` value
- Increase `damping` value
- Check for CSS conflicts (especially transforms)

**Elements jump:**
- Ensure parent containers have proper positioning
- Check for conflicting CSS transitions
- Verify z-index stacking contexts

## Future Enhancements

Possible improvements:
1. Add background color morphing
2. Implement image/thumbnail transitions
3. Add gesture-based navigation (swipe back)
4. Create category-based color themes
5. Add sound effects (optional)

---

Built with ❤️ using Framer Motion

