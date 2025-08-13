import React from 'react';
import Input from '../base/input/input';
import Buttons from '../base/button/button';
import { servicesDentalLoc } from '@/localization/localization';
import { doctorNameLoc } from '@/localization/localization';
import { formBtnLoc } from '@/localization/localization';
import { inputPlaceholder } from '@/localization/localization';
import JalaliDateInput from '../jalaliCalender/jalaliCalender';
import AppointmentTime from '../timePiker/timePker';
export default function FormComponent() {
  return (
    <div className="w-full rounded-lg shadow-2xl bg-white p-4 m-3">
      <form
        action=""
        className="grid grid-cols-3 gap-8 justify-center items-center"
      >
        <Input
          type={'text'}
          className={
            'px-2 py-1 border shadow-lg rounded-lg focus:outline-none '
          }
          placeholder={inputPlaceholder.name}
          label={''}
        />
        <Input
          type={'number'}
          className={
            'px-2 py-1 border shadow-lg rounded-lg focus:outline-none '
          }
          placeholder={inputPlaceholder.phone}
          label={''}
        />
        <Input
          type={'number'}
          className={
            'px-2 py-1 border shadow-lg rounded-lg focus:outline-none '
          }
          placeholder={inputPlaceholder.nationalCode}
          label={''}
        />
        <JalaliDateInput />
        <AppointmentTime />
        <select
          name="services"
          id="services"
          defaultValue="default"
          className="h-8 px-2 py-1 border shadow-lg rounded-lg focus:outline-none"
        >
          <option value="default" disabled>
            {servicesDentalLoc.defult}
          </option>
          <option value="Scaling">{servicesDentalLoc.Scaling}</option>
          <option value="dentalComposite">
            {servicesDentalLoc.dentalComposite}
          </option>
          <option value="dentalFilling">
            {servicesDentalLoc.dentalFilling}
          </option>
          <option value="dentalImplant">
            {servicesDentalLoc.dentalImplant}
          </option>
          <option value="gumSurgery">{servicesDentalLoc.gumSurgery}</option>
          <option value="laminate">{servicesDentalLoc.laminate}</option>
          <option value="wisdomToothExtraction">
            {servicesDentalLoc.wisdomToothExtraction}
          </option>
          <option value="orthodontics">{servicesDentalLoc.orthodontics}</option>
          <option value="rootCanalTreatment">
            {servicesDentalLoc.rootCanalTreatment}
          </option>
          <option value="toothExtraction">
            {servicesDentalLoc.toothExtraction}
          </option>
          <option value="checkup">{servicesDentalLoc.checkup}</option>
        </select>
        <textarea name="" id="" className="h-20 px-2 py-1 border shadow-lg rounded-lg focus:outline-none" placeholder='توضیحات'/>
        <Input type={'radio'} name="hasPreviousVisit" value="yes" required placeholder={''} className={''} label={'مراجعه قبلی داشتم'}/>
        <Input type={'radio'} name="hasPreviousVisit" value="no" required placeholder={''} className={''} label={'مراجعه قبلی نداشتم'}/>
        <Buttons
          type={'submit'}
          className={
            'm-2 px-4 py-1 bg-green-400 rounded-lg cursor-pointer hover:bg-green-800 hover:text-white font-bold'
          }
          label={formBtnLoc.register}
          disable={false}
        />
      </form>
    </div>
  );
}
