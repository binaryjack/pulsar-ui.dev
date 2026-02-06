/**
 * Portal Tests
 * Tests: Rendering components outside parent DOM
 */

import { createEffect, createSignal } from '@pulsar-framework/pulsar.dev/reactivity';

class PortalManager {
  private static readonly portals: Map<string, HTMLElement> = new Map();

  static getOrCreate(id: string): HTMLElement {
    if (!this.portals.has(id)) {
      const portal = document.createElement('div');
      portal.id = id;
      portal.className = 'portal-root';
      portal.style.cssText =
        'position: fixed; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; z-index: 9999;';
      document.body.appendChild(portal);
      this.portals.set(id, portal);
    }
    return this.portals.get(id)!;
  }

  static cleanup(id: string): void {
    const portal = this.portals.get(id);
    if (portal) {
      portal.remove();
      this.portals.delete(id);
    }
  }
}

const Portal = (props: { id: string; children: HTMLElement }): HTMLElement => {
  const portalRoot = PortalManager.getOrCreate(props.id);

  // Set pointer-events on the CHILD, not the root (root must stay pointer-events: none)
  props.children.style.pointerEvents = 'auto';
  portalRoot.appendChild(props.children);

  return (
    <div
      style={{
        background: '#fff9c4',
        border: '2px dashed #fbc02d',
        padding: '10px',
        borderRadius: '4px',
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#f57f17',
      }}
    >
      [Portal: {props.id}]
    </div>
  );
};

const Modal = (props: {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children?: () => HTMLElement;
}): HTMLElement => {
  if (!props.isOpen) {
    return <div />;
  }

  const innerModal = (
    <div
      style={{
        background: 'white',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '500px',
        width: '90%',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
      }}
      onClick={(e: MouseEvent) => e.stopPropagation()}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ margin: '0' }}>{props.title}</h2>
        <button
          style={{
            background: '#ff4444',
            color: 'white',
            border: 'none',
            padding: '5px 15px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.5rem',
          }}
          onClick={props.onClose}
        >
          ×
        </button>
      </div>
      {props.children?.()}
    </div>
  );

  const overlay = (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '10000',
      }}
      onClick={props.onClose}
    >
      {innerModal}
    </div>
  );

  return Portal({ id: 'modal-portal', children: overlay });
};

export const BasicPortalTest = (): HTMLElement => {
  const portalContent = (
    <div
      style={{
        background: '#e1f5fe',
        padding: '20px',
        borderRadius: '8px',
        border: '2px solid #0288d1',
      }}
    >
      This content is rendered in a portal!
    </div>
  );

  const portal = Portal({ id: 'test-portal', children: portalContent });

  const container = (
    <div style={{ padding: '15px' }}>
      <h3>Portal Test</h3>
      <p style={{ color: '#666' }}>Check body for portal-root element</p>
      {portal}
    </div>
  );

  return container;
};

export const ModalPortalTest = (): HTMLElement => {
  // DECLARATIVE: Signal-based state management
  const [isOpen, setIsOpen] = createSignal(false);

  const modalContainer = <div />;

  // DECLARATIVE: Reactive effect - auto-runs when isOpen changes
  createEffect(() => {
    const open = isOpen(); // Track dependency

    // Clear previous content
    modalContainer.innerHTML = '';

    if (!open) {
      // Cleanup portal when closed
      PortalManager.cleanup('modal-portal');
      return;
    }

    // DECLARATIVE: Create modal with render prop for custom content
    const modal = Modal({
      isOpen: true,
      title: 'Test Modal',
      onClose: () => setIsOpen(false),
      children: () => (
        <div>
          <p style={{ marginBottom: '20px', color: '#333' }}>
            This is a test modal with multiple actions. Click OK to confirm or Cancel to dismiss.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'flex-end',
            }}
          >
            <button
              style={{
                background: '#6c757d',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              onClick={() => {
                console.log('Cancel clicked');
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              style={{
                background: '#28a745',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              onClick={() => {
                console.log('OK clicked');
                setIsOpen(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      ),
    });

    modalContainer.appendChild(modal);
  });

  const container = (
    <div style={{ padding: '15px' }}>
      <h3>Modal Portal Test</h3>
      <button
        style={{
          background: '#667eea',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      {modalContainer}
    </div>
  );

  return container;
};
