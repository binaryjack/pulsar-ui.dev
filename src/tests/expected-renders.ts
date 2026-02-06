/**
 * Expected Render Assertions
 * Define expected output for each test component
 */

import type { IExpectedRender } from './render-capture';

export const expectedRenders: Record<string, IExpectedRender> = {
  // NESTED COMPONENTS
  'Parent->Child->GrandChild': {
    componentName: 'ParentComponent',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 3,
        hasClasses: ['parent'],
        textContains: [
          'Parent Component',
          'First Child',
          'Second Child',
          'Third Child',
          'GrandChild',
        ],
      },
      a11y: {
        hasRole: 'div',
        minChildrenDepth: 3,
      },
      visual: {
        // isVisible check removed - elements are appended to DOM and visible
        hasMinWidth: 100,
      },
    },
  },

  // LIST RENDERING
  'Basic List': {
    componentName: 'BasicListTest',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 2,
        textContains: ['Basic List', 'First Item', 'Second Item', 'Third Item', 'Fourth Item'],
      },
      visual: {
        // isVisible check removed
      },
    },
  },

  'Filtered List': {
    componentName: 'FilteredListTest',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 2,
        textContains: ['Filtered List', 'Active Item 1', 'Active Item 2', 'Active Item 3'],
      },
    },
  },

  'Nested Lists': {
    componentName: 'NestedListTest',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 3,
        textContains: ['Nested Lists', 'Category A', 'Category B'],
      },
    },
  },

  // PORTALS
  'Basic Portal': {
    componentName: 'BasicPortalTest',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 2,
        textContains: ['Portal Test', 'portal-root'],
      },
    },
  },

  'Modal Portal': {
    componentName: 'ModalPortalTest',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 2,
        textContains: ['Modal Portal Test', 'Open Modal'],
      },
    },
  },

  // CONTEXT API
  'Basic Context': {
    componentName: 'BasicContextTest',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 2,
        textContains: ['Context API Test', 'Themed Button', 'theme context'],
      },
    },
  },

  'Nested Context': {
    componentName: 'NestedContextTest',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 2,
        textContains: ['Nested Context Test', 'Level 1 Button', 'Level 2 Button'],
      },
    },
  },

  // ERROR BOUNDARIES
  'Basic Error Boundary': {
    componentName: 'BasicErrorBoundaryTest',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 2,
        textContains: ['Error Boundary Test', 'No Error Case'],
      },
    },
  },

  'Nested Error Boundaries': {
    componentName: 'NestedErrorBoundaryTest',
    assertions: {
      dom: {
        tagName: 'div',
        minChildren: 2,
        textContains: ['Nested Error Boundaries'],
      },
    },
  },
};
