import moment from "moment";

export const getDetailedDate=(ms:number)=>{
    return moment(ms).format("YYYY MMM DD HH:mm a");
}