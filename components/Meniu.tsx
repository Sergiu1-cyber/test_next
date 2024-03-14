import Link from "next/link";

export default function Meniu() {
    return (
        <div className="absolute w-1/2 bg-green-400 flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/operatii_efectuate">Operatii</Link>
            <Link href="/redactez_obtiuni">Redactez</Link>
        </div>
    );
}

