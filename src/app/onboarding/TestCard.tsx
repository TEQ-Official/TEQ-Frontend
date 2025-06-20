// components/TestCard.tsx
type TestCardProps = {
    title: string;
    description: string;
    selected: boolean;
    onClick: () => void;
};

export default function TestCard({ title, description, selected, onClick }: TestCardProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full h-40 text-left p-4 rounded-md transition shadow-[#c3ccd7] shadow-sm border border-[#c3ccd7] flex flex-col justify-between ${selected ? 'bg-[#f1f5f9]' : 'bg-white'}`}
        >
            <span className="flex justify-between items-center">
                <h3 className="font-semibold text-sm uppercase">{title}</h3>
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? 'border-[#0047AB]' : 'border-gray-300'}`}>{selected && <span className="w-2.5 h-2.5 bg-[#0047AB] rounded-full" />}</span>
            </span>
            <p className="text-gray-600">{description}</p>
        </button>
    );
}
