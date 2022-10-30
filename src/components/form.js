import React from "react";
import * as S from "../styles/formStyles";
import Multiselect from "multiselect-react-dropdown";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useState, useEffect } from "react";
import axios from "axios";
import { urlCity, urlCounty } from "../API/API";

//Validações do Yup
const schema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    email:yup.string().email("Digite um email válido").required("O email é obrigatório"),
    cpf: yup.string().min(11, "O cpf deve conter 11 números").required("O cpf é obrigatório"),
    phone: yup.string().required("O telefone é obrigatório"),
    country: yup.array().of(yup.string()),
    city: yup.array().of(yup.string())
  }).required();

const Form = () => {

    //Estado do useForm
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    //Verificação da Validação no console
    const onSubmit = (userData) => {
        console.log(userData)
    }

    //Estado do campo paises e cidades
    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);

    //Função que retorna o array com os países
    const newCountry = country.map((item) => {
        return item.name_ptbr;
    })

    //Função que retorna o array com as cidades
    const newCity = city.map((item) => {
        return item.name;
    })
    
    useEffect(() => {
        axios
            .get(urlCounty)
            .then((res) => {
                setCountry(res.data)
            }).catch((err) => {
                console.log(err, "Opa! Alguma coisa deu errado!")
            })
    }, [])

    useEffect(() => {
        axios
            .get(urlCity)
            .then((res) => {
                setCity(res.data)
                console.log(city)
            }).catch((err) => {
                console.log(err,"Opa! Alguma coisa deu errado!")
            })
    }, [])

    return(
        <S.Container>
            <S.FormContent onSubmit={handleSubmit(onSubmit)}>
                <S.TitleContent>
                    <h2>Dados Cadastrais</h2>
                </S.TitleContent>

                <S.IputContent>
                    <label>Nome:</label>
                    <S.Input 
                        {...register("name")}
                        type="text"
                    />
                    {<S.Alert>{errors.name?.message}</S.Alert>}
                </S.IputContent>

                <S.IputContent>
                    <label>Email:</label>
                    <S.Input 
                        {...register("email")}
                        type="email"
                    />
                    {<S.Alert>{errors.email?.message}</S.Alert>}
                </S.IputContent>

                <S.IputContent>
                    <label>Telefone:</label>
                    <S.Input 
                        {...register("phone")}
                        type="number"
                    />
                    {<S.Alert>{errors.phone?.message}</S.Alert>}
                </S.IputContent>

                <S.IputContent>
                    <label>CPF:</label>
                    <S.Input 
                        {...register("cpf")}
                    />
                    {<S.Alert>{errors.cpf?.message}</S.Alert>}
                </S.IputContent>

                <S.IputContent>
                    <label>País:</label>
                    <Multiselect
                        {...register("country")}
                        isObject={false}
                        options={ newCountry }
                        
                        showArrow
                        placeholder=" "
                        style={{
                            searchBox: {
                                'margin-bottom': 5,
                                'margin-top': 10,
                                background: '#eee',
                            },
                            chips: {
                                background: '#CC71AE'
                            }
                        }}
                    />
                    {<S.Alert>{errors.country?.message}</S.Alert>}
                </S.IputContent>

                <S.IputContent>
                    <label>Cidades:</label>
                    <Multiselect
                        {...register("city")}
                        isObject={false}
                        options={ newCity }

                        showArrow
                        placeholder=" "
                        style={{
                            searchBox: {
                                'margin-bottom': 5,
                                'margin-top': 10,
                                background: '#eee'                         
                            },
                            chips: {
                                background: '#CC71AE'
                            }
                        }}
                    />
                    {<S.Alert>{errors.city?.message}</S.Alert>}
                </S.IputContent>        
                <S.ButtonContent>
                    <button type="submit">Enviar</button>
                </S.ButtonContent>
            </S.FormContent>
        </S.Container>
    )
}
export default Form;