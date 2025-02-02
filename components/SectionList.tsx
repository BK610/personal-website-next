interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function SectionList({
  className,
  children,
}: Props): React.ReactElement {
  return <div className={`gap-4 ${className}`}>{children}</div>;
}
