import React, { useEffect, useState } from "react";
import { Anchor } from "@arco-design/web-react";
import "./TableOfContents.css";

const AnchorLink = Anchor.Link;

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  onHeadingsChange: (headings: Heading[]) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
  onHeadingsChange,
}) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    const updateHeadings = () => {
      const contentArea = document.querySelector(".main-content");
      if (!contentArea) return;

      const headingElements = contentArea.querySelectorAll("h1, h2, h3");
      const newHeadings: Heading[] = [];

      headingElements.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`;
        if (!heading.id) {
          heading.id = id;
        }

        newHeadings.push({
          id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.substring(1)),
        });

        observer.observe(heading);
      });

      onHeadingsChange(newHeadings);
    };

    // 延迟执行以确保 DOM 已更新
    setTimeout(updateHeadings, 100);

    return () => {
      observer.disconnect();
    };
  }, [onHeadingsChange]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="toc-container">
      <div className="toc-title">目录</div>
      <Anchor
        affix={false}
        onChange={setActiveId}
        getCurrentAnchor={() => activeId}
      >
        {headings.map((heading) => (
          <AnchorLink
            key={heading.id}
            href={`#${heading.id}`}
            title={heading.text}
            className={`toc-link level-${heading.level}`}
          />
        ))}
      </Anchor>
    </div>
  );
};

export default TableOfContents;
