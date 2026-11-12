import LogInSide from "@/components/LogIn/LogInSide";
import ImageSide from "@/components/SignUp/ImageSide";

function LogIn() {
  return (
    <main className="w-[95%] lg:w-[81.25%] mb-[140px] flex flex-col lg:flex-row gap-[20px] items-center justify-between">
      <ImageSide />
      <LogInSide />
    </main>
  );
}

export default LogIn;
