import React, { memo, useCallback, useEffect } from "react";
import { useGlobals, useStorybookApi } from "@storybook/manager-api";
import { Icons, IconButton } from "@storybook/components";
import { ADDON_ID, PARAM_KEY, TOOL_ID } from "./constants";

export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();

  const isActive = [true, "true"].includes(globals[PARAM_KEY]);

  const toggleMyTool = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive,
    });
  }, [isActive]);

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: "Toggle Measure [O]",
      defaultShortcut: ["O"],
      actionName: "outline",
      showInMenu: false,
      action: toggleMyTool,
    });
  }, [toggleMyTool, api]);

  return (
    <IconButton
      key={TOOL_ID}
      active={isActive}
      title="Toggle body padding"
      onClick={toggleMyTool}
    >
      {/* https://iconbuddy.app/vaadin/padding */}
      <svg width="512" height="512" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
        <path style={{fill: 'currentColor'}} fill-rule="evenodd" d="M2.857 2h9.286c.473 0 .857.384.857.857v9.286a.857.857 0 0 1-.857.857H2.857A.857.857 0 0 1 2 12.143V2.857C2 2.384 2.384 2 2.857 2ZM1 2.857C1 1.831 1.831 1 2.857 1h9.286C13.168 1 14 1.831 14 2.857v9.286A1.857 1.857 0 0 1 12.143 14H2.857A1.857 1.857 0 0 1 1 12.143V2.857ZM7.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-3 6a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM5 7.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM4.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm6.5 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM10.5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm.5-3.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM7.5 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z" clip-rule="evenodd"/>
      </svg>
    </IconButton>
  );
});
