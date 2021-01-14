import moment from 'moment';

const helpers = {
    formattedCedis(amount: number | string) {
        return `GHC ${Number(amount).toFixed(2)}`;
    },

    formattedDateString(date: Date | Date[]) {
        if (Array.isArray(date)) {
            const date_array: string[] = [];

            date.forEach(date => {
                date_array.push(moment(date).format('YYYY-MM-DD'));
            });

            return date_array;
        }
        return moment(date).format('YYYY-MM-DD');
    },

    formattedDate(date: string) {
        if (!moment(date)) {
            return 'N/A';
        }
        return moment(date).format('Do MMMM YYYY');
    },

    formattedDateTime(date: string) {
        if (!moment(date)) {
            return 'N/A';
        }
        return moment(date).format('Do MMMM YYYY, h:mm:ss a');
    },

    formattedDateWithoutYear(date: string) {
        if (!moment(date)) {
            return 'N/A';
        }
        return moment(date).format('Do MMMM');
    },

    capitalize(word: string): string {
        if (typeof word !== 'string') {
            return '';
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    },

    age(date: string): string {
        if (!moment(date)) {
            return 'N/A';
        }
        return `${Number(new Date().getFullYear()) - Number(new Date(date).getFullYear())} yrs.`;
    },
}

export default helpers;
