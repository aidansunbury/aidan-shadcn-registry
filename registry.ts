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
	{
		name: "install-block",
		type: "registry:ui",
		description:
			"A block for installing dependencies or registry components with a variety of package managers.",

		// shadcn-ui components that this component depends on
		registryDependencies: ["button", "dropdown-menu"],

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
		files: ["install-block.tsx"],
	},
];
export default registry;
