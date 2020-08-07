"use strict";

const React = require('react');

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var OutlineInput = function (_a) {
    var label = _a.label, onChangeText = _a.onChangeText, value = _a.value, _b = _a.secureTextEntry, secureTextEntry = _b === void 0 ? false : _b, _c = _a.autoCapitalize, autoCapitalize = _c === void 0 ? 'none' : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 16 : _d, _e = _a.height, height = _e === void 0 ? 56 : _e, _f = _a.duration, duration = _f === void 0 ? 300 : _f, _g = _a.easing, easing = _g === void 0 ? react_native_1.Easing.inOut(react_native_1.Easing.ease) : _g, _h = _a.activeValueColor, activeValueColor = _h === void 0 ? '#51AD56' : _h, _j = _a.passiveValueColor, passiveValueColor = _j === void 0 ? '#757575' : _j, _k = _a.activeLabelColor, activeLabelColor = _k === void 0 ? '#51AD56' : _k, _l = _a.passiveLabelColor, passiveLabelColor = _l === void 0 ? '#757575' : _l, _m = _a.activeBorderColor, activeBorderColor = _m === void 0 ? '#51AD56' : _m, _o = _a.passiveBorderColor, passiveBorderColor = _o === void 0 ? '#EFEFEF' : _o, _p = _a.fontFamily, fontFamily = _p === void 0 ? 'System' : _p;
    var _q = react_1.useState(false), isFocused = _q[0], setIsFocused = _q[1];
    var lineHeightValue = fontSize + 2;
    var initialTopValue = (height - lineHeightValue) / 2;
    var labelPositionEmptyValue = 0;
    var inputValueFontSize = fontSize;
    var padding = 8;
    var labelPositionFillValue = lineHeightValue / 2 + initialTopValue;
    var inputHeight = height;
    var labelPositionRef = react_1.useRef(new react_native_1.Animated.Value(value ? labelPositionFillValue : labelPositionEmptyValue)).current;
    var fontSizeRef = react_1.useRef(new react_native_1.Animated.Value(value ? fontSize - 2 : fontSize)).current;
    var lineHeightRef = react_1.useRef(new react_native_1.Animated.Value(value ? lineHeightValue - 2 : lineHeightValue)).current;
    var zIndexRef = react_1.useRef(new react_native_1.Animated.Value(value ? 2 : -1)).current;
    var commonAnimatedProps = {
        duration: duration,
        useNativeDriver: false,
        easing: easing,
    };
    var onBlur = react_1.useCallback(function () {
        setIsFocused(false);
        if (!value) {
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(labelPositionRef, __assign({ toValue: labelPositionEmptyValue }, commonAnimatedProps)),
                react_native_1.Animated.timing(fontSizeRef, __assign({ toValue: fontSize }, commonAnimatedProps)),
                react_native_1.Animated.timing(lineHeightRef, __assign({ toValue: lineHeightValue }, commonAnimatedProps)),
                react_native_1.Animated.timing(zIndexRef, __assign({ toValue: -1 }, commonAnimatedProps)),
            ]).start();
        }
    }, [!!value]);
    var onFocus = react_1.useCallback(function () {
        setIsFocused(true);
        react_native_1.Animated.parallel([
            react_native_1.Animated.timing(labelPositionRef, __assign({ toValue: labelPositionFillValue }, commonAnimatedProps)),
            react_native_1.Animated.timing(fontSizeRef, __assign({ toValue: fontSize - 2 }, commonAnimatedProps)),
            react_native_1.Animated.timing(lineHeightRef, __assign({ toValue: lineHeightValue - 2 }, commonAnimatedProps)),
            react_native_1.Animated.timing(zIndexRef, __assign({ toValue: 2 }, commonAnimatedProps)),
        ]).start();
    }, [!!value]);
    var animatedViewProps = {
        style: {
            position: 'absolute',
            bottom: labelPositionRef,
            left: 10,
            zIndex: zIndexRef,
            height: height,
        },
    };
    var animatedTextProps = {
        style: [
            LabelStyle({
                isFocused: isFocused,
                initialTopValue: initialTopValue,
                activeLabelColor: activeLabelColor,
                passiveLabelColor: passiveLabelColor,
            }),
            { fontSize: fontSizeRef, lineHeight: lineHeightRef, fontFamily: fontFamily },
        ],
    };
    var inputProps = {
        secureTextEntry: secureTextEntry,
        value: value,
        onChangeText: onChangeText,
        onFocus: onFocus,
        onBlur: onBlur,
        autoCapitalize: autoCapitalize,
        isFocused: isFocused,
        height: inputHeight,
        padding: padding,
        fontSize: inputValueFontSize,
        activeBorderColor: activeBorderColor,
        passiveBorderColor: passiveBorderColor,
        style: [
            { fontFamily: fontFamily },
            InputStyle({
                padding: padding,
                height: height,
                fontSize: fontSize,
                isFocused: isFocused,
                activeBorderColor: activeBorderColor,
                passiveBorderColor: passiveBorderColor,
                activeValueColor: activeValueColor,
                passiveValueColor: passiveValueColor,
            }),
        ],
    };
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Animated.View {...animatedViewProps}>
        <react_native_1.Animated.Text {...animatedTextProps}>{label}</react_native_1.Animated.Text>
        </react_native_1.Animated.View>
      <react_native_1.TextInput {...inputProps}/>
    </react_native_1.View>);
};
var LabelStyle = function (_a) {
    var isFocused = _a.isFocused, initialTopValue = _a.initialTopValue, activeLabelColor = _a.activeLabelColor, passiveLabelColor = _a.passiveLabelColor;
    return ({
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: isFocused ? activeLabelColor : passiveLabelColor,
        backgroundColor: '#FFFFFF',
        paddingRight: 5,
        paddingLeft: 5,
        top: initialTopValue,
    });
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginRight: 5,
        backgroundColor: '#ffffff',
    },
});
var InputStyle = function (_a) {
    var padding = _a.padding, height = _a.height, fontSize = _a.fontSize, isFocused = _a.isFocused, activeBorderColor = _a.activeBorderColor, passiveBorderColor = _a.passiveBorderColor, activeValueColor = _a.activeValueColor, passiveValueColor = _a.passiveValueColor;
    return ({
        padding: padding,
        height: height,
        fontSize: fontSize,
        borderWidth: 1,
        borderColor: isFocused ? activeBorderColor : passiveBorderColor,
        borderRadius: 6,
        color: isFocused ? activeValueColor : passiveValueColor,
    });
};
exports.default = react_1.memo(OutlineInput);
