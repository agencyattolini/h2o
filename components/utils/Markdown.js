import ReactMarkdown from "react-markdown";

export default function Markdown({ children, ...props }) {
  return (
    <ReactMarkdown
      {...props}
      components={{
        a(props) {
          // eslint-disable-next-line no-unused-vars
          const { node, href, ...rest } = props;
          return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a
              href={href === "" ? `tel:${props.children}` : href}
              target="_blank"
              {...rest}
            />
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
