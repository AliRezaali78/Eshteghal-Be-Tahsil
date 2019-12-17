export class User {
    name: string;
    lastname: string;
    father: string;
    studentCode: string;
    nationalCode: string;
    major: string;
    startDate: string;
    level: string;
    type: string;
    startDateOption: string;
    admin?: boolean;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
    persianDataMapToUser(data) {
        this.name = data['نام'];
        this.lastname = data['نام خانوادگی'];
        this.father = data['نام پدر'];
        this.major = data['رشته تحصیلی'];
        this.nationalCode = data['کد ملی'];
        this.studentCode = data['شماره دانشجویی'];
        this.startDate = data['سال شروع تحصیل'];
        this.startDateOption = data['نیمسال'];
        this.type = data['دوره'];
        this.level = data['مقطع'];
    }
}