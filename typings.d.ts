// import {
//   async,
//   render,
//   RenderOptions,
//   Component,
//   CustomElementConfig,
//   query,
//   queryAll,
//   LitElement,
//   CSSResult
// } from "@rxdi/lit-html";

// import {
//   ObservableInput,
//   ObservedValueOf,
//   throwError,
//   iif,
//   TeardownLogic,
//   OperatorFunction,
//   PartialObserver,
//   Subscription,
//   Subscriber,
//   Operator,
//   Subscribable,
//   of,
//   from,
//   fromEvent,
//   SchedulerLike,
//   Observable
// } from "rxjs";
// import { queryParentRouterSlot } from "router-slot";
declare global {
  interface HTMLElementTagNameMap {
    'about-component': HTMLElement;
  }
}
interface CustomElementConfig<T> {
  selector: string;
  template?: (self: T) => TemplateResult;
  style?: CSSResult;
  styles?: CSSResult[];
  useShadow?: boolean;
  extends?: string;
  container?: Element | DocumentFragment;
  providers?: Function[];
}
interface RenderOptions {
  readonly templateFactory: TemplateFactory;
  readonly eventContext?: EventTarget;
}

declare class TemplateResult {
    readonly strings: TemplateStringsArray;
    readonly values: ReadonlyArray<unknown>;
    readonly type: string;
    readonly processor: TemplateProcessor;
    constructor(strings: TemplateStringsArray, values: ReadonlyArray<unknown>, type: string, processor: TemplateProcessor);
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML(): string;
    getTemplateElement(): HTMLTemplateElement;
}

declare const html: (strings: TemplateStringsArray, ...values: unknown[]) => TemplateResult;
declare const async: Subscribable<T> | PromiseLike<T>;
declare function render(
  result: TemplateResult,
  container: Element | DocumentFragment,
  options?: Partial<RenderOptions>
): void;
declare function Component<T>(options: CustomElementConfig<T>): T;
declare function query(
  selector: string
): (
  protoOrDescriptor: Object | ClassElement,
  name?: string | number | symbol
) => any;
declare function queryAll<D = any>($elem: Element): IRouterSlot<D> | null;
declare function queryParentRouterSlot<D = any>(
  $elem: Element
): IRouterSlot<D> | null;
declare const LitElement: LitElement;
declare function css(
  strings: TemplateStringsArray,
  ...values: (number | CSSResult)[]
): CSSResult;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
declare function of<T>(a: T, scheduler: SchedulerLike): Observable<T>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
declare function of<T, T2>(
  a: T,
  b: T2,
  scheduler: SchedulerLike
): Observable<T | T2>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
declare function of<T, T2, T3>(
  a: T,
  b: T2,
  c: T3,
  scheduler: SchedulerLike
): Observable<T | T2 | T3>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
declare function of<T, T2, T3, T4>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
declare function of<T, T2, T3, T4, T5>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
declare function of<T, T2, T3, T4, T5, T6>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
declare function of<T, T2, T3, T4, T5, T6, T7>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  g: T7,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6 | T7>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
declare function of<T, T2, T3, T4, T5, T6, T7, T8>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  g: T7,
  h: T8,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
declare function of<T, T2, T3, T4, T5, T6, T7, T8, T9>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  g: T7,
  h: T8,
  i: T9,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
