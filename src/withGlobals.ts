import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";
import { useEffect, useGlobals } from "@storybook/preview-api";
import { PARAM_KEY } from "./constants";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
) => {
  const [globals] = useGlobals();
  const isEnabled = globals[PARAM_KEY];

  useEffect(() => {
    if (isEnabled) {
      document.body.style.setProperty('padding', '0');
    } else {
      document.body.style.removeProperty('padding');
    }
  }, [isEnabled]);

  return StoryFn();
};

