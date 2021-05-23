import moment from 'moment';

export default class DateFormatter {
    public static fromNow(date: Date): string {
        const momentDate = moment(date);
        const momentNow = moment(Date.now());

        const createDay = momentDate.format('YYYY-MM-DD');
        const currentDay = momentNow.format('YYYY-MM-DD');

        // TODO: momentjs 'ko' 값 설정에서 정하도록 해야함, 여기 외에 모든 것에 적용해야함
        if (createDay === currentDay) {
            if (momentNow.diff(momentDate) <= 1000 * 60 * 60) {
                // 1분 이내, 한 시간 내 경우
                return momentDate.locale('ko').fromNow();
            } else {
                // 당일 ~ 한 시간 전 경우
                return momentDate.locale('ko').format('HH:mm');
            }
        } else {
            // 당일 아닌 경우
            return momentDate.locale('ko').format('MM-DD'); // 년도 빼도 되는가?
        }
    }

    public static format(date: Date | number, formatType: string): string {
        return moment(date).locale('ko').format(formatType);
    }

    public static formatNewsDate(date: Date, country: string): string {
        let reDate = date;
        if (country === 'kr' || country === 'ko') {
            // 서버에서 크롤링할 때 뉴스의 날짜가 한국 시간을 가져오지만 디비 저장시 utc 0으로 저장되어 여기서 -9를 함
            reDate = (moment(date).utcOffset("-09:00") as any)._d;
        }

        const momentDate = moment(reDate);
        const momentNow = moment(Date.now());

        const createDay = momentDate.format('YYYY-MM-DD');
        const currentDay = momentNow.format('YYYY-MM-DD');

        // TODO: momentjs 'ko' 값 설정에서 정하도록 해야함, 여기 외에 모든 것에 적용해야함
        if (createDay === currentDay) {
            if (momentNow.diff(momentDate) <= 1000 * 60 * 60) {
                // 1분 이내, 한 시간 내 경우
                return momentDate.locale('ko').fromNow();
            } else {
                // 당일 ~ 한 시간 전 경우
                return momentDate.locale('ko').format('MMM Do HH:mm');
            }
        } else {
            // 당일 아닌 경우
            return momentDate.locale('ko').format('LL');
        }
    }

    public static formatChartDate(timestamp: number): string {
        return moment(timestamp * 1000).locale('ko').format('MM/DD HH:mm');
    }
}