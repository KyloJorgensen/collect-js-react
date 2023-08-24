import React from 'react';
import { ICollectFormProps } from './types/Form';
export declare function VGSCollectForm(props: ICollectFormProps): JSX.Element;
export declare namespace VGSCollectForm {
    var TextField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectTextField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var CardNumberField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectCardNumberField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var CardExpirationDateField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectCardExpirationField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var CardSecurityCodeField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectCardCVCField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var PasswordField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectPasswordField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var SSNField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectSSNField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var ZipCodeField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectZipCodeField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var TextareaField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectTextareaField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var NumberField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectNumberField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var FileField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectFileField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
    var DateField: React.MemoExoticComponent<(props: Partial<import("./types/Form").IVGSCollectDateField & {
        className: string;
        onFocus: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onBlur: (info: import("./types/Field").VGSCollectFocusEventData<"focus" | "blur">) => void;
        onUpdate: (state: import("./types/Form").VGSCollectStateParams) => void;
        onDelete: () => void;
        onKeyUp: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyDown: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
        onKeyPress: (info: import("./types/Field").VGSCollectKeyboardEventData<"keydown" | "keypress" | "keyup">) => void;
    }>) => JSX.Element>;
}
