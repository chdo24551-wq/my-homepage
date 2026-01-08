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
                    alert("甘くて美味しいですよね！")
                } else if(selectedValue == "verse3"){
                    alert("それもありですね！")
                } else {
                    alert("渋い！でも気になりますね！")
                }
            }}>
                <option value = "verse1">カスタードクリーム</option>
                <option value = "verse2">生クリーム</option>
                <option value = "verse3">ハチミツ</option>
                <option value = "verse4">こしあん</option>
            </select>
            </form>
        <h4>日本大学文理学部情報科学科 Webプログラミングの演習課題</h4>
        <h4>キム・ドンヒョン 5423551</h4>
        </>
    );
}

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
                    alert("甘くて美味しいですよね！")
                } else if(selectedValue == "verse3"){
                    alert("それもありですね！")
                } else {
                    alert("渋い！でも気になりますね！")
                }
            }}>
                <option value = "verse1">カスタードクリーム</option>
                <option value = "verse2">生クリーム</option>
                <option value = "verse3">ハチミツ</option>
                <option value = "verse4">こしあん</option>
            </select>
            </form>
        <h4>日本大学文理学部情報科学科 Webプログラミングの演習課題</h4>
        <h4>キム・ドンヒョン 5423551</h4>
        </>
    );
}