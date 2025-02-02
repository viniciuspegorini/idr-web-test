import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { CreateUserModel } from '@/domain/models'
import { CreateUser } from '@/domain/useCases'

export class RemoteCreateUser implements CreateUser {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<void>
	) {}

	async create(params: CreateUserModel): Promise<void> {
		const body = {
			...params,
			username: params.email,
			displayName: params.name,
			cpf: params.cpf.replace(/\D/g, ''),
			phone: params.phone.replace(/\D/g, ''),
			cep: params.cep.replace(/\D/g, ''),
			county: params.city
		}

		const { statusCode } = await this.httpClient.request({
			url: this.url,
			method: 'post',
			body
		})

		if (statusCode === HttpStatusCode.created) return

		throw new UnexpectedError()
	}
}
