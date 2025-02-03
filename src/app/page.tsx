import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-auto">
      <Image
        aria-hidden
        src="/crazyalpaca_homepage.png"
        alt="main image"
        width={0} // width와 height를 0으로 설정하고
        height={0}
        sizes="100vw" // 화면 너비에 맞춤
        className="w-full h-auto max-w-none" // 비율 유지하면서 가로 꽉 채움
      />
    </div>
  );
}
