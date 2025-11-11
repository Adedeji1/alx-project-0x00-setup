import react from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
        <Button title="Small Rounded-md" size="small" shape="rounded-md" />
        <Button title="Small Rounded-full" size="small" shape="rounded-full" />
        <Button title='Large Rounded-lg' size='small' shape='rounded-lg' />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" />
        <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
        <Button title="Medium Rounded-full" size="medium" shape="rounded-full" />
        <Button title='Large Rounded-lg' size='medium' shape='rounded-lg' />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large Rounded-sm" size="large" shape="rounded-sm" />
        <Button title="Large Rounded-md" size="large" shape="rounded-md" />
        <Button title="Large Rounded-full" size="large" shape="rounded-full" />
        <Button title='Large Rounded-lg' size='large' shape='rounded-lg' />
      </div>
    </div>
  )
}
export default Landing;