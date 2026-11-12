import AccountHeader from "@/components/acount/AcountHeader";
import EditProfileForm from "@/components/acount/EditProfileForm";
import LinksMenu from "@/components/acount/LinksMenu";

function Account() {
  return (
    <main className="w-[95%] lg:w-[81.25%] mb-[140px]">
      <AccountHeader />
      <div className="flex flex-col justify-between md:flex-row">
        <LinksMenu />
        <EditProfileForm />
      </div>
    </main>
  );
}

export default Account;
