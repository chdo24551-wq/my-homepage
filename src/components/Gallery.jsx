import Image from "./Image";

export default function Gallery(){
    return (
        <div className="columns is-vcentered is-multiline">
            <div classname="column is-3">
                <Image />
            </div>
        </div>
    );
}