import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

interface OmnitrixLogoProps {
  size: number;
  color?: string; // The tintcolor (green usually)
  bgColor?: string; // The black/dark background part
}

export function OmnitrixLogo({ size, color = '#39FF14', bgColor = '#000000' }: OmnitrixLogoProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      {/* Outer green ring */}
      <Circle cx="50" cy="50" r="48" fill={bgColor} stroke={color} strokeWidth="4" />
      
      {/* Inner green part that makes up the hourglass sides */}
      <Circle cx="50" cy="50" r="38" fill={color} />
      
      {/* Black hourglass top and bottom wedges */}
      <Path
        d="M 17,25 L 50,50 L 83,25 C 70,10 30,10 17,25 Z"
        fill={bgColor}
      />
      <Path
        d="M 17,75 L 50,50 L 83,75 C 70,90 30,90 17,75 Z"
        fill={bgColor}
      />
      
      {/* Small green outline separating wedges if needed, but classic is flush */}
      {/* The classic logo is precisely this: Green circle with two black wedges overlapping it. */}
    </Svg>
  );
}
