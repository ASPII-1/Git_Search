import React, { useState, useEffect } from "react";
import ProfForm from "./ProfForm";

export default function Search() {
    const [data, setData] = useState({});
    const [isLoad, setIsLoad] = useState(true);
    const [user, setUser] = useState("aspii-1");

    useEffect(() => {
        findUser();
    }, [user]);

    async function findUser() {
        const url = "https://api.github.com/users/";
        try {
            const response = await fetch(url + user);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const res = await response.json();
            setIsLoad(false);
            setData(res);
            console.log(res);
        } catch (error) {
            console.error("Error fetching user data:", error);
            setIsLoad(false);
        }
    }

    function search(username) {
        setUser(username);
        console.log(username);
    }

    return (
        <>
            <div>
            <img style={{ width: '300px', height: '300px' }} src={data.avatar_url} alt="" />
            <h2>
                UserName:-
                <span style={{ color: '#0B8BCB' }}> {data.login}</span>
            </h2>
            <p>
                <span>Repositories:- </span> {data.public_repos}
            </p>
            <p>
                <span>Followers:- </span>
                {data.followers}
            </p>
            <ProfForm search={search} />
        </div >
        </>
    );
}
