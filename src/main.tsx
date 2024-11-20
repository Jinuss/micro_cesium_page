import { createRoot, Root } from "react-dom/client";
import "./index.css";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.tsx";

let root: Root | null = null;

function render(props: QiankunProps) {
  const { container } = props;
  console.log("🚀 ~ render ~ container:", container)
  const node = container
    ? container.querySelector("#root")
    : document.getElementById("root");
    console.log("🚀 ~ render ~ node:", node)
  root = createRoot(node!);
  root.render(<App />);
  return root;
}

renderWithQiankun({
  mount(props: any) {
    root = render(props);
  },
  bootstrap() {},
  unmount(props: any) {
    root?.unmount();
  },
  update(props: any) {
    console.log(props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  root = render({});
}
