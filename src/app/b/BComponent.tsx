import { timeout } from "@/util/timeout";

export async function BComponent() {
    await timeout(1000);

    return <div className="text-2xl p-4">B COMPONENT</div>;
}
