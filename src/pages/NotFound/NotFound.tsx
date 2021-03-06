import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category, deleteCategory, getCategories, postCategory } from '../../api';
import { loginUser, registerUser } from '../../api/auth';
import { Counter } from '../../components/shared';
import { FormikInput } from '../../components/shared/formikAdapters';
import { useHotels } from '../../hooks/hotels/useHotels';
import { createHotel, loadHotels } from '../../state/actions/hotels';
import { allHotelsSelector } from '../../state/selectors/hotels';
import { UserFormSchema } from '../../utils/validation-schemas';

interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const defaultValues: UserFormValues = {
  firstName: '',
  lastName: '',
  email: ''
};

export const NotFound = () => {
  const dispatch = useDispatch();

  const hotelsData = useSelector(allHotelsSelector);

  const createUser = () => {
    registerUser({
      email: 'd.das@ads.dd',
      firstName: 'fdsdf',
      lastName: 'dfgdfgdfg',
      password: 'Aa123456'
    });
  };

  console.log(hotelsData);

  const login = async () => {
    try {
      const res = await loginUser({
        email: 'd.das@ads.dd',
        password: 'Aa123456'
      });

      const { access_token, refresh_token } = res.data;
      localStorage.setItem('token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(loadHotels());
  }, []);

  // const { data, addHotel } = useHotels();
  // console.log(data);

  const createHotel1 = () => {
    dispatch(
      createHotel({
        name: 'aaadadkbkjbbjkbjkbjkjkb---',
        description: 'aaa',
        phone: '38080664479770',
        address: {
          country: 'aaa',
          city: 'aaa',
          state: 'aaa',
          street: 'aaa',
          address1: 'aaa',
          address2: 'aaa',
          zip: 0,
          location: {
            latitude: '0',
            longtitude: '0'
          }
        }
      })
    );
    // addHotel({
    //   name: 'aaadad',
    //   description: 'aaa',
    //   phone: '38080664479770',
    //   address: {
    //     country: 'aaa',
    //     city: 'aaa',
    //     state: 'aaa',
    //     street: 'aaa',
    //     address1: 'aaa',
    //     address2: 'aaa',
    //     zip: 0,
    //     location: {
    //       latitude: '0',
    //       longtitude: '0'
    //     }
    //   }
    // })
  };
  return (
    <div>
      <Counter />

      <button onClick={createHotel1}>Create hotel</button>
      <button onClick={createUser}>Register</button>
      <button onClick={login}>Login</button>
      <Formik
        initialValues={defaultValues}
        validationSchema={UserFormSchema}
        onSubmit={val => {
          console.log(val);
        }}
      >
        <Form>
          <FormikInput name='firstName' label='First Name' />
          <FormikInput name='lastName' label='Last Name' />
          <FormikInput name='email' label='Email' />

          <button>Send</button>
        </Form>
      </Formik>
    </div>
  );
};
