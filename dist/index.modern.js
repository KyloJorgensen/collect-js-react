import React, { createContext, useReducer, useMemo, useContext, useEffect } from 'react';

var form = {};
var setFormInstance = function setFormInstance(newVal) {
  form = newVal;
};
var getFormInstance = function getFormInstance() {
  return form;
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var initialState = undefined;
var GlobalSubmitContext = /*#__PURE__*/createContext(initialState);
var DispatchSubmitContext = /*#__PURE__*/createContext({});
var GlobalStateContext = /*#__PURE__*/createContext(initialState);
var DispatchStateContext = /*#__PURE__*/createContext({});
var GlobalStateProvider = function GlobalStateProvider(_ref) {
  var children = _ref.children;
  var _useReducer = useReducer(function (_state, newValue) {
      return newValue ? _extends({}, newValue) : initialState;
    }, initialState),
    state = _useReducer[0],
    dispatch = _useReducer[1];
  var _useReducer2 = useReducer(function (_state, newValue) {
      return newValue ? _extends({}, newValue) : initialState;
    }, initialState),
    response = _useReducer2[0],
    dispatchSubmit = _useReducer2[1];
  var memoState = useMemo(function () {
    return state;
  }, [state]);
  var memoResponse = useMemo(function () {
    return response;
  }, [response]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GlobalStateContext.Provider, {
    value: memoState
  }, /*#__PURE__*/React.createElement(DispatchStateContext.Provider, {
    value: dispatch
  }, /*#__PURE__*/React.createElement(GlobalSubmitContext.Provider, {
    value: memoResponse
  }, /*#__PURE__*/React.createElement(DispatchSubmitContext.Provider, {
    value: dispatchSubmit
  }, children)))));
};
var useVGSCollectState = function useVGSCollectState() {
  return [useContext(GlobalStateContext)];
};
var useVGSCollectResponse = function useVGSCollectResponse() {
  return [useContext(GlobalSubmitContext)];
};
var VGSCollectProvider = function VGSCollectProvider(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(GlobalStateProvider, null, children);
};

var FIELD_EVENTS = {
  onFocus: 'focus',
  onBlur: 'blur',
  onUpdate: 'update',
  onDelete: 'delete',
  onKeyUp: 'keyup',
  onKeyDown: 'keydown',
  onKeyPress: 'keypress'
};
var DEFAULT_CONFIG = {
  TEXT: {
    type: 'text',
    placeholder: 'Cardholder Name'
  },
  CARD_NUMBER: {
    type: 'card-number',
    placeholder: 'Credit Card Number'
  },
  CARD_EXPIRATION_DATE: {
    type: 'card-expiration-date',
    placeholder: 'Card Expiration Date'
  },
  CARD_SECURITY_CODE: {
    type: 'card-security-code',
    placeholder: 'CVC/CVV'
  },
  PASSWORD: {
    type: 'password',
    placeholder: 'Enter password'
  },
  SSN: {
    type: 'ssn',
    placeholder: 'SSN'
  },
  ZIP_CODE: {
    type: 'zip-code',
    placeholder: 'Zip Code'
  },
  TEXTAREA: {
    type: 'textarea',
    placeholder: 'Comment'
  },
  NUMBER: {
    type: 'number',
    placeholder: 'Number'
  },
  FILE: {
    type: 'file',
    placeholder: ''
  },
  DATE: {
    type: 'date',
    placeholder: ''
  }
};

