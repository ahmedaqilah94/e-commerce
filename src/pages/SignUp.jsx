import ImageSide from "@/components/SignUp/ImageSide";
import SignUpSide from "@/components/SignUp/SignUpSide";

function SignUp() {
  return (
    <main className="w-[95%] lg:w-[81.25%] mb-[140px] flex flex-col lg:flex-row gap-[20px] items-center justify-between">
      <ImageSide />
      <SignUpSide />
    </main>
  );
}

export default SignUp;
