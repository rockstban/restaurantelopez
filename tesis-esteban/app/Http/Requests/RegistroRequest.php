<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as PasswordRules;

class RegistroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                PasswordRules::min(8)
            ]

        ];
    }

    public function messages()
    {
        return [
            'name' => 'Por favor coloque el nombre',
            'email.required' => 'el email es obligatorio',
            'email.email' => 'el email no es valido',
            'email.unique' => 'El usuario ya esta registrado',
            'password' => 'el password debe contener al menos 8 caracteres',


        ];

        
    }
}
