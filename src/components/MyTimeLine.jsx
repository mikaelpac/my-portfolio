import TimelineItem from "./TimelineItem";
import hotrad3 from './../../public/images/hotrad3.png'
import blufvpn2 from './../../public/images/blufvpn2.png'
import digikuitti from './../../public/images/digikuitti.png'


const MyTimeline = () => {
  return (
    <div className="bg-white dark:bg-slate-950 text-black dark:text-white p-4 md:p-10 mx-auto" id="experience" >
      <div className="max-w-5xl m-auto  rounded-md p-3">
      <h2 className="text-center text-4xl mb-10 ">Experience</h2>
      <TimelineItem
        title="Hot Rad TV"
        description="I've had the privilege to work at Hot Rad TV (a heavy music livestreaming site) as a lead Full Stack Developer, taking on the responsibility of overhauling the site's UI, creating checkout flows and so much more. At Hot Rad I learned how to manage all the systems pertaining to a larger project and independently solve challenges, be it on the front- or the backend."
        image={hotrad3}
        duration="2022 Q2 - 2023 Q2"
        reverse={true}
      />
      <TimelineItem
        title="BLUF VPN"
        description="At BLUF VPN, in addition to React-based front-end development, I got the chance to dip my toes into the backend, utilizing NodeJS, GraphQL and PostgreSQL to create endpoints and complete various tasks. I also got very used to working in a team which embraced agile workflows."
        image={blufvpn2}
        duration="2021 Q2 - 2022 Q2"
        reverse={false}
      />
        <TimelineItem
        title="AO Solutions Oy"
        description="At AO Solutions Oy, I completed my work practice and was from the get-go given the responsibility of creating a Flutter-based mobile app MVP, which taught me all the fundamentals of front-end development. I had the chance to design and implement the UI myself, fetching and displaying data from endpoints created by my co-worker."
        image={digikuitti}
        duration="2020 Q2 - 2020 Q4"
        reverse={true}
      />
    </div>
    </div>
  );
};

export default MyTimeline;