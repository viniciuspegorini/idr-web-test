import { useCallback, useState } from 'react'

import { LoginUserParams } from '@/domain/useCases'
import { useAuth } from '@/presentation/store'

const INITIAL_FORM_DATA: LoginUserParams = {
	email: '',
	password: ''
}

export const useLogin = () => {
	const authHookData = useAuth()
	const { loading, handleSignIn } = authHookData

	const [formData, setFormData] = useState<LoginUserParams>(INITIAL_FORM_DATA)

	const handleSubmit = useCallback(async () => {
		await handleSignIn(formData)
	}, [formData, handleSignIn])

	return {
		loading,
		formData,
		setFormData,
		handleSubmit
	}
}
