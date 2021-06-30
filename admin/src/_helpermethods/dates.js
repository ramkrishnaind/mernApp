import moment from 'moment';


export const formateDate = (val) => {
    const dateformate = moment(new Date(val)).utcOffset("+05:30").format("MM/DD/YYYY")
    return dateformate
};