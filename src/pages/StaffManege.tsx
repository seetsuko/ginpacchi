"use client"

import { MembersAndSearch } from "@/components/MembersAndSearch";
import { PageTitle } from "@/components/PageTitle";
import Link from "next/link";
import { styled } from "styled-components";

const StaffAddLinkStyle = styled.div`
    text-align: center;
    margin: 60px auto;
    font-size: 33px;
    color: #0059f3;
    border-bottom: 1px solid #0059f3;
    width: 250px;
`


const StaffManege = () => {
    return (
        <div>
            <PageTitle pageTitle="スタッフ管理"/>
            <StaffAddLinkStyle>
                <Link href="/">スタッフを追加</Link>
            </StaffAddLinkStyle>
            <MembersAndSearch />
        </div>
    );
}

export default StaffManege;