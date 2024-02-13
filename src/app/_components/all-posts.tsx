"use client";


import { api } from "@/trpc/react";
import {useQuery} from "@tanstack/react-query";

export function AllPosts() {
    const getAllPosts =  api.post.getAll.useQuery()
    const mappedPosts = getAllPosts.data?.map((post, i) => (<li key={i}>{i}.{post.name}</li>));

    return (
        <div>
            <ul>
                {mappedPosts ?? 'not yet'}
            </ul>
        </div>
    )
}
