import CoolText from "./components/ui/cool-text";
import { CopyButton } from "./components/ui/copy-button";
import { CopyProvider } from "./components/ui/copy-provider";

function App() {
	return (
		<div className="max-w-xl mx-auto my-12 rounded-lg border border-gray-200 p-8">
			<h1 className="text-2xl font-bold text-gray-900 mb-4">Custom Registry</h1>
			<p>Add your custom components here to preview them.</p>

			<CoolText>This is a custom component.</CoolText>
			<CopyProvider>
				<CopyButton text="This text will be copied to the clipboard.">
					Copy to clipboard gay sex
				</CopyButton>
				<CopyButton text="This text will be copied to the clipboard 2">
					Copy to clipboard
				</CopyButton>
			</CopyProvider>
		</div>
	);
}

export default App;
