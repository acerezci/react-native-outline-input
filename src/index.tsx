import React, {
  memo, useRef, useState, useCallback,
} from 'react';
import {
  Animated,
  Easing,
  EasingFunction,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
  
type secureTextEntryType = true | false;
type autoCapitalizeType = 'characters' | 'words' | 'sentences' | 'none';
  
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
  activeValueColor?:string;
  passiveValueColor?:string;
  activeLabelColor?: string;
  passiveLabelColor?: string;
  activeBorderColor?: string;
  passiveBorderColor?: string;
  fontFamily?: string;
}
  
interface CommonAnimatedPropsTypes {
  duration: number;
  useNativeDriver: boolean;
  easing: EasingFunction;
}
  
interface LabelStylePropTypes {
  isFocused: boolean;
  initialTopValue: number;
  activeLabelColor: string;
  passiveLabelColor: string;
}
  
interface InputStyleProps {
  padding: number;
  height: number;
  fontSize: number;
  isFocused: boolean;
  activeBorderColor: string;
  passiveBorderColor: string;
  activeValueColor:string;
  passiveValueColor:string;
}
  
const OutlineInput = ({
  label,
  onChangeText,
  value,
  secureTextEntry = false,
  autoCapitalize = 'none',
  fontSize = 16,
  height = 56,
  duration = 300,
  easing = Easing.inOut(Easing.ease),
  activeValueColor = '#51AD56',
  passiveValueColor = '#757575',
  activeLabelColor = '#51AD56',
  passiveLabelColor = '#757575',
  activeBorderColor = '#51AD56',
  passiveBorderColor = '#EFEFEF',
  fontFamily = 'System',
}: PropTypes) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const lineHeightValue: number = fontSize + 2;
  const initialTopValue: number = (height - lineHeightValue) / 2;
  const labelPositionEmptyValue: number = 0;
  const inputValueFontSize: number = fontSize;
  const padding: number = 8;
  const labelPositionFillValue: number = lineHeightValue / 2 + initialTopValue;
  const inputHeight: number = height;
  
  const labelPositionRef = useRef(
    new Animated.Value(
      value ? labelPositionFillValue : labelPositionEmptyValue,
    ),
  ).current;
  const fontSizeRef = useRef(
    new Animated.Value(value ? fontSize - 2 : fontSize),
  ).current;
  const lineHeightRef = useRef(
    new Animated.Value(value ? lineHeightValue - 2 : lineHeightValue),
  ).current;
  const zIndexRef = useRef(new Animated.Value(value ? 2 : -1)).current;

  const commonAnimatedProps: CommonAnimatedPropsTypes = {
    duration,
    useNativeDriver: false,
    easing,
  };

  const onBlur: () => void = useCallback(() => {
    setIsFocused(false);
    if (!value) {
      Animated.parallel([
        Animated.timing(labelPositionRef, {
          toValue: labelPositionEmptyValue,
          ...commonAnimatedProps,
        }),
        Animated.timing(fontSizeRef, {
          toValue: fontSize,
          ...commonAnimatedProps,
        }),
        Animated.timing(lineHeightRef, {
          toValue: lineHeightValue,
          ...commonAnimatedProps,
        }),
        Animated.timing(zIndexRef, {
          toValue: -1,
          ...commonAnimatedProps,
        }),
      ]).start();
    }
  }, [!!value]);

  const onFocus: () => void = useCallback(() => {
    setIsFocused(true);
    Animated.parallel([
      Animated.timing(labelPositionRef, {
        toValue: labelPositionFillValue,
        ...commonAnimatedProps,
      }),
      Animated.timing(fontSizeRef, {
        toValue: fontSize - 2,
        ...commonAnimatedProps,
      }),
      Animated.timing(lineHeightRef, {
        toValue: lineHeightValue - 2,
        ...commonAnimatedProps,
      }),
      Animated.timing(zIndexRef, {
        toValue: 2,
        ...commonAnimatedProps,
      }),
    ]).start();
  }, [!!value]);

  const animatedViewProps = {
    style: {
      position: 'absolute',
      bottom: labelPositionRef,
      left: 10,
      zIndex: zIndexRef,
      height,
    },
  };

  const animatedTextProps = {
    style: [
      LabelStyle({
        isFocused,
        initialTopValue,
        activeLabelColor,
        passiveLabelColor,
      }),
      { fontSize: fontSizeRef, lineHeight: lineHeightRef, fontFamily },
    ],
  };

  const inputProps = {
    secureTextEntry,
    value,
    onChangeText,
    onFocus,
    onBlur,
    autoCapitalize,
    isFocused,
    height: inputHeight,
    padding,
    fontSize: inputValueFontSize,
    activeBorderColor,
    passiveBorderColor,
    style: [
      { fontFamily },
      InputStyle({
        padding,
        height,
        fontSize,
        isFocused,
        activeBorderColor,
        passiveBorderColor,
        activeValueColor,
        passiveValueColor,
      }),
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View {...animatedViewProps}>
        <Animated.Text {...animatedTextProps}>{label}</Animated.Text>
        </Animated.View>
      <TextInput {...inputProps} />
    </View>
  );
};

const LabelStyle = ({
  isFocused,
  initialTopValue,
  activeLabelColor,
  passiveLabelColor,
}: LabelStylePropTypes) => ({
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: isFocused ? activeLabelColor : passiveLabelColor,
  backgroundColor: '#FFFFFF',
  paddingRight: 5,
  paddingLeft: 5,
  top: initialTopValue,
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginRight: 5,
    backgroundColor: '#ffffff',
  },
});

const InputStyle = ({
  padding,
  height,
  fontSize,
  isFocused,
  activeBorderColor,
  passiveBorderColor,
  activeValueColor,
  passiveValueColor,
}: InputStyleProps) => ({
  padding,
  height,
  fontSize,
  borderWidth: 1,
  borderColor: isFocused ? activeBorderColor : passiveBorderColor,
  borderRadius: 6,
  color: isFocused ? activeValueColor : passiveValueColor,
});

export default memo(OutlineInput);
