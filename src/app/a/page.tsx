import { timeout } from "@/util/timeout";
import { AComponent } from "./AComponent";
import { Suspense } from "react";

export default async function Page() {
    await timeout(1000);
    return (
        <div className="text-2xl flex flex-col h-full justify-center items-center bg-orange-500 flex-1">
            PAGE A
            <Suspense fallback={<div>Loading Component A</div>}>
                <AComponent />
            </Suspense>
        </div>
    );
}
