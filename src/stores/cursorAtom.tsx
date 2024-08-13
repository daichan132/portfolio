import { atom } from "jotai";

interface CursorState {
	cursorVariant: string;
}

export const cursorAtom = atom<CursorState>({
	cursorVariant: "default",
});
