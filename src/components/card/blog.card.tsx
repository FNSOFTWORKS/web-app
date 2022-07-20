import React,{useState} from "react";
import blogModel from "../../pages/blog/blog.model";
import axios from "axios";
import usePersistedState from "../../utils/usePersistedState";
import {LanguageModel} from "../../utils/language.model";
import defaultLanguage from "../../utils/language.default";

interface PropTypes{
    blog:blogModel
}

const BlogCard=(props:PropTypes)=>{
    const [language] = usePersistedState<LanguageModel>('languageState', defaultLanguage)
    const [title, setTitle] = useState("");

    const GetData = (dataId: number, languageId: number) => {
        axios.post("http://127.0.0.1:8000/app/api/blog/info/", {dataId, languageId})
            .then(res => {
                setTitle(res.data.name)
                console.log(res.data)
            }).catch(e => console.error("error", e));
        // 👉️ function doesn't return anything
    };


    GetData(
        /*
        * * 👉️ Get Blog Data
        * * DataId : Unique Id containing the blog data
        * * LanguageId : Unique Id containing language data
        */
        props.blog.id,
        language.code
    )

    return(
            <div className="blog-style">
                <div className="thumb">
                    <a href="#">
                        <img src="#"/>
                    </a>
                </div>
                <div className="info">
                    <div className="meta">

                    </div>
                    <h4 className="title">
                        <a href="#">
                            {title}
                        </a>
                    </h4>
                </div>
                <div className="author">

                </div>
            </div>
    )
}

export default BlogCard;