var _excluded = ["className", "onFocus", "onBlur", "onUpdate", "onDelete", "onKeyPress", "onKeyUp", "onKeyDown"];
function RenderField(props) {
  var className = props.className,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onUpdate = props.onUpdate,
    onDelete = props.onDelete,
    onKeyPress = props.onKeyPress,
    onKeyUp = props.onKeyUp,
    onKeyDown = props.onKeyDown,
    fieldProps = _objectWithoutPropertiesLoose(props, _excluded);
  if (!props.name) {
    throw new Error("@vgs/collect-js-react: name attribute for " + props.type + " is required.");
  }
  var _React$useState = React.useState(function () {
      return "vgs-" + window.crypto.randomUUID();
    }),
    fieldId = _React$useState[0];
  var events = {
    onFocus: onFocus,
    onBlur: onBlur,
    onUpdate: onUpdate,
    onKeyUp: onKeyUp,
    onKeyDown: onKeyDown,
    onKeyPress: onKeyPress,
    onDelete: onDelete
  };
  var eventsToListen = Object.keys(events).filter(function (e) {
    return events[e] !== undefined;
  });
  useEffect(function () {
    var collectFormInstance = getFormInstance();
    if (Object.keys(collectFormInstance).length !== 0) {
      var secureField = collectFormInstance.field("#" + fieldId, fieldProps);
      eventsToListen.forEach(function (event) {
        secureField.on(FIELD_EVENTS[event], function (info) {
          events[event](info);
        });
      });
      return function () {
        try {
          var _secureField$delete;
          secureField === null || secureField === void 0 ? void 0 : (_secureField$delete = secureField["delete"]) === null || _secureField$delete === void 0 ? void 0 : _secureField$delete.call(secureField);
        } catch (error) {
          if (!(error instanceof Error) || error instanceof Error && error.message !== "The field '" + (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.name) + "' is already deleted") {
            throw error;
          }
        }
        eventsToListen.forEach(function (event) {
          secureField.off(FIELD_EVENTS[event], function (info) {
            events[event](info);
          });
        });
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "vgs-collect-iframe-wr " + (className ? className : ''),
    id: fieldId,
    "data-testid": "vgs-collect-field-wrapper"
  });
}
var TextField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.TEXT), props)));
});
var CardNumberField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.CARD_NUMBER), props)));
});
var CardExpirationDateField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.CARD_EXPIRATION_DATE), props)));
});
var CardSecurityCodeField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.CARD_SECURITY_CODE), props)));
});
var PasswordField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.PASSWORD), props)));
});
var SSNField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.SSN), props)));
});
var ZipCodeField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.ZIP_CODE), props)));
});
var TextareaField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.TEXTAREA), props)));
});
var NumberField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.NUMBER), props)));
});
var DateField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.DATE), props)));
});
var FileField = /*#__PURE__*/React.memo(function (props) {
  return /*#__PURE__*/React.createElement(RenderField, Object.assign({}, Object.assign(_extends({}, DEFAULT_CONFIG.FILE), props)));
});

var isBrowser = typeof window !== 'undefined';
function VGSCollectForm(props) {
  var vaultId = props.vaultId,
    _props$environment = props.environment,
    environment = _props$environment === void 0 ? 'sandbox' : _props$environment,
    _props$action = props.action,
    action = _props$action === void 0 ? '/' : _props$action,
    cname = props.cname,
    submitParameters = props.submitParameters,
    _props$tokenizationAP = props.tokenizationAPI,
    tokenizationAPI = _props$tokenizationAP === void 0 ? false : _props$tokenizationAP,
    onUpdateCallback = props.onUpdateCallback,
    onSubmitCallback = props.onSubmitCallback,
    onErrorCalback = props.onErrorCalback,
    children = props.children;
  if (!vaultId) {
    throw new Error("@vgs/collect-js-react: vaultId is required.");
  }
  var dispatchFormStateUpdate = useContext(DispatchStateContext);
  var dispatchResponseUpdate = useContext(DispatchSubmitContext);
  var isProviderExists = typeof dispatchResponseUpdate === 'function' && typeof dispatchResponseUpdate === 'function';
  if (isBrowser && window.VGSCollect && Object.keys(getFormInstance()).length === 0) {
    var form = window.VGSCollect.create(vaultId, environment, function (state) {
      if (onUpdateCallback) {
        onUpdateCallback(state);
      }
      isProviderExists && dispatchFormStateUpdate(state);
    });
    if (cname) {
      form.useCname(cname);
    }
    setFormInstance(form);
  }
  useEffect(function () {
    return function () {
      var activeForm = getFormInstance();
      if (Object.keys(activeForm).length !== 0) {
        activeForm.unmount();
        setFormInstance({});
      }
      if (isProviderExists) {
        dispatchFormStateUpdate(null);
        dispatchResponseUpdate(null);
      }
    };
  }, []);
  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    var form = getFormInstance();
    if (!form) {
      throw new Error('@vgs/collect-js-react: VGS Collect form not found.');
    }
    if (tokenizationAPI) {
      form.tokenize(function (status, resp) {
        if (onSubmitCallback) {
          onSubmitCallback(status, resp);
        }
      }, function (errors) {
        if (onErrorCalback) {
          onErrorCalback(errors);
        }
      });
    } else {
      form.submit(action, submitParameters, function (status, data) {
        if (onSubmitCallback) {
          onSubmitCallback(status, data);
        }
        dispatchResponseUpdate({
          status: status,
          data: data
        });
      }, function (errors) {
        if (onErrorCalback) {
          onErrorCalback(errors);
        }
      });
    }
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(event) {
      submitHandler(event);
    }
  }, children);
}
VGSCollectForm.TextField = TextField;
VGSCollectForm.CardNumberField = CardNumberField;
VGSCollectForm.CardExpirationDateField = CardExpirationDateField;
VGSCollectForm.CardSecurityCodeField = CardSecurityCodeField;
VGSCollectForm.PasswordField = PasswordField;
VGSCollectForm.SSNField = SSNField;
VGSCollectForm.ZipCodeField = ZipCodeField;
VGSCollectForm.TextareaField = TextareaField;
VGSCollectForm.NumberField = NumberField;
VGSCollectForm.FileField = FileField;
VGSCollectForm.DateField = DateField;

