import moment from 'moment';
import weatherDataFormat from './service.filterWeatherData'

const transformForcastQueryService = data => (

    data.list.filter(item => (
            moment.unix(item.dt).utc().hour() === 6 ||
            moment.unix(item.dt).utc().hour() === 12 ||
            moment.unix(item.dt).utc().hour() === 18
        )).map(item => {
            const {data} = weatherDataFormat(item)
            return (
                {
                    weekDay: moment.unix(item.dt).utc().format('ddd'),
                    hour: moment.unix(item.dt).utc().hour(),
                    data
                }
            )
        }
    )
);

export default transformForcastQueryService;