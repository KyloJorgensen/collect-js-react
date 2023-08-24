import React from 'react';
import { HttpStatusCode } from 'types/HttpStatusCode';
import { VGSCollectFormState } from './types/Form';
declare type GlobalStateContext = VGSCollectFormState | undefined;
declare type GlobalSubmitContext = {
    status: HttpStatusCode;
    data: any;
} | undefined;
export declare const initialState: undefined;
export declare const GlobalSubmitContext: React.Context<GlobalSubmitContext>;
export declare const DispatchSubmitContext: React.Context<React.Dispatch<any>>;
export declare const GlobalStateContext: React.Context<GlobalStateContext>;
export declare const DispatchStateContext: React.Context<React.Dispatch<any>>;
export declare const GlobalStateProvider: ({ children }: any) => JSX.Element;
export declare const useVGSCollectState: () => GlobalStateContext[];
export declare const useVGSCollectResponse: () => GlobalSubmitContext[];
export declare const VGSCollectProvider: ({ children }: any) => JSX.Element;
export {};