var HttpStatusCode;
(function (HttpStatusCode) {
  HttpStatusCode[HttpStatusCode["CONTINUE"] = 100] = "CONTINUE";
  HttpStatusCode[HttpStatusCode["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
  HttpStatusCode[HttpStatusCode["PROCESSING"] = 102] = "PROCESSING";
  HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
  HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
  HttpStatusCode[HttpStatusCode["ACCEPTED"] = 202] = "ACCEPTED";
  HttpStatusCode[HttpStatusCode["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
  HttpStatusCode[HttpStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
  HttpStatusCode[HttpStatusCode["RESET_CONTENT"] = 205] = "RESET_CONTENT";
  HttpStatusCode[HttpStatusCode["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
  HttpStatusCode[HttpStatusCode["MULTI_STATUS"] = 207] = "MULTI_STATUS";
  HttpStatusCode[HttpStatusCode["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
  HttpStatusCode[HttpStatusCode["IM_USED"] = 226] = "IM_USED";
  HttpStatusCode[HttpStatusCode["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
  HttpStatusCode[HttpStatusCode["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
  HttpStatusCode[HttpStatusCode["FOUND"] = 302] = "FOUND";
  HttpStatusCode[HttpStatusCode["SEE_OTHER"] = 303] = "SEE_OTHER";
  HttpStatusCode[HttpStatusCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
  HttpStatusCode[HttpStatusCode["USE_PROXY"] = 305] = "USE_PROXY";
  HttpStatusCode[HttpStatusCode["SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
  HttpStatusCode[HttpStatusCode["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
  HttpStatusCode[HttpStatusCode["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
  HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HttpStatusCode[HttpStatusCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
  HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
  HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
  HttpStatusCode[HttpStatusCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  HttpStatusCode[HttpStatusCode["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
  HttpStatusCode[HttpStatusCode["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
  HttpStatusCode[HttpStatusCode["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
  HttpStatusCode[HttpStatusCode["CONFLICT"] = 409] = "CONFLICT";
  HttpStatusCode[HttpStatusCode["GONE"] = 410] = "GONE";
  HttpStatusCode[HttpStatusCode["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
  HttpStatusCode[HttpStatusCode["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
  HttpStatusCode[HttpStatusCode["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
  HttpStatusCode[HttpStatusCode["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
  HttpStatusCode[HttpStatusCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
  HttpStatusCode[HttpStatusCode["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
  HttpStatusCode[HttpStatusCode["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
  HttpStatusCode[HttpStatusCode["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
  HttpStatusCode[HttpStatusCode["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
  HttpStatusCode[HttpStatusCode["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
  HttpStatusCode[HttpStatusCode["LOCKED"] = 423] = "LOCKED";
  HttpStatusCode[HttpStatusCode["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
  HttpStatusCode[HttpStatusCode["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
  HttpStatusCode[HttpStatusCode["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
  HttpStatusCode[HttpStatusCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
  HttpStatusCode[HttpStatusCode["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
  HttpStatusCode[HttpStatusCode["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
  HttpStatusCode[HttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  HttpStatusCode[HttpStatusCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
  HttpStatusCode[HttpStatusCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  HttpStatusCode[HttpStatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  HttpStatusCode[HttpStatusCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  HttpStatusCode[HttpStatusCode["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
  HttpStatusCode[HttpStatusCode["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
  HttpStatusCode[HttpStatusCode["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
  HttpStatusCode[HttpStatusCode["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
  HttpStatusCode[HttpStatusCode["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
  HttpStatusCode[HttpStatusCode["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
  HttpStatusCode["NETWORK_ERROR"] = "Network Error";
})(HttpStatusCode || (HttpStatusCode = {}));

export { DispatchStateContext, DispatchSubmitContext, GlobalStateContext, GlobalStateProvider, GlobalSubmitContext, VGSCollectForm, VGSCollectProvider, initialState, useVGSCollectResponse, useVGSCollectState };
//# sourceMappingURL=index.modern.js.map
