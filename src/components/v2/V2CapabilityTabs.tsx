"use client";

import { useState } from "react";
import type { CapabilityGroup } from "@/content/home";

export function V2CapabilityTabs({ groups }: { groups: CapabilityGroup[] }) {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <div className="cap-tabs-wrap">
      <div className="cap-tab-list" role="tablist">
        {groups.map((g, i) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`cap-tab${i === active ? " cap-tab-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {g.title}
          </button>
        ))}
      </div>
      <div className="cap-panel fi vis" id={group.id}>
        <p className="cap-panel-intro">{group.intro}</p>
        <div className="cap-grid">
          {group.items.map((item) => (
            <div key={item.title} className="cap-item">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
