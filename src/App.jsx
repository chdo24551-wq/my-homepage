import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useState } from "react";

async function fetchVerse(name){
    const url = '${name}.txt';
    const response = await fetch(url);
    return response.text();
}

export default function App(){
    const [content, setContent] = useState("");
    return (
        <>
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
        <div id = '5'>
            <form>
                <h1>アップルパイ診断</h1>
                <label htmlFor="verse-choose">アップルパイに一番似合うのは何だと思いますか？</label>
                <select id = "verser-choose"
                onChange={async (event) => {
                    const selectedValue = event.target.value;
                    const newContent = await fetchVerse(selectedValue);
                    setContent(newContent);
                    if(selectedValue == "verse1"){
                        alert("イチ押しです！")
                    } else if(selectedValue == "verse2"){
                        alert("甘くて美味しい、定番の味ですよね！")
                    } else if(selectedValue == "verse3"){
                        alert("癖になる甘さ！")
                    } else if(selectedValue == "verse4"){
                        alert("渋い！でもどんな味か気になりますね！")
                    } else {
                        alert("お主、さては異端児だな？")
                    }
                }}>
                    <option value = "verse1">カスタードクリーム</option>
                    <option value = "verse2">ホイップクリーム</option>
                    <option value = "verse3">メープルシロップ</option>
                    <option value = "verse4">こしあん</option>
                    <option value = "verse5">コーヒーゼリー</option>
                </select>
                </form>
            </div>
        <h4>日本大学文理学部情報科学科 Webプログラミングの演習課題</h4>
        <h4>キム・ドンヒョン 5423551</h4>
        </>
    );
}