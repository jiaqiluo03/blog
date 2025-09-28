export interface BlogPost {
  title: string
  excerpt: string
  date: string
  slug: string
  readTime: string
  content: string
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Accessible Web Components",
    excerpt:
      "Learn how to create inclusive user interfaces that work for everyone. We'll explore ARIA patterns, keyboard navigation, and screen reader compatibility.",
    date: "March 15, 2024",
    slug: "accessible-web-components",
    readTime: "5 min read",
    tags: ["Accessibility", "Web Components", "HTML"],
    content: `
# Building Accessible Web Components

Creating accessible web components is not just about compliance—it's about building inclusive experiences that work for everyone. In this comprehensive guide, we'll explore the essential patterns and techniques for making your components truly accessible.

## Understanding ARIA Patterns

ARIA (Accessible Rich Internet Applications) provides semantic information about elements to assistive technologies. Here are the key patterns every developer should know:

### Roles, Properties, and States

- **Roles** define what an element is or does
- **Properties** describe element properties that don't change
- **States** describe current conditions of elements

\`\`\`html
<button 
  role="button" 
  aria-pressed="false" 
  aria-describedby="help-text"
>
  Toggle Feature
</button>
<div id="help-text">This will enable the advanced feature</div>
\`\`\`

## Keyboard Navigation

Proper keyboard navigation is crucial for accessibility. Users should be able to navigate your interface using only the keyboard.

### Focus Management

- Ensure all interactive elements are focusable
- Provide visible focus indicators
- Implement logical tab order
- Handle focus trapping in modals

### Common Keyboard Patterns

- **Tab/Shift+Tab**: Navigate between focusable elements
- **Enter/Space**: Activate buttons and links
- **Arrow keys**: Navigate within component groups
- **Escape**: Close modals or cancel actions

## Screen Reader Compatibility

Screen readers need semantic HTML and proper ARIA labels to understand your content:

\`\`\`html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
\`\`\`

## Testing Your Components

Regular testing ensures your components remain accessible:

1. **Automated testing** with tools like axe-core
2. **Manual keyboard testing**
3. **Screen reader testing** with NVDA, JAWS, or VoiceOver
4. **Color contrast verification**

## Conclusion

Building accessible web components requires attention to detail and consistent testing. By following these patterns and principles, you'll create interfaces that work for everyone, regardless of their abilities or the tools they use to access the web.

Remember: accessibility is not a feature—it's a fundamental requirement for inclusive web development.
    `,
  },
  {
    title: "The Future of CSS: Container Queries",
    excerpt:
      "Container queries are changing how we think about responsive design. Discover how this powerful feature lets components adapt to their container size.",
    date: "March 8, 2024",
    slug: "css-container-queries",
    readTime: "7 min read",
    tags: ["CSS", "Responsive Design", "Container Queries"],
    content: `
# The Future of CSS: Container Queries

Container queries represent a paradigm shift in responsive design. Instead of designing based on viewport size, we can now create components that adapt to their container's dimensions.

## What Are Container Queries?

Container queries allow you to apply styles based on the size of a containing element, not just the viewport. This enables truly modular, responsive components.

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
  
  .card-image {
    width: 200px;
  }
}
\`\`\`

## Container Types

There are three container types you can use:

### 1. Size Containment
\`\`\`css
.container {
  container-type: size; /* Both inline and block dimensions */
}
\`\`\`

### 2. Inline Size Containment
\`\`\`css
.container {
  container-type: inline-size; /* Only inline dimension (width in horizontal writing mode) */
}
\`\`\`

### 3. Normal
\`\`\`css
.container {
  container-type: normal; /* No containment */
}
\`\`\`

## Practical Examples

### Responsive Card Component

\`\`\`css
.card-wrapper {
  container-type: inline-size;
}

.card {
  padding: 1rem;
  border: 1px solid #ccc;
}

@container (min-width: 300px) {
  .card {
    padding: 2rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
}

@container (min-width: 500px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
}
\`\`\`

### Navigation Component

\`\`\`css
.nav-container {
  container-type: inline-size;
}

.nav {
  display: flex;
  flex-direction: column;
}

@container (min-width: 600px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
  }
}
\`\`\`

## Browser Support and Fallbacks

Container queries have excellent modern browser support, but you should provide fallbacks:

\`\`\`css
/* Fallback styles */
.card {
  display: block;
}

/* Container query enhancement */
@supports (container-type: inline-size) {
  .card-container {
    container-type: inline-size;
  }
  
  @container (min-width: 400px) {
    .card {
      display: flex;
    }
  }
}
\`\`\`

## Best Practices

1. **Use meaningful container names** for better organization
2. **Prefer inline-size** over size for better performance
3. **Combine with CSS Grid** for powerful layout systems
4. **Test across different container sizes** during development

## The Impact on Design Systems

Container queries enable truly modular design systems where components can adapt to any context without knowing about their parent containers.

## Conclusion

Container queries are revolutionizing how we approach responsive design. They enable component-driven responsive design that's more maintainable and flexible than traditional media queries.

Start experimenting with container queries in your projects today—they're the future of responsive web design.
    `,
  },
  {
    title: "React Server Components Explained",
    excerpt:
      "Dive deep into React Server Components and understand how they're revolutionizing the way we build React applications with better performance.",
    date: "February 28, 2024",
    slug: "react-server-components",
    readTime: "10 min read",
    tags: ["React", "Server Components", "Performance"],
    content: `
# React Server Components Explained

React Server Components (RSC) represent a fundamental shift in how we build React applications. They enable us to render components on the server, reducing bundle size and improving performance.

## What Are Server Components?

Server Components are React components that render on the server and send their output to the client. Unlike traditional SSR, Server Components don't hydrate on the client—they remain server-only.

## Key Benefits

### 1. Reduced Bundle Size
Server Components don't ship JavaScript to the client, significantly reducing bundle size.

### 2. Direct Database Access
Server Components can directly access databases and APIs without exposing credentials to the client.

### 3. Improved Performance
By rendering on the server, we reduce the work the client needs to do.

## Server vs Client Components

### Server Components (Default)
\`\`\`jsx
// This runs on the server
export default async function BlogPost({ id }) {
  const post = await db.posts.findById(id)
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
\`\`\`

### Client Components
\`\`\`jsx
'use client'

import { useState } from 'react'

// This runs on the client
export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
\`\`\`

## Composition Patterns

### Server Component with Client Component Children
\`\`\`jsx
// ServerLayout.jsx (Server Component)
export default function ServerLayout({ children }) {
  return (
    <div className="layout">
      <header>Server-rendered header</header>
      {children}
    </div>
  )
}

// ClientInteractive.jsx (Client Component)
'use client'
export default function ClientInteractive() {
  const [state, setState] = useState()
  return <div>Interactive content</div>
}

// Page.jsx (Server Component)
export default function Page() {
  return (
    <ServerLayout>
      <ClientInteractive />
    </ServerLayout>
  )
}
\`\`\`

## Data Fetching Patterns

### Parallel Data Fetching
\`\`\`jsx
async function getData() {
  const [posts, users] = await Promise.all([
    fetch('/api/posts'),
    fetch('/api/users')
  ])
  
  return {
    posts: await posts.json(),
    users: await users.json()
  }
}

export default async function Dashboard() {
  const { posts, users } = await getData()
  
  return (
    <div>
      <PostsList posts={posts} />
      <UsersList users={users} />
    </div>
  )
}
\`\`\`

### Sequential Data Fetching
\`\`\`jsx
export default async function UserProfile({ userId }) {
  const user = await getUser(userId)
  const posts = await getUserPosts(user.id)
  
  return (
    <div>
      <UserInfo user={user} />
      <UserPosts posts={posts} />
    </div>
  )
}
\`\`\`

## Streaming and Suspense

Server Components work seamlessly with React Suspense for streaming:

\`\`\`jsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading posts...</div>}>
        <Posts />
      </Suspense>
      <Suspense fallback={<div>Loading sidebar...</div>}>
        <Sidebar />
      </Suspense>
    </div>
  )
}
\`\`\`

## Best Practices

1. **Use Server Components by default** and only add 'use client' when needed
2. **Keep the client boundary as low as possible** in your component tree
3. **Pass serializable props** between server and client components
4. **Leverage streaming** with Suspense for better UX

## Common Pitfalls

### 1. Importing Server Components in Client Components
\`\`\`jsx
// ❌ This won't work
'use client'
import ServerComponent from './ServerComponent'

export default function ClientComponent() {
  return <ServerComponent />
}
\`\`\`

### 2. Using Browser APIs in Server Components
\`\`\`jsx
// ❌ This will cause an error
export default function ServerComponent() {
  const width = window.innerWidth // window is not available on server
  return <div>Width: {width}</div>
}
\`\`\`

## Migration Strategy

1. **Start with new features** using Server Components
2. **Gradually convert existing components** that don't need client-side interactivity
3. **Use the composition pattern** to mix server and client components
4. **Measure performance improvements** as you migrate

## Conclusion

React Server Components are a powerful addition to the React ecosystem. They enable better performance, smaller bundle sizes, and more secure applications by moving computation to the server.

While there's a learning curve, the benefits make Server Components essential for modern React applications. Start experimenting with them in your next project!
    `,
  },
  {
    title: "TypeScript Tips for Better Code",
    excerpt:
      "Practical TypeScript techniques that will make your code more robust and maintainable. From utility types to advanced patterns.",
    date: "February 20, 2024",
    slug: "typescript-tips",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Development"],
    content: `
# TypeScript Tips for Better Code

TypeScript has become essential for building robust JavaScript applications. Here are practical tips and techniques to level up your TypeScript skills.

## Utility Types

TypeScript provides powerful utility types that can make your code more maintainable:

### Pick and Omit
\`\`\`typescript
interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
}

// Pick specific properties
type PublicUser = Pick<User, 'id' | 'name' | 'email'>

// Omit sensitive properties
type SafeUser = Omit<User, 'password'>
\`\`\`

### Partial and Required
\`\`\`typescript
// Make all properties optional
type UserUpdate = Partial<User>

// Make all properties required
type CompleteUser = Required<User>
\`\`\`

## Advanced Type Patterns

### Conditional Types
\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T }

type StringResponse = ApiResponse<string> // { message: string }
type DataResponse = ApiResponse<User[]>   // { data: User[] }
\`\`\`

### Mapped Types
\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Optional<T> = {
  [P in keyof T]?: T[P]
}
\`\`\`

## Generic Constraints

Use constraints to limit generic types:

\`\`\`typescript
interface Identifiable {
  id: string
}

function updateEntity<T extends Identifiable>(
  entity: T, 
  updates: Partial<T>
): T {
  return { ...entity, ...updates }
}
\`\`\`

## Type Guards

Create custom type guards for runtime type checking:

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'email' in obj
  )
}

// Usage
function processData(data: unknown) {
  if (isUser(data)) {
    // TypeScript knows data is User here
    console.log(data.name)
  }
}
\`\`\`

## Discriminated Unions

Use discriminated unions for type-safe state management:

\`\`\`typescript
type LoadingState = {
  status: 'loading'
}

type SuccessState = {
  status: 'success'
  data: User[]
}

type ErrorState = {
  status: 'error'
  error: string
}

type AsyncState = LoadingState | SuccessState | ErrorState

function handleState(state: AsyncState) {
  switch (state.status) {
    case 'loading':
      return <Spinner />
    case 'success':
      return <UserList users={state.data} />
    case 'error':
      return <ErrorMessage message={state.error} />
  }
}
\`\`\`

## Template Literal Types

Create precise string types:

\`\`\`typescript
type EventName = 'click' | 'focus' | 'blur'
type EventHandler<T extends EventName> = \`on\${Capitalize<T>}\`

type ClickHandler = EventHandler<'click'> // 'onClick'
type FocusHandler = EventHandler<'focus'> // 'onFocus'
\`\`\`

## Strict Configuration

Use strict TypeScript configuration for better type safety:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
\`\`\`

## Error Handling Patterns

### Result Type Pattern
\`\`\`typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E }

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const user = await api.getUser(id)
    return { success: true, data: user }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error : new Error('Unknown error')
    }
  }
}

// Usage
const result = await fetchUser('123')
if (result.success) {
  console.log(result.data.name) // Type-safe access
} else {
  console.error(result.error.message)
}
\`\`\`

## Performance Tips

### Use const assertions
\`\`\`typescript
// Instead of string[]
const colors = ['red', 'green', 'blue'] as const
// Type is readonly ['red', 'green', 'blue']

// Instead of object with string values
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
} as const
\`\`\`

### Prefer interfaces over types for objects
\`\`\`typescript
// ✅ Better for objects
interface User {
  id: string
  name: string
}

// ✅ Better for unions and computed types
type Status = 'loading' | 'success' | 'error'
\`\`\`

## Conclusion

These TypeScript patterns and techniques will help you write more robust, maintainable code. Start incorporating them into your projects gradually, and you'll see immediate improvements in code quality and developer experience.

Remember: TypeScript is not just about adding types—it's about leveraging the type system to catch errors early and make your code more self-documenting.
    `,
  },
  // Add more blog posts with full content...
  {
    title: "Modern CSS Layout Techniques",
    excerpt:
      "Explore CSS Grid, Flexbox, and other modern layout methods to create responsive designs that work across all devices.",
    date: "February 12, 2024",
    slug: "modern-css-layout",
    readTime: "8 min read",
    tags: ["CSS", "Layout", "Grid", "Flexbox"],
    content: `
# Modern CSS Layout Techniques

Modern CSS provides powerful layout tools that make creating responsive designs easier than ever. Let's explore the key techniques every developer should master.

## CSS Grid: The Ultimate Layout Tool

CSS Grid is perfect for two-dimensional layouts where you need control over both rows and columns.

### Basic Grid Setup
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  min-height: 100vh;
}

.header { grid-column: 1 / -1; }
.sidebar { grid-column: 1; }
.main { grid-column: 2 / -1; }
.footer { grid-column: 1 / -1; }
\`\`\`

### Named Grid Lines
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 250px 
    [sidebar-end main-start] 1fr 
    [main-end];
}

.sidebar {
  grid-column: sidebar-start / sidebar-end;
}

.main {
  grid-column: main-start / main-end;
}
\`\`\`

## Flexbox: Perfect for One-Dimensional Layouts

Flexbox excels at distributing space and aligning items in a single direction.

### Common Flexbox Patterns
\`\`\`css
/* Center everything */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Space between items */
.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Equal width columns */
.equal-columns {
  display: flex;
  gap: 1rem;
}

.equal-columns > * {
  flex: 1;
}
\`\`\`

## Container Queries for Component-Based Design

Container queries allow components to adapt to their container size:

\`\`\`css
.card-container {
  container-type: inline-size;
}

.card {
  padding: 1rem;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }
}
\`\`\`

## Logical Properties for International Design

Use logical properties for better internationalization:

\`\`\`css
/* Instead of margin-left */
.element {
  margin-inline-start: 1rem;
  padding-block: 2rem;
  border-inline-end: 1px solid #ccc;
}
\`\`\`

## Modern Responsive Design

### Intrinsic Web Design
\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

### Fluid Typography
\`\`\`css
.fluid-text {
  font-size: clamp(1rem, 4vw, 2rem);
}
\`\`\`

## Conclusion

Modern CSS layout techniques provide powerful tools for creating responsive, maintainable designs. Master these patterns and you'll be able to handle any layout challenge.
    `,
  },
  // Continue with other posts...
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
