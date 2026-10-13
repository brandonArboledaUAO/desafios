export default function MenuItem({ node, selected, onSelect }) {
  const handleClick = (e) => {
    e.preventDefault();
    onSelect(node);
  };

  return (
    <li>
      <a
        className={`nav-item ${selected.link === node.link ? "active" : ""}`}
        href={node.link}
        onClick={handleClick}
      >
        {node.title}
      </a>

      {node.children.length > 0 && (
        <ul>
          {node.children.map((child) => (
            <MenuItem
              key={child.link}
              node={child}
              selected={selected}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </li>
  );
}