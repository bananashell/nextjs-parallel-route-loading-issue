import { timeout } from "@/util/timeout";

export async function AComponent() {
    await timeout(1000);

    return <div className="text-2xl p-4">A COMPONENT</div>;
}
