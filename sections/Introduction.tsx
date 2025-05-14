import Tag from "@/components/Tag";

const text = `A energia solar, além de economizar na conta de luz, se tornou o melhor e mais rentavel investimento do momento.`;

export default function Introduction() {
    return (
        <section className="max-w-6xl mx-auto flex items-center justify-center h-full py-28 px-4 lg:py-48">
            <div className="container">
                <div className="text-2xl md:text-4xl lg:text-5xl text-center font-medium mt-10">
                    <span className="text-white">Tudo que é bom pode melhorar ainda mais.</span> {" "}
                    <span className="text-white/45">{text}</span>{" "}
                    <span className="text-orange-400">
                        Invista em energia solar e obtenha retornos acima de 20% ao ano com baixo risco!
                    </span>
                </div>
            </div>
        </section>
    );
}
