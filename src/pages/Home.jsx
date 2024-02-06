import React from "react";
import Text from "../component/Text";
import Photo from "../component/Photo";
import Progress from "../component/Progress";
import Btn from "../component/Btn";

const Home = () => {
  return (
    <div className="md:py-20 container w-screen   ">
      <div className="grid md:grid-flow-col border-b-2 py-10  justify-stretch ">
        <Text
        
          head=" 👋 hey , iam Abraham jacob"
          mid="front-End developer"
          text="front-end developer and contain writing based on cairo Egypt specialize in bug fixing ,responsive web design,and visual development"
        />
        <Photo />
      </div>

      <div className="grid md:grid-cols-2 md:my-20 gap-8 ">
        <Progress />
        <Text
          head="creative and professional skills"
          mid="experience on few area"
          text="In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page"
        />
      </div>
    </div>
  );
};

export default Home;
