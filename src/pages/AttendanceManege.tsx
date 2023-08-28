"use client"

const AttendanceManegeStyle = styled.div`
    
`

import { DateAndMainText } from "@/components/DateAndMainText";
import dayjs from "dayjs";
import { styled } from "styled-components";

const today = dayjs()
const staffName = "tatata"

const AttendanceManege = () => {
    return (
        <AttendanceManegeStyle>
            <DateAndMainText date={today} mainText={staffName}/>
        </AttendanceManegeStyle>
    );
}

export default AttendanceManege;