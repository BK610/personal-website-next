function SectionItemHeading(props) {
  return (
    <div className={`${props.className} text-lg font-serif`}>
      <h2>{props.children}</h2>
    </div>
  );
}

export default SectionItemHeading;
