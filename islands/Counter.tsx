/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";
import { useRedacState } from "redac/preact.ts"

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const count = useRedacState(props.start);
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{count.current}</p>
      <Button onClick={() => count.current-=1}>-1</Button>
      <Button onClick={() => count.current++}>+1</Button>
    </div>
  );
}
