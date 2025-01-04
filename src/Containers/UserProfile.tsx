import Button from "../Components/Button";
import Input from "../Components/Input";
import SectionsHeader from "../Components/SectionsHeader";

type UserProfileTypes = {
  onClose: () => void;
};

const UserProfile = ({ onClose }: UserProfileTypes) => {
  return (
    <form className="min-h-[300px] lg:min-w-[400px] min-w-[90vw]  p-4">
      <SectionsHeader header="User Details" />
      <Input label="User name" placeholder="Tobenna Ezimorah" />
      <Input
        label="Email"
        type="email"
        placeholder="ezimorahtobenna@gmail.com"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Tobenna Ezimorah"
        className="mb-4"
      />
      <Button onClick={onClose}>Save</Button>
    </form>
  );
};

export default UserProfile;
