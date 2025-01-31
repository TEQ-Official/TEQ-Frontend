import Image from "next/image";

function PageDoodles({
    doodles,
}: {
    doodles: { src: string; position: string }[];
}) {
    return (
        <div className="absolute inset-0 -z-50 pointer-events-none">
            {doodles?.map((doodle, index) => (
                <Image
                    key={index}
                    src={doodle.src}
                    alt=""
                    loading="lazy"
                    className={`absolute ${doodle.position}`}
                />
            ))}
        </div>
    );
}

export default PageDoodles;
