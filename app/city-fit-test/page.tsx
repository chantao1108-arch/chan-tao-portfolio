import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "有些城市真的在耗命｜城市适配度测试",
  description: "28 题城市偏好 × 人格结构娱乐自测。",
};

export default function CityFitTestPage() {
  return (
    <iframe
      src="/city-fit-test/index.html"
      title="城市适配度测试"
      style={{ width: "100%", height: "100dvh", border: 0, display: "block", background: "#090a0f" }}
    />
  );
}
