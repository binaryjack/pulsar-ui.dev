// Test file to verify component children transformation

// Simple child component
export const Child = () => {
  const el1 = document.createElement('div');
  el1.textContent = 'I am the child!';
  return el1;
};

// Parent component that should receive children as props
export const Parent = ({ children }: { children?: HTMLElement | HTMLElement[] }) => {
  const el1 = document.createElement('div');
  el1.className = 'parent';

  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => el1.appendChild(child));
    } else {
      el1.appendChild(children);
    }
  }

  return el1;
};

// Usage with children
const app = (
  <Parent>
    <Child />
  </Parent>
);

console.log('App element:', app);
console.log('App HTML:', app.outerHTML);
