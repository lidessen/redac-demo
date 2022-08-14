/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";
import { useRedac } from "redac/preact.ts"
import { redac } from "redac/mod.ts";

const state = redac({
  count: 0,
  add(n: number) {
    this.count+=n
  }
})

export default function Counter() {
  useRedac(state);
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{state.count}</p>
      <Button onClick={() => state.add(-1)}>-1</Button>
      <Button onClick={() => state.add(1)}>+1</Button>
    </div>
  );
}
