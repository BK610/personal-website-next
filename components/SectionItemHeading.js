function SectionItemHeading(props) {
  console.log("Props:")
  console.log(props)
  console.log(props.className)
  return (
    <div className={`${props.className} text-lg font-serif`}>
      <h2>{props.children}</h2>
    </div>
  );
}

export default SectionItemHeading;