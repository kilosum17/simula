import React, { useCallback } from "@rbxts/react";

import { Layer } from "./layer";
import { PetCatalog } from "shared/help/pet_catalog";
import { InvFrame } from "shared/ui/inv/InvFrame";
import { LeftButtons } from "shared/ui/LeftButtons";

export function App() {
	const pets = PetCatalog

	const onClose = useCallback(() => {
		warn("CLOSe inv")
	}, [])

	return (
		<Layer>
			{/* <Counter /> */}
			{/* <MainUi /> */}
			<LeftButtons />
			<InvFrame />
		</Layer>
	);
}
