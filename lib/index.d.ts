import React from 'react';
import { EasingFunction } from 'react-native';
declare type secureTextEntryType = true | false;
declare type autoCapitalizeType = 'characters' | 'words' | 'sentences' | 'none';
interface PropTypes {
    label: string;
    onChangeText?: any;
    value?: string;
    secureTextEntry?: secureTextEntryType;
    autoCapitalize?: autoCapitalizeType;
    fontSize?: number;
    height?: number;
    duration?: number;
    easing?: EasingFunction;
    activeValueColor?: string;
    passiveValueColor?: string;
    activeLabelColor?: string;
    passiveLabelColor?: string;
    activeBorderColor?: string;
    passiveBorderColor?: string;
    fontFamily?: string;
}
declare const _default: React.MemoExoticComponent<({ label, onChangeText, value, secureTextEntry, autoCapitalize, fontSize, height, duration, easing, activeValueColor, passiveValueColor, activeLabelColor, passiveLabelColor, activeBorderColor, passiveBorderColor, fontFamily, }: PropTypes) => JSX.Element>;
export default _default;
