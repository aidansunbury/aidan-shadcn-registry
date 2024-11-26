import { RegistryEntry } from "./scripts/schema";

const registry: RegistryEntry[] = [
	{
		name: "copy-button",
		type: "registry:ui",
		description:
			"A button that copies text to the clipboard, and globally indicates if its text is actively copied.",

		// shadcn-ui components that this component depends on
		registryDependencies: ["button"],

		// npm dependencies that this component depends on
		dependencies: ["@uidotdev/usehooks"],
		devDependencies: [],

		// Tailwind CSS config
		tailwind: {
			config: {},
		},

		// CSS variables
		cssVars: {},

		// Files that make up this component in your src/components/ui folder
		files: ["copy-button.tsx", "copy-provider.tsx"],
	},
];
export default registry;
