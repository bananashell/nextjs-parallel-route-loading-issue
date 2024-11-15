import { timeout } from "@/util/timeout";
import { BComponent } from "./BComponent";
import { Suspense } from "react";

export default async function Page() {
    await timeout(1000);
    return (
        <div className="text-2xl flex flex-col h-full justify-center items-center bg-teal-800 flex-1">
            PAGE B{" "}
            <Suspense fallback={<div>Loading</div>}>
                <BComponent />
            </Suspense>
        </div>
    );
}
