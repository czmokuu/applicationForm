export class ApplicationFormDto {
    constructor(readonly name: string,
        readonly surname: string,
        readonly email: string,
        readonly sex: string,
        readonly dateOfBirth: string,
        readonly country: string,
        readonly street: string,
        readonly postCode: string,
        readonly motivation: string,
        readonly resume: File,
        readonly cv: File,
        readonly portfolio: File) {
    }
    static create(from: any): ApplicationFormDto {

        return new ApplicationFormDto(from.name,
            from.surname,
            from.email,
            from.sex,
            from.dateOfBirth,
            from.country,
            from.street,
            from.postCode,
            from.motivation,
            from.resume,
            from.cv,
            from.portfolio
        )
    }
}