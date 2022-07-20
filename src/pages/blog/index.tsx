import React, {useEffect, useState} from "react";
import axios from "axios";
import blogModel from "./blog.model";
import BlogCard from "../../components/card/blog.card";
import {Breadcrumb, Area} from "./styled"

const Blog = () => {

    const [blogList, setBlogList] = useState<Array<blogModel>>([]);

    useEffect(()=>{
        getBlogs()
    },[])

    const getBlogs = () => {

        let blogs:Array<blogModel>=[]

        axios.get("http://127.0.0.1:8000/app/api/blog").then(res => {
            console.log(res.data.blogs.data)
            res.data.blogs.data.forEach((item:any)=>{
                blogs.push({
                    id:item.id,
                    name:item.name,
                    code:item.code
                })
            })
            setBlogList(blogs)
        }).catch(e => console.log("error", e));
    }


    /*return (
        <>
            {
                blogList.length > 0 && blogList.map((item:blogModel, index:number)=> {
                    return (
                        <div className="row" key={index}>
                            <BlogCard blog={item}/>
                        </div>
                    )
                })
            }
        </>
    )*/

    return (
        <>
        <Breadcrumb className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>Our Blog</h1>
                    </div>
                </div>
            </div>
        </Breadcrumb>
        <Area>
            <div className="container">
                <div className="item-area">
                    <div className="row">
                        {
                            blogList.length > 0 && blogList.map((item:blogModel, index:number)=> {
                                return (
                                    <div className="col-xl-4 col-md-6 single-item" key={index}>
                                        <BlogCard blog={item}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Area>
        </>
    )
}

export default Blog;
