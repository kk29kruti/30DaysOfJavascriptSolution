// 1)Create a human readable time format using the Date time object.
// The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// i) YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const date = new Date();

console.log('YYYY-MM-DD HH:mm', date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()+ ' '+ (date<=9 ? '0'+date.getHours() + ':' + '0'+date.getMinutes() :date.getHours() + ':'+ date.getMinutes()));


