# ENVIONIX LABS Animation Specification

## Overview
This document outlines the animation implementation for the ENVIONIX LABS landing page, designed to enhance user engagement while maintaining scientific credibility and accessibility.

## Animation Philosophy
- **Purposeful**: Every animation serves to guide attention or enhance understanding
- **Subtle**: Animations support content without overshadowing scientific credibility
- **Accessible**: Full support for `prefers-reduced-motion` with automatic fallback
- **Performant**: CSS-based animations optimized for low-bandwidth environments

## Animation System

### Core Animations (CSS)
Defined in `src/index.css`:

1. **fadeIn** (0.6s ease-out)
   - Simple opacity transition
   - Used for text and initial content reveal

2. **slideUp** (0.8s ease-out)
   - Vertical translation with fade
   - Used for section headlines and cards

3. **slideInLeft/Right** (0.8s ease-out)
   - Horizontal translations with fade
   - Used for alternating content blocks

4. **scaleIn** (0.6s ease-out)
   - Scale transformation with fade
   - Used for important elements and CTAs

5. **float** (3s ease-in-out infinite)
   - Gentle vertical oscillation
   - Used for ambient background elements

6. **gradient** (8s ease infinite)
   - Animated gradient position
   - Used for dynamic backgrounds

### Accessibility
All animations respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component Animation Details

### Hero Section
- **Trigger**: On mount
- **Elements**:
  - Badge: fadeIn (0s delay)
  - Headline: slideUp (200ms delay)
  - Subheadline: slideUp (400ms delay)
  - CTA buttons: slideUp (600ms delay)
  - Feature badges: fadeIn (800ms delay)
- **Ambient**: 3 floating gradient orbs with staggered delays
- **Interaction**: Button hover scales (1.05x) with shadow enhancement

### Problem Section
- **Trigger**: Intersection Observer (10% threshold)
- **Elements**:
  - Section title: slideUp (0ms delay)
  - Description: slideUp (200ms delay)
  - Problem cards: slideUp (200ms, 400ms, 600ms delays)
- **Interaction**: Card hover enhances shadow

### Solution Section
- **Trigger**: Intersection Observer
- **Elements**:
  - Title: slideUp (0ms delay)
  - Description: slideUp (200ms delay)
  - Device mockup: slideInLeft (300ms delay) with scale hover
  - Process steps: Sequential reveals (500ms delay)
  - Stats grid: slideUp (700ms delay)
- **Special**: Device display shows pulsing indicators and live data simulation

### Features Section
- **Trigger**: Intersection Observer
- **Elements**:
  - Title: slideUp (0ms delay)
  - Description: slideUp (200ms delay)
  - Feature cards: Staggered slideUp (100ms intervals per card)
- **Interaction**:
  - Icon scales (1.1x) and rotates (3deg) on card hover
  - Card border color transitions to emerald on hover

### Use Cases Section
- **Trigger**: Intersection Observer
- **Elements**:
  - Title: slideUp (0ms delay)
  - Description: slideUp (200ms delay)
  - Use case cards: Staggered slideUp (150ms intervals)
- **Interaction**:
  - Card scales (1.02x) on hover
  - Icon scales (1.1x) and rotates (6deg) on hover

### Impact Section
- **Trigger**: Intersection Observer
- **Elements**:
  - Title: slideUp (0ms delay)
  - Description: slideUp (200ms delay)
  - Stat counters: Animated from 0 to target (2s duration, staggered 100ms)
  - Bottom panel: slideUp (800ms delay)
- **Special**: Custom JavaScript counter animation with formatted numbers

### CTA Section
- **Trigger**: Intersection Observer
- **Elements**:
  - Headline: slideUp (0ms delay)
  - Description: slideUp (200ms delay)
  - Benefits list: slideUp (400ms delay)
  - Buttons: slideUp (600ms delay)
  - Stats card: scaleIn (800ms delay)
- **Interaction**: Button scales on hover with icon translation

### Sticky Bar
- **Trigger**: Scroll position > 800px
- **Animation**: Slide up from bottom (0.5s duration)
- **Interaction**: CTA button scales on hover

### Demo Modal
- **Trigger**: User action (button click)
- **Elements**:
  - Backdrop: fadeIn with backdrop-blur
  - Modal: scaleIn
  - Success state: Custom checkmark animation
- **Interaction**: Form inputs have focus ring animations

## Performance Considerations

### Optimizations
1. **CSS-only animations** where possible (GPU accelerated)
2. **Intersection Observer** for scroll-triggered animations (prevents unnecessary calculations)
3. **Lazy animation triggers** - elements only animate when in viewport
4. **Reduced animation count** on mobile devices
5. **Vector graphics** for all icons (Lucide React)

### Loading Strategy
- Critical CSS inlined in index.css
- Component code-splitting via React lazy loading (future enhancement)
- Gradient backgrounds use CSS (no images)
- All animations use transform/opacity (compositor-friendly properties)

## Browser Compatibility
- Modern browsers with Intersection Observer support
- Fallback: Elements visible without animation in older browsers
- Tested on: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Future Enhancements
1. **Lottie animations** for product showcase (if needed)
2. **Parallax scrolling** for hero section (optional)
3. **3D device model** with Three.js (advanced feature)
4. **Interactive contamination simulator** (educational tool)

## Testing Checklist
- [ ] Animations respect reduced-motion preference
- [ ] No layout shift during animations
- [ ] Smooth 60fps performance on mid-range devices
- [ ] Animations don't block user interaction
- [ ] Modal animations don't interfere with scroll
- [ ] Mobile animations are smooth on slower devices
