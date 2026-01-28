import{j as n,M as t}from"./index-C7wZGJi8.js";import{useMDXComponents as r}from"./index-Dz0YScBe.js";import"./iframe-DAOQTKYq.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"atomos-prime-design-system",children:"Atomos Prime Design System"}),`
`,n.jsxs(e.p,{children:["Welcome to ",n.jsx(e.strong,{children:"Atomos Prime"})," - A Pulsar-based design system with TailwindCSS."]}),`
`,n.jsx(e.h2,{id:"architecture",children:"Architecture"}),`
`,n.jsxs(e.p,{children:["This component library follows ",n.jsx(e.strong,{children:"Atomic Design principles"}),":"]}),`
`,n.jsx(e.h3,{id:"atoms",children:"Atoms"}),`
`,n.jsx(e.p,{children:"Single-purpose UI elements (Button, Input, Typography, etc.)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ External constants for default config/styling"}),`
`,n.jsx(e.li,{children:"✅ No inline logic in components"}),`
`,n.jsx(e.li,{children:"✅ ComponentConfigBuilder for configuration"}),`
`,n.jsx(e.li,{children:"✅ ComponentStylingBuilder for styling"}),`
`,n.jsx(e.li,{children:"✅ Ternary operators in return statements"}),`
`,n.jsx(e.li,{children:"✅ Skeleton component for loading states"}),`
`]}),`
`,n.jsx(e.h3,{id:"molecules",children:"Molecules"}),`
`,n.jsx(e.p,{children:"Compositions of 2-3 atoms (Badge, Label, RadioGroup, etc.)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Compose atomic components"}),`
`,n.jsx(e.li,{children:"Maintain separation of concerns"}),`
`,n.jsx(e.li,{children:"Follow same architectural patterns as atoms"}),`
`]}),`
`,n.jsx(e.h3,{id:"organisms",children:"Organisms"}),`
`,n.jsx(e.p,{children:"Complex compositions (Card, Header, Footer, Select, etc.)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Compose molecules and atoms"}),`
`,n.jsx(e.li,{children:"Handle complex interactions"}),`
`,n.jsx(e.li,{children:"Maintain architectural consistency"}),`
`]}),`
`,n.jsx(e.h2,{id:"key-patterns",children:"Key Patterns"}),`
`,n.jsx(e.h3,{id:"1-external-constants",children:"1. External Constants"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const defaultConfig = new ComponentConfigBuilder('primary').build()\r
const defaultStyling = new ComponentStylingBuilder().base('...').build()
`})}),`
`,n.jsx(e.h3,{id:"2-ternary-in-return",children:"2. Ternary in Return"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`export const Component = (props) =>\r
  props.loading ?\r
    <Skeleton /> :\r
    <Element {...props} />
`})}),`
`,n.jsx(e.h3,{id:"3-no-inline-logic",children:"3. No Inline Logic"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ❌ Bad\r
className={\`base \${loading ? 'loading' : ''}\`}\r
\r
// ✅ Good\r
className={cn(\r
  styling.base,\r
  loading ? styling.loading : '',\r
  config.className\r
)}
`})}),`
`,n.jsx(e.h3,{id:"4-type-safety",children:"4. Type Safety"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`export interface IComponentProps extends Pulsar.HtmlExtends<'element'> {\r
  config?: IComponentConfig\r
  styling?: IComponentStyling\r
}
`})}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.p,{children:"Browse the components in the sidebar organized by:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Atoms"})," - Basic building blocks"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Molecules"})," - Simple compositions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Organisms"})," - Complex structures"]}),`
`]}),`
`,n.jsx(e.p,{children:"Each component includes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Interactive controls"}),`
`,n.jsx(e.li,{children:"Multiple variants/states"}),`
`,n.jsx(e.li,{children:"Usage documentation"}),`
`,n.jsx(e.li,{children:"Code examples"}),`
`]})]})}function h(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{h as default};