declare function of<T>(...args: (T | SchedulerLike)[]): Observable<T>;
declare function of<T>(a: T): Observable<T>;
declare function of<T, T2>(a: T, b: T2): Observable<T | T2>;
declare function of<T, T2, T3>(a: T, b: T2, c: T3): Observable<T | T2 | T3>;
declare function of<T, T2, T3, T4>(
  a: T,
  b: T2,
  c: T3,
  d: T4
): Observable<T | T2 | T3 | T4>;
declare function of<T, T2, T3, T4, T5>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5
): Observable<T | T2 | T3 | T4 | T5>;
declare function of<T, T2, T3, T4, T5, T6>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6
): Observable<T | T2 | T3 | T4 | T5 | T6>;
declare function of<T, T2, T3, T4, T5, T6, T7>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  g: T7
): Observable<T | T2 | T3 | T4 | T5 | T6 | T7>;
declare function of<T, T2, T3, T4, T5, T6, T7, T8>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  g: T7,
  h: T8
): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
declare function of<T, T2, T3, T4, T5, T6, T7, T8, T9>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  g: T7,
  h: T8,
  i: T9
): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
declare function of<T>(...args: T[]): Observable<T>;

declare function from<O extends ObservableInput<any>>(
  input: O
): Observable<ObservedValueOf<O>>;
/** @deprecated use {@link scheduled} instead. */
declare function from<O extends ObservableInput<any>>(
  input: O,
  scheduler: SchedulerLike
): Observable<ObservedValueOf<O>>;
interface NodeStyleEventEmitter {
  addListener: (eventName: string | symbol, handler: NodeEventHandler) => this;
  removeListener: (
    eventName: string | symbol,
    handler: NodeEventHandler
  ) => this;
}
declare type NodeEventHandler = (...args: any[]) => void;
interface NodeCompatibleEventEmitter {
  addListener: (eventName: string, handler: NodeEventHandler) => void | {};
  removeListener: (eventName: string, handler: NodeEventHandler) => void | {};
}
interface JQueryStyleEventEmitter {
  on: (eventName: string, handler: Function) => void;
  off: (eventName: string, handler: Function) => void;
}
interface HasEventTargetAddRemove<E> {
  addEventListener(
    type: string,
    listener: ((evt: E) => void) | null,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener?: ((evt: E) => void) | null,
    options?: EventListenerOptions | boolean
  ): void;
}
declare type EventTargetLike<T> =
  | HasEventTargetAddRemove<T>
  | NodeStyleEventEmitter
  | NodeCompatibleEventEmitter
  | JQueryStyleEventEmitter;
declare type FromEventTarget<T> =
  | EventTargetLike<T>
  | ArrayLike<EventTargetLike<T>>;
interface EventListenerOptions {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
}
interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
}
declare function fromEvent<T>(
  target: FromEventTarget<T>,
  eventName: string
): Observable<T>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
declare function fromEvent<T>(
  target: FromEventTarget<T>,
  eventName: string,
  resultSelector: (...args: any[]) => T
): Observable<T>;
declare function fromEvent<T>(
  target: FromEventTarget<T>,
  eventName: string,
  options: EventListenerOptions
): Observable<T>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
declare function fromEvent<T>(
  target: FromEventTarget<T>,
  eventName: string,
  options: EventListenerOptions,
  resultSelector: (...args: any[]) => T
): Observable<T>;

