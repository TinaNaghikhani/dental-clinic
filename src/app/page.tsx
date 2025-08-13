import FormComponent from '@/components/form/formComponent';
import MainHeader from '@/components/shared/mainheader/mainHeader';

export default function Home() {
  return (
    <div className="m-5 mt-0 flex flex-col gap-20 items-center justify-center">
      <MainHeader/>
      <FormComponent />
    </div>
  );
}
