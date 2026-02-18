/**
 * Demo Services for DI Showcase
 * Shared service classes used across multiple DI demos
 * Extracted from inline definitions to follow single-responsibility principle
 */

// ===== Service Lifetime Demo Services =====

export const SingletonService = function (this: any) {
  Object.defineProperty(this, 'instanceId', {
    value: Math.floor(Math.random() * 1000),
    enumerable: true,
    writable: false,
  });

  Object.defineProperty(this, 'type', {
    value: 'singleton',
    enumerable: true,
  });
};

export const TransientService = function (this: any) {
  Object.defineProperty(this, 'instanceId', {
    value: Math.floor(Math.random() * 1000),
    enumerable: true,
    writable: false,
  });

  Object.defineProperty(this, 'type', {
    value: 'transient',
    enumerable: true,
  });
};

export const ScopedService = function (this: any) {
  Object.defineProperty(this, 'instanceId', {
    value: Math.floor(Math.random() * 1000),
    enumerable: true,
    writable: false,
  });

  Object.defineProperty(this, 'type', {
    value: 'scoped',
    enumerable: true,
  });
};

// ===== Service Registration Demo Services =====

export const LoggerService = function (this: any) {
  Object.defineProperty(this, 'log', {
    value: function (message: string) {
      console.log('[Logger]', message);
    },
    enumerable: false,
  });
};

export const ApiClientService = function (this: any) {
  Object.defineProperty(this, 'fetch', {
    value: async function (url: string) {
      return await fetch(url);
    },
    enumerable: false,
  });
};

export const AnalyticsService = function (this: any) {
  Object.defineProperty(this, 'track', {
    value: function (event: string) {
      console.log('[Analytics]', event);
    },
    enumerable: false,
  });
};

// ===== Service Resolution Demo Services =====

export const DemoService = function (this: any, name: string, id: number) {
  Object.defineProperty(this, 'name', {
    value: name,
    enumerable: true,
  });

  Object.defineProperty(this, 'id', {
    value: id,
    enumerable: true,
  });

  Object.defineProperty(this, 'greet', {
    value: function () {
      return `Hello from ${this.name} #${this.id}`;
    },
    enumerable: false,
  });
};

// ===== Type Definitions for TypeScript Support =====

export interface ISingletonService {
  readonly instanceId: number;
}

export interface ITransientService {
  readonly instanceId: number;
}

export interface IScopedService {
  readonly instanceId: number;
}

export interface ILoggerService {
  log(message: string): void;
}

export interface IApiClientService {
  fetch(url: string): Promise<Response>;
}

export interface IAnalyticsService {
  track(event: string): void;
}

export interface IDemoService {
  readonly name: string;
  readonly id: number;
  greet(): string;
}
