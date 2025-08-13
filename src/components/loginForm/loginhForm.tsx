import React from 'react';
import Input from '../base/input/input';
import Buttons from '../base/button/button';
import { loginLoc } from '@/localization/localization';
import Link from 'next/link';
export default function LoginhForm() {
  return (
    <div className="bg-sky-950 p-5 rounded-4xl w-1/2">
      <div className="border-2 border-white p-5 h-full rounded-4xl flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-3xl font-semibold">{loginLoc.system}</h1>
        <h3 className="text-2xl">{loginLoc.welcome}</h3>
        <form
          action=""
          className=" w-full flex flex-col gap-4 justify-center items-center p-2 m-2"
        >
          <Input
            type={'text'}
            placeholder={'email@gmail.com'}
            className={
              'bg-white w-full px-2 py-1 focus:outline-none text-sky-900 rounded-lg'
            }
            label={loginLoc.email}
          />
          <Input
            type={'password'}
            placeholder={'T12345'}
            className={
              'bg-white w-full px-2 py-1 focus:outline-none text-sky-900 rounded-lg'
            }
            label={loginLoc.password}
          />
          <Link href={'/dashboard'}>
            <Buttons
              type={'submit'}
              className={
                'bg-green-600 text-2xl px-4 py-2 rounded-lg w-full hover:bg-green-800 cursor-pointer'
              }
              label={loginLoc.login}
              disable={false}
            />
          </Link>
        </form>
      </div>
    </div>
  );
}