/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
declare class Observable<T> implements Subscribable<T> {
  /** Internal implementation detail, do not use directly. */
  _isScalar: boolean;
  /** @deprecated This is an internal implementation detail, do not use. */
  source: Observable<any>;
  /** @deprecated This is an internal implementation detail, do not use. */
  operator: Operator<any, T>;
  /**
   * @constructor
   * @param {Function} subscribe the function that is called when the Observable is
   * initially subscribed to. This function is given a Subscriber, to which new values
   * can be `next`ed, or an `error` method can be called to raise an error, or
   * `complete` can be called to notify of a successful completion.
   */
  constructor(
    subscribe?: (
      this: Observable<T>,
      subscriber: Subscriber<T>
    ) => TeardownLogic
  );
  /**
   * Creates a new cold Observable by calling the Observable constructor
   * @static true
   * @owner Observable
   * @method create
   * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
   * @return {Observable} a new cold observable
   * @nocollapse
   * @deprecated use new Observable() instead
   */
  static create: Function;
  /**
   * Creates a new Observable, with this Observable as the source, and the passed
   * operator defined as the new observable's operator.
   * @method lift
   * @param {Operator} operator the operator defining the operation to take on the observable
   * @return {Observable} a new observable with the Operator applied
   */
  lift<R>(operator: Operator<T, R>): Observable<R>;
  subscribe(observer?: PartialObserver<T>): Subscription;
  /** @deprecated Use an observer instead of a complete callback */
  subscribe(
    next: null | undefined,
    error: null | undefined,
    complete: () => void
  ): Subscription;
  /** @deprecated Use an observer instead of an error callback */
  subscribe(
    next: null | undefined,
    error: (error: any) => void,
    complete?: () => void
  ): Subscription;
  /** @deprecated Use an observer instead of a complete callback */
  subscribe(
    next: (value: T) => void,
    error: null | undefined,
    complete: () => void
  ): Subscription;
  subscribe(
    next?: (value: T) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription;
  /** @deprecated This is an internal implementation detail, do not use. */
  _trySubscribe(sink: Subscriber<T>): TeardownLogic;
  /**
   * @method forEach
   * @param {Function} next a handler for each value emitted by the observable
   * @param {PromiseConstructor} [promiseCtor] a constructor function used to instantiate the Promise
   * @return {Promise} a promise that either resolves on observable completion or
   *  rejects with the handled error
   */
  forEach(
    next: (value: T) => void,
    promiseCtor?: PromiseConstructorLike
  ): Promise<void>;
  /** @internal This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<any>): TeardownLogic;
  /**
   * @nocollapse
   * @deprecated In favor of iif creation function: import { iif } from 'rxjs';
   */
  static if: typeof iif;
  /**
   * @nocollapse
   * @deprecated In favor of throwError creation function: import { throwError } from 'rxjs';
   */
  static throw: typeof throwError;
  pipe(): Observable<T>;
  pipe<A>(op1: OperatorFunction<T, A>): Observable<A>;
  pipe<A, B>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>
  ): Observable<B>;
  pipe<A, B, C>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>
  ): Observable<C>;
  pipe<A, B, C, D>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>
  ): Observable<D>;
  pipe<A, B, C, D, E>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>
  ): Observable<E>;
  pipe<A, B, C, D, E, F>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>
  ): Observable<F>;
  pipe<A, B, C, D, E, F, G>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>
  ): Observable<G>;
  pipe<A, B, C, D, E, F, G, H>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>,
    op8: OperatorFunction<G, H>
  ): Observable<H>;
  pipe<A, B, C, D, E, F, G, H, I>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>,
    op8: OperatorFunction<G, H>,
    op9: OperatorFunction<H, I>
  ): Observable<I>;
  pipe<A, B, C, D, E, F, G, H, I>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>,
    op8: OperatorFunction<G, H>,
    op9: OperatorFunction<H, I>,
    ...operations: OperatorFunction<any, any>[]
  ): Observable<{}>;
  toPromise<T>(this: Observable<T>): Promise<T>;
  toPromise<T>(this: Observable<T>, PromiseCtor: typeof Promise): Promise<T>;
  toPromise<T>(
    this: Observable<T>,
    PromiseCtor: PromiseConstructorLike
  ): Promise<T>;
}

// window["Observable"] = Observable;
// window["BehaviorSubject"] = BehaviorSubject;
// window["Subject"] = Subject;
// window["ReplaySubject"] = ReplaySubject;

// // Operators
// window["tap"] = tap;
// window["map"] = map;
// window["switchMap"] = switchMap;
// window["concatAll"] = concatAll;
// window["startWith"] = startWith;
// window["concatMap"] = concatMap;
// window["concat"] = concat;
// window["switchMapTo"] = switchMapTo;
// window["combineLatest"] = combineLatest;
// window["combineAll"] = combineAll;
// window["debounce"] = debounce;
// window["debounceTime"] = debounceTime;
// window["zip"] = zip;
// window["zipAll"] = zipAll;
