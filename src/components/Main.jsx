import Gallery from "./Gallery";

export default function Main(){
    return (
        <main>
            <p>日本大学文理学部情報科学科 Webプログラミングの演習課題</p>
            <p>キム・ドンヒョン 5423551</p>
            <section className="section">
                <div className="container">
                    <Gallery />
                </div>
            </section>
        </main>
    );
}