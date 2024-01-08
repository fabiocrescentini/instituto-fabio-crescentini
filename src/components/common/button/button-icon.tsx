interface RoundIconProps {
  icon: React.ElementType
  size?: number
}
export function ButtonIcon({ size = 20, icon: Icon }: RoundIconProps) {
  return <Icon size={size} />
}
