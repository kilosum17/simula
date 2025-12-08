import React from "@rbxts/react";

import { Counter } from "./counter";
import { Layer } from "./layer";
import { MainUi } from "shared/ui/MainUI";
import { LeftButtons } from "shared/ui/LeftButtons";

export function App() {
	return (
		<Layer>
			{/* <Counter /> */}
			{/* <MainUi /> */}
			<LeftButtons />
		</Layer>
	);
}
