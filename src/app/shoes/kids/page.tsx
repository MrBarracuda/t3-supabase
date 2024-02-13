import Link from "next/link";


export default function Kids() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    This page is for <span className="text-[hsl(280,100%,70%)]">Kids</span> shoes
                </h1>
                <div className="flex flex-col items-center gap-2">
                    <Link
                        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
                        href="/"
                    >
                        <h3 className="text-2xl font-bold">Back to Home</h3>
                    </Link>
                </div>
            </div>
        </main>
    );
}
