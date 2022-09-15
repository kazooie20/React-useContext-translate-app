import Button from './Button';
import Field from './Field';

const UserCreate = () => {
    return (
        <div className="UserCreate flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <Field id="name" type="text" placeholder='Name' />

            <Button text='Submit' />
        </div>
    )
}

export default UserCreate