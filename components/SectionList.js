const SectionList = (props) => {
  return (
    <div className={`item-list gap-4 ${props.className}`}>{props.children}</div>
  );
};

export default SectionList;
