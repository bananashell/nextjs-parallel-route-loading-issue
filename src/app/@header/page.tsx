import { timeout } from "@/util/timeout";

export default async function HeaderSlot() {
    console.log("[header] loading");
    const start = performance.now();
    await timeout(5000);
    const end = performance.now();
    console.log("[header] loaded in", end - start, "ms");

    return (
        <div className="w-full p-4 min-h-40 text-center bg-blue-600 flex flex-col gap-1 items-center justify-center">
            <div>THIS IS A HEADER SLOT</div>
            <div>{new Date().toISOString()}</div>
        </div>
    );
}
