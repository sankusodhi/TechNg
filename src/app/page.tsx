
import About_section from "@/components/home/about_section";
import Our_services from "@/components/home/our_services";
import Case_study from "@/components/home/case_study";



export default function Home() {
  return (
    <><header>
<link rel="icon" type="image/png" href="/Tech.png" />
  
    </header>
    <div className="pb-7 w-screen h-full  ">
   <About_section />
   <Our_services />
    <Case_study />
    </div>
    </>
  );
}
